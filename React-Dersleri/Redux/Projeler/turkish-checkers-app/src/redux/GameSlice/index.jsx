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
  // console.log("===>>", stoneData);
  // rakip taşlar bunun içinde olacak
  const rivalStones = {
    rivalStoneUp: "",
    rivalStoneLeft: "",
    rivalStoneRight: "",
  };

  if (stoneData.color === "white") {
    // white için gidilecekleri hesapla
    if (stoneData.isChekers) {
      // beyaz dama
      let multiAvailableCoordinates = {
        moveUps: [],
        moveLefts: [],
        moveRights: [],
      };
      let multiAvailableRivalStones = {
        moveUpRivalStones: [],
        moveLeftRivalStones: [],
        moveRightStones: [],
      };

      //**************************** Burada Up hesaplanacak ****************************************** */
      // Up
      // sıfıra çek
      for (let i = stoneData.positionY - 1; i >= 0; i--) {
        const firstRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "black"
        );
        const secondRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i - 1 &&
            item.stoneData.color === "black"
        );
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        const secondAvailableCell = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i - 1 &&
            item.isEmpty
        );

        const myStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "white"
        );

        if ((firstRivalStone && secondRivalStone) || myStone) {
          i = -1;
        }
        firstRivalStone &&
          !secondRivalStone &&
          secondAvailableCell &&
          multiAvailableRivalStones.moveUpRivalStones.push(firstRivalStone);
        multiAvailableCoordinates.moveUps.push(...availableCell);
      }
      // 7ye çek
      for (let i = stoneData.positionY + 1; i <= 7; i++) {
        const firstRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "black"
        );
        const secondRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i + 1 &&
            item.stoneData.color === "black"
        );
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        const secondAvailableCell = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i + 1 &&
            item.isEmpty
        );

        const myStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "white"
        );

        if ((firstRivalStone && secondRivalStone) || myStone) {
          i = 8;
        }
        firstRivalStone &&
          !secondRivalStone &&
          secondAvailableCell &&
          multiAvailableRivalStones.moveUpRivalStones.push(firstRivalStone);
        multiAvailableCoordinates.moveUps.push(...availableCell);
      }
      //**************************** Burada Left hesaplanacak ****************************************** */
      // sıfıra çek
      for (let i = stoneData.positionX - 1; i >= 0; i--) {
        const firstRivalStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "black"
        );
        const secondRivalStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i - 1 &&
            item.stoneData.color === "black"
        );
        const availableCellLeft = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        const secondAvailableCellLeft = board.find(
          (item) =>
            item.positionX === i - 1 &&
            item.positionY === stoneData.positionY &&
            item.isEmpty
        );

        const myStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "white"
        );

        if ((firstRivalStoneLeft && secondRivalStoneLeft) || myStoneLeft) {
          i = -1;
        }
        firstRivalStoneLeft &&
          !secondRivalStoneLeft &&
          secondAvailableCellLeft &&
          multiAvailableRivalStones.moveLeftRivalStones.push(
            firstRivalStoneLeft
          );
        multiAvailableCoordinates.moveLefts.push(...availableCellLeft);
      }
      //**************************** Burada Right hesaplanacak ****************************************** */
      // 7ye çek
      for (let i = stoneData.positionX + 1; i <= 7; i++) {
        const firstRivalStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "black"
        );
        const secondRivalStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i + 1 &&
            item.stoneData.color === "black"
        );
        const availableCellRight = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        const secondAvailableCellRight = board.find(
          (item) =>
            item.positionX === i + 1 &&
            item.positionY === stoneData.positionY &&
            item.isEmpty
        );

        const myStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "white"
        );

        if ((firstRivalStoneRight && secondRivalStoneRight) || myStoneRight) {
          i = 8;
        }
        firstRivalStoneRight &&
          !secondRivalStoneRight &&
          secondAvailableCellRight &&
          multiAvailableRivalStones.moveRightStones.push(firstRivalStoneRight);
        multiAvailableCoordinates.moveRights.push(...availableCellRight);
      }
      //console.log(multiRivalStones);
      return { multiAvailableCoordinates, multiAvailableRivalStones };
    } else {
      let moveUp = {
        suitable: true,
        pX: stoneData.positionX,
        pY: stoneData.positionY + 1,
      }; //stoneData.positionY + 1;
      let moveLeft = {
        suitable: true,
        pX: stoneData.positionX - 1,
        pY: stoneData.positionY,
      }; //stoneData.positionX - 1;
      let moveRight = {
        suitable: true,
        pX: stoneData.positionX + 1,
        pY: stoneData.positionY,
      }; //stoneData.positionX + 1;

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

      if (!suitableUp) {
        // rakip taş üstünden ileri atla
        moveUp = {
          suitable: false,
          pX: stoneData.positionX,
          pY: stoneData.positionY + 2,
        };

        //rakip taşı bul
        const findRivalStoneUp = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX &&
            stone.positionY === stoneData.positionY + 1
        );
        const findDoubleRivalUp = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX &&
            stone.positionY === stoneData.positionY + 2 &&
            stone.isEmpty
        );

        findRivalStoneUp &&
        findRivalStoneUp.stoneData.color === "black" &&
        findDoubleRivalUp
          ? (rivalStones.rivalStoneUp = findRivalStoneUp?.stoneData)
          : (rivalStones.rivalStoneUp = false);

        findRivalStoneUp?.stoneData?.color === "black" && findDoubleRivalUp
          ? (moveUp.suitable = true)
          : (moveUp.suitable = false);

        //console.log("rakip taş olabilir mi", findRivalStoneUp);
      }
      if (!suitableLeft) {
        // rakip taş üstünden sola atla
        moveLeft = {
          suitable: false,
          pX: stoneData.positionX - 2,
          pY: stoneData.positionY,
        };

        //rakit taşı bul
        const findRivalStoneLeft = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX - 1 &&
            stone.positionY === stoneData.positionY
        );
        const findDoubleRivalLeft = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX - 2 &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );

        findRivalStoneLeft &&
        findRivalStoneLeft.stoneData.color === "black" &&
        findDoubleRivalLeft
          ? (rivalStones.rivalStoneLeft = findRivalStoneLeft.stoneData)
          : (rivalStones.rivalStoneLeft = false);

        findRivalStoneLeft?.stoneData?.color === "black" && findDoubleRivalLeft
          ? (moveLeft.suitable = true)
          : (moveLeft.suitable = false);
      }

      if (!suitablaRight) {
        // rakip taş üstünden sağa alta
        moveRight = {
          suitable: false,
          pX: stoneData.positionX + 2,
          pY: stoneData.positionY,
        };
        //rakit taşı bul
        const findRivalStoneRight = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX + 1 &&
            stone.positionY === stoneData.positionY
        );
        const findDoubleRivalRight = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX + 2 &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );

        findRivalStoneRight &&
        findRivalStoneRight.stoneData.color === "black" &&
        findDoubleRivalRight
          ? (rivalStones.rivalStoneRight = findRivalStoneRight.stoneData)
          : (rivalStones.rivalStoneRight = false);

        findRivalStoneRight?.stoneData?.color === "black" &&
        findDoubleRivalRight
          ? (moveRight.suitable = true)
          : (moveRight.suitable = false);
      }

      return [moveUp, moveLeft, moveRight, rivalStones];
    }
  } else if (stoneData.color === "black") {
    let multiAvailableCoordinates = {
      moveUps: [],
      moveLefts: [],
      moveRights: [],
    };
    // black için gidilecekleri hesapla
    if (stoneData.isChekers) {
      //**************************** Burada Up hesaplanacak ****************************************** */
      // Up
      // sıfıra çek
      for (let i = stoneData.positionY - 1; i >= 0; i--) {
        const firstRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "white"
        );
        const secondRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i - 1 &&
            item.stoneData.color === "white"
        );
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );

        const myStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "black"
        );

        if ((firstRivalStone && secondRivalStone) || myStone) {
          i = -1;
        }
        multiAvailableCoordinates.moveUps.push(...availableCell);
      }
      // 7ye çek
      for (let i = stoneData.positionY + 1; i <= 7; i++) {
        const firstRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "white"
        );
        const secondRivalStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i + 1 &&
            item.stoneData.color === "white"
        );
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );

        const myStone = board.find(
          (item) =>
            item.positionX === stoneData.positionX &&
            item.positionY === i &&
            item.stoneData.color === "black"
        );

        if ((firstRivalStone && secondRivalStone) || myStone) {
          i = 8;
        }
        multiAvailableCoordinates.moveUps.push(...availableCell);
      }
      //**************************** Burada Left hesaplanacak ****************************************** */
      // sıfıra çek
      for (let i = stoneData.positionX - 1; i >= 0; i--) {
        const firstRivalStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "white"
        );
        const secondRivalStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i - 1 &&
            item.stoneData.color === "white"
        );
        const availableCellLeft = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );

        const myStoneLeft = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "black"
        );

        if ((firstRivalStoneLeft && secondRivalStoneLeft) || myStoneLeft) {
          i = -1;
        }
        multiAvailableCoordinates.moveUps.push(...availableCellLeft);
      }
      //**************************** Burada Right hesaplanacak ****************************************** */
      // 7ye çek
      for (let i = stoneData.positionX + 1; i <= 7; i++) {
        const firstRivalStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "white"
        );
        const secondRivalStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i + 1 &&
            item.stoneData.color === "white"
        );
        const availableCellRight = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );

        const myStoneRight = board.find(
          (item) =>
            item.positionY === stoneData.positionY &&
            item.positionX === i &&
            item.stoneData.color === "black"
        );

        if ((firstRivalStoneRight && secondRivalStoneRight) || myStoneRight) {
          i = 8;
        }
        multiAvailableCoordinates.moveUps.push(...availableCellRight);
      }
      console.log(multiAvailableCoordinates);
      return multiAvailableCoordinates;
    } else {
      let moveUp = {
        suitable: true,
        pX: stoneData.positionX,
        pY: stoneData.positionY - 1,
      };
      let moveLeft = {
        suitable: true,
        pX: stoneData.positionX - 1,
        pY: stoneData.positionY,
      }; //stoneData.positionX - 1;
      let moveRight = {
        suitable: true,
        pX: stoneData.positionX + 1,
        pY: stoneData.positionY,
      }; //stoneData.positionX + 1;

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

      if (!suitableUp) {
        // rakip taş üstünden ileri atla
        moveUp = {
          suitable: false,
          pX: stoneData.positionX,
          pY: stoneData.positionY - 2,
        };

        //rakit taşı bul
        const findRivalStoneUp = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX &&
            stone.positionY === stoneData.positionY - 1
        );
        const findDoubleRivalUp = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX &&
            stone.positionY === stoneData.positionY - 2 &&
            stone.isEmpty
        );

        findRivalStoneUp &&
        findRivalStoneUp.stoneData.color === "white" &&
        findDoubleRivalUp
          ? (rivalStones.rivalStoneUp = findRivalStoneUp?.stoneData)
          : (rivalStones.rivalStoneUp = false);

        findRivalStoneUp?.stoneData?.color === "white" && findDoubleRivalUp
          ? (moveUp.suitable = true)
          : (moveUp.suitable = false);
      }
      if (!suitableLeft) {
        // rakip taş üstünden sola atla
        moveLeft = {
          suitable: false,
          pX: stoneData.positionX - 2,
          pY: stoneData.positionY,
        };

        const ismoveUpRivalStone = board.some(
          (stone) =>
            stone.positionX === moveLeft.pX &&
            stone.positionY === moveLeft.pY - 1 &&
            stone.stoneData.color === "white"
        );
        ismoveUpRivalStone
          ? (moveLeft.suitable = true)
          : (moveLeft.suitable = false);
        //rakit taşı bul
        const findRivalStoneLeft = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX - 1 &&
            stone.positionY === stoneData.positionY
        );
        const findDoubleRivalLeft = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX - 2 &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        findRivalStoneLeft &&
        findRivalStoneLeft.stoneData.color === "white" &&
        findDoubleRivalLeft
          ? (rivalStones.rivalStoneLeft = findRivalStoneLeft.stoneData)
          : (rivalStones.rivalStoneLeft = false);

        findRivalStoneLeft?.stoneData?.color === "white" && findDoubleRivalLeft
          ? (moveLeft.suitable = true)
          : (moveLeft.suitable = false);
      }
      if (!suitablaRight) {
        // rakip taş üstünden sağa alta
        moveRight = {
          suitable: false,
          pX: stoneData.positionX + 2,
          pY: stoneData.positionY,
        };
        //rakit taşı bul
        const findRivalStoneRight = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX + 1 &&
            stone.positionY === stoneData.positionY
        );
        const findDoubleRivalRight = board.find(
          (stone) =>
            stone.positionX === stoneData.positionX + 2 &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );

        findRivalStoneRight &&
        findRivalStoneRight.stoneData.color === "white" &&
        findDoubleRivalRight
          ? (rivalStones.rivalStoneRight = findRivalStoneRight.stoneData)
          : (rivalStones.rivalStoneRight = false);

        findRivalStoneRight?.stoneData?.color === "white" &&
        findDoubleRivalRight
          ? (moveRight.suitable = true)
          : (moveRight.suitable = false);
      }

      return [moveUp, moveLeft, moveRight, rivalStones];
    }
  }
};

const setMoveStone = (
  cellData,
  board,
  selectedStone,
  rivalStones = false,
  moveUp,
  moveLeft,
  moveRight,
  multiRivalStones = false,
  multiCoordinates = false
) => {
  const newBoard = JSON.parse(JSON.stringify([...board]));
  const newStone = { ...selectedStone };
  newStone.positionX = cellData.positionX;
  newStone.positionY = cellData.positionY;

  // burada rivalStonesUp varsa if e sok ve findCurrentStone u bul
  const pasiveRivalStone = { status: false };

  if (multiRivalStones) {
    //burada dama taş alır
    const { moveUps, moveLefts, moveRights } = multiCoordinates;
    const { moveUpRivalStones, moveLeftRivalStones, moveRightRivalStones } =
      multiRivalStones;

    const isMoveUp = moveUps.find(
      (item) =>
        item.positionX === cellData.positionX &&
        item.positionY === cellData.positionY
    );
    const isMoveLeft = moveLefts.find(
      (item) =>
        item.positionX === cellData.positionX &&
        item.positionY === cellData.positionY
    );
    const isMoveRight = moveRights.find(
      (item) =>
        item.positionX === cellData.positionX &&
        item.positionY === cellData.positionY
    );

    if (isMoveUp) {
      if (moveUpRivalStones?.length > 0) {
        const firstRivalStone = moveUpRivalStones[0];

        if (
          firstRivalStone.positionX === newStone.positionX &&
          firstRivalStone.positionY - 1 === newStone.positionY
        ) {
          const findClickedCell = newBoard.find(
            (item) =>
              item.positionX === cellData.positionX &&
              item.positionY === cellData.positionY
          );
          const findCurrentStone = newBoard.find(
            (item) =>
              item.positionX === selectedStone.positionX &&
              item.positionY === selectedStone.positionY
          );
          const findRivalStone = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          findClickedCell.isEmpty = false;
          findClickedCell.stoneData = newStone;
          //mevcutu boşalt
          findCurrentStone.isEmpty = true;
          findCurrentStone.stoneData = {};
          pasiveRivalStone.status = true;
          pasiveRivalStone.data = firstRivalStone;

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };
        } else if (
          firstRivalStone.positionX === newStone.positionX &&
          firstRivalStone.positionY + 1 === newStone.positionY
        ) {
          console.log(
            "burası yeniden yazılacak up ve down diye datayi ikiye ayıracağız...."
          );
        }
      } else {
        const findClickedCell = newBoard.find(
          (item) =>
            item.positionX === cellData.positionX &&
            item.positionY === cellData.positionY
        );
        const findCurrentStone = newBoard.find(
          (item) =>
            item.positionX === selectedStone.positionX &&
            item.positionY === selectedStone.positionY
        );

        findClickedCell.isEmpty = false;
        findClickedCell.stoneData = newStone;
        //mevcutu boşalt
        findCurrentStone.isEmpty = true;
        findCurrentStone.stoneData = {};

        return { newBoard, pasiveRivalStone };
      }
    } else if (isMoveLeft) {
      if (moveLeftRivalStones?.length > 0) {
        const firstRivalStone = moveLeftRivalStones[0];

        if (
          firstRivalStone.positionX - 1 === newStone.positionX &&
          firstRivalStone.positionY === newStone.positionY
        ) {
          const findClickedCell = newBoard.find(
            (item) =>
              item.positionX === cellData.positionX &&
              item.positionY === cellData.positionY
          );
          const findCurrentStone = newBoard.find(
            (item) =>
              item.positionX === selectedStone.positionX &&
              item.positionY === selectedStone.positionY
          );
          const findRivalStone = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          findClickedCell.isEmpty = false;
          findClickedCell.stoneData = newStone;
          //mevcutu boşalt
          findCurrentStone.isEmpty = true;
          findCurrentStone.stoneData = {};
          pasiveRivalStone.status = true;
          pasiveRivalStone.data = firstRivalStone;

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };
        }
      } else {
        const findClickedCell = newBoard.find(
          (item) =>
            item.positionX === cellData.positionX &&
            item.positionY === cellData.positionY
        );
        const findCurrentStone = newBoard.find(
          (item) =>
            item.positionX === selectedStone.positionX &&
            item.positionY === selectedStone.positionY
        );

        findClickedCell.isEmpty = false;
        findClickedCell.stoneData = newStone;
        //mevcutu boşalt
        findCurrentStone.isEmpty = true;
        findCurrentStone.stoneData = {};

        return { newBoard, pasiveRivalStone };
      }
    } else if (isMoveRight) {
      const firstRivalStone = moveRightRivalStones[0];

      if (
        firstRivalStone.positionY === newStone.positionY &&
        firstRivalStone.positionX + 1 === newStone.positionX
      ) {
        const findClickedCell = newBoard.find(
          (item) =>
            item.positionX === cellData.positionX &&
            item.positionY === cellData.positionY
        );
        const findCurrentStone = newBoard.find(
          (item) =>
            item.positionX === selectedStone.positionX &&
            item.positionY === selectedStone.positionY
        );
        const findRivalStone = newBoard.find(
          (item) =>
            item.positionX === firstRivalStone.positionX &&
            item.positionY === firstRivalStone.positionY
        );
        findClickedCell.isEmpty = false;
        findClickedCell.stoneData = newStone;
        //mevcutu boşalt
        findCurrentStone.isEmpty = true;
        findCurrentStone.stoneData = {};
        pasiveRivalStone.status = true;
        pasiveRivalStone.data = firstRivalStone;

        findRivalStone.isEmpty = true;
        findRivalStone.stoneData = {};

        return { newBoard, pasiveRivalStone };
      }
      if (moveRightRivalStones?.length > 0) {
        const firstRivalStone = moveRightRivalStones[0];
      } else {
        const findClickedCell = newBoard.find(
          (item) =>
            item.positionX === cellData.positionX &&
            item.positionY === cellData.positionY
        );
        const findCurrentStone = newBoard.find(
          (item) =>
            item.positionX === selectedStone.positionX &&
            item.positionY === selectedStone.positionY
        );

        findClickedCell.isEmpty = false;
        findClickedCell.stoneData = newStone;
        //mevcutu boşalt
        findCurrentStone.isEmpty = true;
        findCurrentStone.stoneData = {};

        return { newBoard, pasiveRivalStone };
      }
    }
  } else {
    // burada normal taşlar alınır
    // ileri
    if (
      rivalStones &&
      moveUp.pX === cellData.positionX &&
      moveUp.pY === cellData.positionY
    ) {
      const findRivalStone = newBoard.find(
        (stone) =>
          stone.positionX === rivalStones.rivalStoneUp.positionX &&
          stone.positionY === rivalStones.rivalStoneUp.positionY
      );
      if (findRivalStone) {
        findRivalStone.isEmpty = true;
        findRivalStone.stoneData.isActive = false;
        pasiveRivalStone.status = true;
        pasiveRivalStone.data = findRivalStone.stoneData;
        findRivalStone.stoneData = {};
      }
    }
    // sol
    if (
      rivalStones &&
      moveLeft.pX === cellData.positionX &&
      moveLeft.pY === cellData.positionY
    ) {
      const findRivalStoneLeft = newBoard.find(
        (stone) =>
          stone.positionX === rivalStones.rivalStoneLeft.positionX &&
          stone.positionY === rivalStones.rivalStoneLeft.positionY
      );
      if (findRivalStoneLeft) {
        findRivalStoneLeft.isEmpty = true;
        findRivalStoneLeft.stoneData.isActive = false;
        pasiveRivalStone.status = true;
        pasiveRivalStone.data = findRivalStoneLeft.stoneData;
        findRivalStoneLeft.stoneData = {};
      }
    }
    //sağ
    if (
      rivalStones &&
      moveRight.pX === cellData.positionX &&
      moveRight.pY === cellData.positionY
    ) {
      const findRivalStoneRight = newBoard.find(
        (stone) =>
          stone.positionX === rivalStones.rivalStoneRight.positionX &&
          stone.positionY === rivalStones.rivalStoneRight.positionY
      );

      if (findRivalStoneRight) {
        findRivalStoneRight.isEmpty = true;
        findRivalStoneRight.stoneData.isActive = false;
        pasiveRivalStone.status = true;
        pasiveRivalStone.data = findRivalStoneRight.stoneData;
        findRivalStoneRight.stoneData = {};
      }
    }
    const findCurrentStone = newBoard.find(
      (stone) =>
        selectedStone.positionX === stone.positionX &&
        selectedStone.positionY === stone.positionY
    );
    findCurrentStone.isEmpty = true;
    findCurrentStone.stoneData = {};

    //console.log("newStone", newStone);

    const findCell = newBoard.find(
      (stone) =>
        stone.positionX === cellData.positionX &&
        stone.positionY === cellData.positionY
    );
    //burada cheekers mı kontrol et
    if (newStone.color === "white" && newStone.positionY === 7) {
      newStone.isChekers = true;
    }
    if (newStone.color === "black" && newStone.positionY === 0) {
      newStone.isChekers = true;
    }
    findCell.isEmpty = false;
    findCell.stoneData = newStone;
  }

  return { newBoard, pasiveRivalStone };
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
        //  multiAvailableCoordinates, multiAvailableRivalStones

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

        //console.log("================>>>>>>>>>>>>>>>>>>>>>>>>", positions);

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
        //console.log("pasiveRivalStone-->", pasiveRivalStone);
        if (pasiveRivalStone?.status) {
          const userColor = pasiveRivalStone.data.color;
          if (userColor === "white") {
            state.user1.totalStones = state.user1.totalStones - 1;
          } else {
            state.user2.totalStones = state.user2.totalStones - 1;
          }
        }

        state.board = newBoard;
        state.selectedStone = "";
        state.moveUp = "";
        state.moveLeft = "";
        state.moveRight = "";
        state.rivalStones = "";
        state.multiCoordinates = "";
        state.multiRivalStones = "";

        if (!pasiveRivalStone?.status && state.player === "white") {
          state.player = "black";
        } else if (!pasiveRivalStone?.status && state.player === "black") {
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
