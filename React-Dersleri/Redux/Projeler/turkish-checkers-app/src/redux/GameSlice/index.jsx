import { createSlice, current } from "@reduxjs/toolkit";
import { nanoid } from "@reduxjs/toolkit";

const configureBoard = () => {
  const gameBoard = [];
  //let rowCell = [];
  // x eksenini oluştur (matrisi kur)
  for (let i = 0; i <= 7; i++) {
    // y eksenini oluştur
    for (let j = 0; j <= 7; j++) {
      // her birim x ekseni için y eksenini düzenle.
      (i + j) % 2 === 0
        ? gameBoard.push({
            id: nanoid(),
            positionX: i,
            positionY: j,
            color: "white",
            isEmpty: true,
            isPlayable: false,
            stoneData: {},
          })
        : gameBoard.push({
            id: nanoid(),
            positionX: i,
            positionY: j,
            color: "black",
            isEmpty: true,
            isPlayable: false,
            stoneData: {},
          });
    }
    // gameBoard.push(rowCell);
    // rowCell = [];
  }
  // console.log(gameBoard);
  return gameBoard;
};
const setTheBackStones = () => {
  const blackStones = [];

  for (let i = 5; i <= 6; i++) {
    for (let j = 0; j <= 7; j++) {
      blackStones.push({
        id: nanoid(),
        positionX: j,
        positionY: i,
        color: "black",
        isActive: true,
        isChekers: false,
      });
    }
  }
  return blackStones;
};
const setTheWhiteStones = () => {
  const whiteStones = [];

  for (let i = 1; i <= 2; i++) {
    for (let j = 0; j <= 7; j++) {
      whiteStones.push({
        id: nanoid(),
        positionX: j,
        positionY: i,
        color: "white",
        isActive: true,
        isChekers: false,
      });
    }
  }
  return whiteStones;
};

const moveStone = (stoneData, board) => {
  console.log("===>>", stoneData);

  if (stoneData.color === "white") {
    // white için gidilecekleri hesapla
    const moveUp = { pX: stoneData.positionX, pY: stoneData.positionY + 1 }; //stoneData.positionY + 1;
    const moveLeft = { pX: stoneData.positionX - 1, pY: stoneData.positionY }; //stoneData.positionX - 1;
    const moveRight = { pX: stoneData.positionX + 1, pY: stoneData.positionY }; //stoneData.positionX + 1;

    const suitableUp = board.some(
      (stone) =>
        stone.positionX === moveUp.pX &&
        stone.positionY === moveUp.pY &&
        stone.isEmpty
    );
    const suitableLeft = board.some(
      (stone) =>
        stone.positionX === moveLeft.pX &&
        stone.positionY === moveLeft.pY &&
        stone.isEmpty
    );
    const suitablaRight = board.some(
      (stone) =>
        stone.positionX === moveRight.pX &&
        stone.positionY === moveRight.pY &&
        stone.isEmpty
    );

    return [
      suitableUp && moveUp,
      suitableLeft && suitableLeft,
      suitablaRight && suitablaRight,
    ];
  } else if (stoneData.color === "black") {
    // black için gidilecekleri hesapla
    const moveUp = { pX: stoneData.positionX, pY: stoneData.positionY - 1 }; //stoneData.positionY + 1;
    const moveLeft = { pX: stoneData.positionX - 1, pY: stoneData.positionY }; //stoneData.positionX - 1;
    const moveRight = { pX: stoneData.positionX + 1, pY: stoneData.positionY }; //stoneData.positionX + 1;

    const suitableUp = board.some(
      (stone) =>
        stone.positionX === moveUp.pX &&
        stone.positionY === moveUp.pY &&
        stone.isEmpty
    );
    const suitableLeft = board.some(
      (stone) =>
        stone.positionX === moveLeft.pX &&
        stone.positionY === moveLeft.pY &&
        stone.isEmpty
    );
    const suitablaRight = board.some(
      (stone) =>
        stone.positionX === moveRight.pX &&
        stone.positionY === moveRight.pY &&
        stone.isEmpty
    );

    return [
      suitableUp && moveUp,
      suitableLeft && suitableLeft,
      suitablaRight && suitablaRight,
    ];
  }
};

const configureUsersStonesOnBoard = () => {
  const board = configureBoard().flat();
  const totalUsersStones = [
    ...setTheWhiteStones().flat(),
    ...setTheBackStones().flat(),
  ];

  for (let j = 0; j <= 7; j++) {
    for (let i = 0; i <= 7; i++) {
      const anyStone = totalUsersStones.find(
        (stone) => stone.positionX === i && stone.positionY === j
      );
      // board.pX = wStone.pX
      if (anyStone) {
        const findStone = board.find(
          (stone) => stone.positionX === i && stone.positionY === j
        );
        findStone.stoneData = anyStone;
        findStone.isEmpty = false;
      }
    }
  }
  return board;
};
export const GameSlice = createSlice({
  name: "game",
  initialState: {
    board: configureBoard(),
    user1: {
      id: 1,
      name: "user 1",
      totalStones: 16,
      color: "white",
      stones: [],
    },
    user2: {
      id: 2,
      name: "user 2",
      totalStones: 16,
      color: "black",
      stones: [],
    },
    gameStatus: "",
    showModal: false,
    player: "white",
    selectedStone: "",
    whiteStones: "",
    blackStones: "",
    moveUp: "",
    moveLeft: "",
    moveRight: "",
  },
  reducers: {
    openStartGameModal: (state) => {
      state.gameStatus = "start";
    },
    closeGameStartModal: (state) => {
      state.gameStatus = "";
    },
    openModal: (state) => {
      state.showModal = true;
    },
    closeModal: (state) => {
      state.showModal = false;
    },
    selectedUserStone: (state, actions) => {
      state.selectedStone = actions.payload;
      const positions = moveStone(actions.payload, current(state.board));

      state.moveUp = positions[0];
      state.moveLeft = positions[1];
      state.moveRight = positions[2];

      console.log(positions);
    },
    deselectedUserStone: (state, actions) => {
      state.selectedStone = "";
      state.moveUp = "";
      state.moveLeft = "";
      state.moveRight = "";
    },
    startGame: (state, actions) => {
      const { user1, user2 } = actions.payload;
      state.user1.name = user1;
      state.user2.name = user2;
      state.gameStatus = "playing";
      state.user1.stones = setTheWhiteStones();
      state.user2.stones = setTheBackStones();
      state.board = configureUsersStonesOnBoard();
    },
    resetGame: (state) => {
      state.board = configureBoard();
      state.gameStatus = "";
      state.user1 = {
        id: 1,
        name: "user 1",
        totalStones: 16,
        color: "white",
        stones: [],
      };
      state.user2 = {
        id: 2,
        name: "user 2",
        totalStones: 16,
        color: "black",
        stones: [],
      };
      state.showModal = false;
      state.player = "white";
      state.whiteStones = "";
      state.blackStones = "";
      state.moveUp = "";
      state.moveLeft = "";
      state.moveRight = "";
      state.selectedStone = "";
    },
  },
});
export const {
  openStartGameModal,
  closeGameStartModal,
  openModal,
  closeModal,
  selectedUserStone,
  deselectedUserStone,
  startGame,
  resetGame,
} = GameSlice.actions;
export default GameSlice.reducer;
