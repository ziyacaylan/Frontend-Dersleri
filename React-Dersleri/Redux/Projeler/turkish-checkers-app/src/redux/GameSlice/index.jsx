import { createSlice, current } from "@reduxjs/toolkit";

import {
  configureBoard,
  setTheBackStones,
  setTheWhiteStones,
  moveStone,
  setMoveStone,
} from "../../utils/chekers";

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
    rivalStones: "",
    multiRivalStones: "",
    multiCoordinates: "",
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
      if (state.selectedStone.isChekers) {
        const { multiAvailableCoordinates, multiAvailableRivalStones } =
          moveStone(actions.payload, current(state.board));

        state.multiCoordinates = multiAvailableCoordinates;
        state.multiRivalStones = multiAvailableRivalStones;
      } else {
        const positions = moveStone(actions.payload, current(state.board));
        //console.log("Rakip taşlar bunlar", positions[3]);

        state.rivalStones =
          positions[3].rivalStoneUp ||
          positions[3].rivalStoneLeft ||
          positions[3].rivalStoneRight
            ? positions[3]
            : false;

        state.moveUp = positions[0].suitable ? positions[0] : false;
        state.moveLeft = positions[1].suitable ? positions[1] : false;
        state.moveRight = positions[2].suitable ? positions[2] : false;
        //console.log(positions);
      }
    },
    deselectedUserStone: (state, actions) => {
      state.selectedStone = "";
      state.moveUp = "";
      state.moveLeft = "";
      state.moveRight = "";
      state.rivalStones = "";
    },
    moveSelectedUserStone: (state, actions) => {
      const clickedCell = actions.payload;
      let moveResult = {};

      if (state.selectedStone) {
        moveResult = setMoveStone(
          clickedCell,
          current(state.board),
          current(state.selectedStone),
          state.rivalStones && current(state.rivalStones),
          state.moveUp && current(state.moveUp),
          state.moveLeft && current(state.moveLeft),
          state.moveRight && current(state.moveRight),
          state.multiRivalStones && current(state.multiRivalStones),
          state.multiCoordinates && current(state.multiCoordinates)
        );
        const { newBoard, pasiveRivalStone } = moveResult;
        if (pasiveRivalStone?.status && pasiveRivalStone.isDone) {
          const userColor = pasiveRivalStone.data.color;
          if (userColor === "white") {
            state.user1.totalStones = state.user1.totalStones - 1;
          } else {
            state.user2.totalStones = state.user2.totalStones - 1;
          }
        }

        if (state.user1.totalStones === 0 || state.user2.totalStones === 0) {
          state.gameStatus = "gameover";
          state.showModal = true;
        }

        state.board = newBoard;
        state.selectedStone = "";
        state.moveUp = "";
        state.moveLeft = "";
        state.moveRight = "";
        state.rivalStones = "";
        state.multiCoordinates = "";
        state.multiRivalStones = "";
        if (
          !pasiveRivalStone?.status &&
          pasiveRivalStone.isDone &&
          state.player === "white"
        ) {
          state.player = "black";
        } else if (
          !pasiveRivalStone?.status &&
          pasiveRivalStone.isDone &&
          state.player === "black"
        ) {
          state.player = "white";
        }
      }
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
      state.rivalStones = "";
      state.multiCoordinates = "";
      state.multiRivalStones = "";
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
  moveSelectedUserStone,
  startGame,
  resetGame,
} = GameSlice.actions;
export default GameSlice.reducer;
