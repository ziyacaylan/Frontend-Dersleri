import { nanoid } from "@reduxjs/toolkit";

export const configureBoard = () => {
  const gameBoard = [];
  for (let i = 0; i <= 7; i++) {
    for (let j = 0; j <= 7; j++) {
      gameBoard.push({
        id: nanoid(),
        positionX: i,
        positionY: j,
        color: (i + j) % 2 === 0 ? "white" : "black",
        isEmpty: true,
        isPlayable: false,
        stoneData: {},
      });
    }
  }
  return gameBoard;
};
export const setTheBackStones = () => {
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
export const setTheWhiteStones = () => {
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
export const moveStone = (stoneData, board) => {
  // console.log("===>>", stoneData);
  // rakip taşlar bunun içinde olacak
  const rivalStones = {
    rivalStoneUp: "",
    rivalStoneLeft: "",
    rivalStoneRight: "",
  };
  let multiAvailableCoordinates = {
    moveUps: [],
    moveLefts: [],
    moveRights: [],
  };
  let multiAvailableRivalStones = {
    moveUpRivalStones: [],
    moveLeftRivalStones: [],
    moveRightRivalStones: [],
  };

  if (stoneData.color === "white") {
    // white için gidilecekleri hesapla
    if (stoneData.isChekers) {
      // beyaz dama
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
          multiAvailableRivalStones.moveRightRivalStones.push(
            firstRivalStoneRight
          );
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
    // black stone
    if (stoneData.isChekers) {
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
            item.stoneData.color === "black"
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
            item.stoneData.color === "black"
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
            item.stoneData.color === "black"
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
            item.stoneData.color === "black"
        );

        if ((firstRivalStoneRight && secondRivalStoneRight) || myStoneRight) {
          i = 8;
        }
        firstRivalStoneRight &&
          !secondRivalStoneRight &&
          secondAvailableCellRight &&
          multiAvailableRivalStones.moveRightRivalStones.push(
            firstRivalStoneRight
          );
        multiAvailableCoordinates.moveRights.push(...availableCellRight);
      }
      //console.log(multiRivalStones);
      return { multiAvailableCoordinates, multiAvailableRivalStones };
    } else {
      let moveUp = {
        suitable: true,
        pX: stoneData.positionX,
        pY: stoneData.positionY - 1,
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
          pY: stoneData.positionY - 2,
        };

        //rakip taşı bul
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

      findRivalStoneRight?.stoneData?.color === "white" && findDoubleRivalRight
        ? (moveRight.suitable = true)
        : (moveRight.suitable = false);
    }
    return [moveUp, moveLeft, moveRight, rivalStones];
  }
};
export const setMoveStone = (
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
  const pasiveRivalStone = { status: false, isDone: false };

  const { moveUps, moveLefts, moveRights } = multiCoordinates;
  const { moveUpRivalStones, moveLeftRivalStones, moveRightRivalStones } =
    multiRivalStones;

  const isMoveUp = moveUps?.find(
    (item) =>
      item.positionX === cellData.positionX &&
      item.positionY === cellData.positionY
  );

  const mUps = moveUps?.filter(
    (item) => item.positionY > selectedStone.positionY
  );
  const mDowns = moveUps?.filter(
    (item) => item.positionY < selectedStone.positionY
  );
  const upRivalStones = moveUpRivalStones?.filter(
    (item) => item.positionY > selectedStone.positionY
  );
  const downRivalStones = moveUpRivalStones?.filter(
    (item) => item.positionY < selectedStone.positionY
  );
  const isMoveLeft = moveLefts?.find(
    (item) =>
      item.positionX === cellData.positionX &&
      item.positionY === cellData.positionY
  );
  const isMoveRight = moveRights?.find(
    (item) =>
      item.positionX === cellData.positionX &&
      item.positionY === cellData.positionY
  );
  const isUp = mUps?.find(
    (item) =>
      item.positionY === cellData.positionY &&
      item.positionX === cellData.positionX
  );
  const isDown = mDowns?.find(
    (item) =>
      item.positionY === cellData.positionY &&
      item.positionX === cellData.positionX
  );

  if (multiRivalStones && selectedStone.isChekers) {
    //burada dama taş alır
    //burada tıklanan yön tespit edildi
    if (isUp) {
      // burada ileri gider

      if (upRivalStones?.length > 0) {
        const firstRivalStone = upRivalStones[0];
        const secondRivalStone = upRivalStones[1];

        // ilk hücreye tıklarsa
        if (
          firstRivalStone.positionX === newStone.positionX &&
          firstRivalStone.positionY + 1 === newStone.positionY
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

          pasiveRivalStone.status = true;
          pasiveRivalStone.isDone = true;
          pasiveRivalStone.data = findRivalStone.stoneData;

          //mevcutu boşalt
          findCurrentStone.isEmpty = true;
          findCurrentStone.stoneData = {};

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };

          // ikinci yada daha fazla tıklarsa
        } else if (!secondRivalStone) {
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
          const findFirstRivalStoneCell = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          const isValidCell =
            firstRivalStone.positionY > findClickedCell.positionY;

          if (isValidCell) {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = false;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = {};

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};
          } else {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;
            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findFirstRivalStoneCell.stoneData;

            findFirstRivalStoneCell.isEmpty = true;
            findFirstRivalStoneCell.stoneData = {};
          }

          return { newBoard, pasiveRivalStone };
        } else {
          const isValidClickCell =
            firstRivalStone.positionY < newStone.positionY &&
            secondRivalStone.positionY > newStone.positionY;

          if (isValidClickCell) {
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

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findRivalStone.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findRivalStone.isEmpty = true;
            findRivalStone.stoneData = {};

            return { newBoard, pasiveRivalStone };
          }
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

        pasiveRivalStone.isDone = true;

        return { newBoard, pasiveRivalStone };
      }
    } else if (isDown) {
      // geri gider

      if (downRivalStones?.length > 0) {
        const firstRivalStone = downRivalStones[0];
        const secondRivalStone = downRivalStones[1];
        // ilk hücreye tıklarsa
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
          pasiveRivalStone.isDone = true;
          pasiveRivalStone.data = firstRivalStone.stoneData;

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };

          // ikinci yada daha fazla tıklarsa
        } else if (!secondRivalStone) {
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
          const findFirstRivalStoneCell = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          const isValidCell =
            firstRivalStone.positionY < findClickedCell.positionY;

          if (isValidCell) {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = false;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = {};

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};
          } else {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findFirstRivalStoneCell.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findFirstRivalStoneCell.isEmpty = true;
            findFirstRivalStoneCell.stoneData = {};
          }
          return { newBoard, pasiveRivalStone };
        } else {
          const isValidClickCell =
            firstRivalStone.positionY > newStone.positionY &&
            secondRivalStone.positionY < newStone.positionY;
          if (isValidClickCell) {
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

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findRivalStone.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findRivalStone.isEmpty = true;
            findRivalStone.stoneData = {};

            return { newBoard, pasiveRivalStone };
          }
          pasiveRivalStone.isDone = false;
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

        pasiveRivalStone.isDone = true;

        return { newBoard, pasiveRivalStone };
      }
    } else if (isMoveLeft) {
      if (moveLeftRivalStones?.length > 0) {
        const firstRivalStone = moveLeftRivalStones[0];
        const secondRivalStone = moveLeftRivalStones[1];
        // ilk hücreye tıklarsa
        if (
          firstRivalStone.positionY === newStone.positionY &&
          firstRivalStone.positionX - 1 === newStone.positionX
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
          pasiveRivalStone.isDone = true;
          pasiveRivalStone.data = firstRivalStone.stoneData;

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };

          // ikinci yada daha fazla tıklarsa
        } else if (!secondRivalStone) {
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
          const findFirstRivalStoneCell = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          const isValidCell =
            firstRivalStone.positionX < findClickedCell.positionX;

          if (isValidCell) {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = false;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = {};

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};
          } else {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findFirstRivalStoneCell.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findFirstRivalStoneCell.isEmpty = true;
            findFirstRivalStoneCell.stoneData = {};
          }

          return { newBoard, pasiveRivalStone };
        } else {
          const isValidClickCell =
            firstRivalStone.positionX > newStone.positionX &&
            secondRivalStone.positionX < newStone.positionX;

          if (isValidClickCell) {
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

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findRivalStone.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findRivalStone.isEmpty = true;
            findRivalStone.stoneData = {};

            return { newBoard, pasiveRivalStone };
          }
          pasiveRivalStone.isDone = false;
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

        pasiveRivalStone.isDone = true;

        return { newBoard, pasiveRivalStone };
      }
    } else if (isMoveRight) {
      //burada sağa gider

      if (moveRightRivalStones?.length > 0) {
        const firstRivalStone = moveRightRivalStones[0];
        const secondRivalStone = moveRightRivalStones[1];

        // ilk hücreye tıklarsa
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
          pasiveRivalStone.isDone = true;
          pasiveRivalStone.data = firstRivalStone.stoneData;

          findRivalStone.isEmpty = true;
          findRivalStone.stoneData = {};

          return { newBoard, pasiveRivalStone };

          // ikinci yada daha fazla tıklarsa
        } else if (!secondRivalStone) {
          console.log(pasiveRivalStone.isDone);
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
          const findFirstRivalStoneCell = newBoard.find(
            (item) =>
              item.positionX === firstRivalStone.positionX &&
              item.positionY === firstRivalStone.positionY
          );
          const isValidCell =
            firstRivalStone.positionX > findClickedCell.positionX;

          if (isValidCell) {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;
            console.log(pasiveRivalStone.isDone);

            pasiveRivalStone.status = false;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = {};

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};
          } else {
            findClickedCell.isEmpty = false;
            findClickedCell.stoneData = newStone;

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findFirstRivalStoneCell.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findFirstRivalStoneCell.isEmpty = true;
            findFirstRivalStoneCell.stoneData = {};
          }

          return { newBoard, pasiveRivalStone };
        } else {
          const isValidClickCell =
            firstRivalStone.positionX < newStone.positionX &&
            secondRivalStone.positionX > newStone.positionX;

          if (isValidClickCell) {
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

            pasiveRivalStone.status = true;
            pasiveRivalStone.isDone = true;
            pasiveRivalStone.data = findRivalStone.stoneData;

            //mevcutu boşalt
            findCurrentStone.isEmpty = true;
            findCurrentStone.stoneData = {};

            findRivalStone.isEmpty = true;
            findRivalStone.stoneData = {};
            return { newBoard, pasiveRivalStone };
          }
          pasiveRivalStone.isDone = false;
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

        pasiveRivalStone.isDone = true;

        return { newBoard, pasiveRivalStone };
      }
    }
  } else {
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
  pasiveRivalStone.isDone = true;

  return { newBoard, pasiveRivalStone };
};
