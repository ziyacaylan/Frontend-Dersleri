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
      let multiRivalStones = { moveUps: [], moveLefts: [], moveRights: [] };

      //**************************** Burada Up hesaplanacak ****************************************** */
      // Up
      // sıfıra çek
      for (let i = stoneData.positionY - 1; i >= 0; i--) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findWhiteStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY === i &&
              cell.stoneData.color === "white"
          );
          //console.log(findWhiteStone);

          const findRivalStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY - 1 === i - 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "black") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionX === stoneData.positionX &&
                cell.positionY === i - 1
            );

            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveUps.push(nextAvailable);
          }

          findWhiteStone && !findWhiteStone.isEmpty && (i = -1);
        } else {
          multiRivalStones.moveUps.push(...availableCell);
        }
      }
      // 7ye çek
      for (let i = stoneData.positionY + 1; i <= 7; i++) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findWhiteStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY === i &&
              cell.stoneData.color === "white"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY + 1 === i + 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "black") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionX === stoneData.positionX &&
                cell.positionY === i + 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveUps.push(nextAvailable);
          }

          findWhiteStone && !findWhiteStone.isEmpty && (i = 8);
        } else {
          multiRivalStones.moveUps.push(...availableCell);
        }
      }
      //**************************** Burada Left hesaplanacak ****************************************** */
      // sıfıra çek
      for (let i = stoneData.positionX - 1; i >= 0; i--) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findWhiteStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX === i &&
              cell.stoneData.color === "white"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX - 1 === i - 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "black") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionY === stoneData.positionY &&
                cell.positionX === i - 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveLefts.push(nextAvailable);
          }

          findWhiteStone && !findWhiteStone.isEmpty && (i = -1);
        } else {
          multiRivalStones.moveLefts.push(...availableCell);
        }
      }
      //**************************** Burada Right hesaplanacak ****************************************** */
      // 7ye çek
      for (let i = stoneData.positionX + 1; i <= 7; i++) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findWhiteStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX === i &&
              cell.stoneData.color === "white"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX + 1 === i + 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "black") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionY === stoneData.positionY &&
                cell.positionX === i + 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveRights.push(nextAvailable);
          }

          findWhiteStone && !findWhiteStone.isEmpty && (i = 8);
        } else {
          multiRivalStones.moveRights.push(...availableCell);
        }
      }
      //console.log(multiRivalStones);
      return multiRivalStones;
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
    let multiRivalStones = { moveUps: [], moveLefts: [], moveRights: [] };
    // black için gidilecekleri hesapla
    if (stoneData.isChekers) {
      //**************************** Burada Up hesaplanacak ****************************************** */
      // Up
      // sıfıra çek
      for (let i = stoneData.positionY - 1; i >= 0; i--) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findBlackStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY === i &&
              cell.stoneData.color === "black"
          );
          console.log(findBlackStone);

          const findRivalStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY - 1 === i - 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "white") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionX === stoneData.positionX &&
                cell.positionY === i - 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveUps.push(nextAvailable);
          }

          findBlackStone && !findBlackStone.isEmpty && (i = -1);
        } else {
          multiRivalStones.moveUps.push(...availableCell);
        }
      }
      // 7ye çek
      for (let i = stoneData.positionY + 1; i <= 7; i++) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionY === i &&
            stone.positionX === stoneData.positionX &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findBlackStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY === i &&
              cell.stoneData.color === "black"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionX === stoneData.positionX &&
              cell.positionY + 1 === i + 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "white") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionX === stoneData.positionX &&
                cell.positionY === i + 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveUps.push(nextAvailable);
          }

          findBlackStone && !findBlackStone?.isEmpty && (i = 8);
        } else {
          multiRivalStones.moveUps.push(...availableCell);
        }
      }
      //**************************** Burada Left hesaplanacak ****************************************** */
      // sıfıra çek
      for (let i = stoneData.positionX - 1; i >= 0; i--) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findBlackStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX === i &&
              cell.stoneData.color === "black"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX - 1 === i - 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "white") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionY === stoneData.positionY &&
                cell.positionX === i - 1
            );
            //bura boş ise son boş u gönder
            nextAvailable && multiRivalStones.moveLefts.push(nextAvailable);
          }

          findBlackStone && !findBlackStone.isEmpty && (i = -1);
        } else {
          multiRivalStones.moveLefts.push(...availableCell);
        }
      }
      //**************************** Burada Right hesaplanacak ****************************************** */
      // 7ye çek
      for (let i = stoneData.positionX + 1; i <= 7; i++) {
        const availableCell = board.filter(
          (stone) =>
            stone.positionX === i &&
            stone.positionY === stoneData.positionY &&
            stone.isEmpty
        );
        if (availableCell.length === 0) {
          const findWhiteStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX === i &&
              cell.stoneData.color === "black"
          );

          const findRivalStone = board.find(
            (cell) =>
              cell.positionY === stoneData.positionY &&
              cell.positionX + 1 === i + 1
          );
          //ilk taş rakibin ise bir soraki uygunmu bak
          if (findRivalStone.stoneData.color === "white") {
            const nextAvailable = board.find(
              (cell) =>
                cell.positionY === stoneData.positionY &&
                cell.positionX === i + 1
            );
            //bura boş ise son boş u gönder
            multiRivalStones.moveRights.push(nextAvailable);
          }

          !findWhiteStone.isEmpty && (i = 8);
        } else {
          multiRivalStones.moveRights.push(...availableCell);
        }
      }
      console.log(multiRivalStones);
      return multiRivalStones;
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
  multiRivalStones = false
) => {
  const newBoard = JSON.parse(JSON.stringify([...board]));
  const newStone = { ...selectedStone };
  newStone.positionX = cellData.positionX;
  newStone.positionY = cellData.positionY;

  console.log("Şimti Başlıyor Taşıma--->>", multiRivalStones);
  console.log("Şimti Başlıyor Taşıma--->>", selectedStone);
  console.log("Şimti Başlıyor Taşıma--->> rakip :", rivalStones);
  console.log("Şimti Başlıyor Taşıma--->> cellData :", cellData);

  // burada rivalStonesUp varsa if e sok ve findCurrentStone u bul
  const pasiveRivalStone = { status: false };

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
        const multiRivalStones = moveStone(
          actions.payload,
          current(state.board)
        );

        state.multiRivalStones = multiRivalStones;
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
      console.log("actions.payload", actions.payload);
      const { newBoard, pasiveRivalStone } = setMoveStone(
        actions.payload,
        current(state.board),
        current(state.selectedStone),
        state.rivalStones && current(state.rivalStones),
        state.moveUp && current(state.moveUp),
        state.moveLeft && current(state.moveLeft),
        state.moveRight && current(state.moveRight),
        state.multiRivalStones && current(state.multiRivalStones)
      );
      console.log("pasiveRivalStone---->>>>", pasiveRivalStone);
      if (pasiveRivalStone.status) {
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

      if (!pasiveRivalStone.status && state.player === "white") {
        state.player = "black";
      } else if (!pasiveRivalStone.status && state.player === "black") {
        state.player = "white";
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
