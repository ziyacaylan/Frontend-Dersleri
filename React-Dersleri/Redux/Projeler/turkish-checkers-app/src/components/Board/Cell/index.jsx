import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Stone from "../../Stone";
import { moveSelectedUserStone } from "../../../redux/GameSlice";

function Cell({ cellData }) {
  const { moveUp, moveLeft, moveRight, multiRivalStones, selectedStone } =
    useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [bgMoveUp, setBgMoveUp] = useState("");
  const [bgMoveLeft, setBgMoveLeft] = useState("");
  const [bgMoveRight, setBgMoveRight] = useState("");

  const { moveUps, moveLefts, moveRights } = multiRivalStones;

  const handleClick = (cellData) => {
    // seçilen taşın pX ve pY
    if (cellData.positionX === moveUp.pX && cellData.positionY === moveUp.pY) {
      //console.log("--->ileri gidecek");
      dispatch(moveSelectedUserStone(cellData));
    } else if (
      cellData.positionX === moveLeft.pX &&
      cellData.positionY === moveLeft.pY
    ) {
      //console.log("--->sola gidecek(left)");
      dispatch(moveSelectedUserStone(cellData));
    } else if (
      cellData.positionX === moveRight.pX &&
      cellData.positionY === moveRight.pY
    ) {
      //console.log("--->sağa gidecek(right)");
      dispatch(moveSelectedUserStone(cellData));
    } else if (multiRivalStones) {
      const clickedStoneUp = moveUps.find(
        (item) =>
          item.positionX === cellData.positionX &&
          item.positionY === cellData.positionY
      );
      const clickedStoneLeft = moveLefts.find(
        (item) =>
          item.positionX === cellData.positionX &&
          item.positionY === cellData.positionY
      );
      const clickedStoneRight = moveRights.find(
        (item) =>
          item.positionX === cellData.positionX &&
          item.positionY === cellData.positionY
      );

      const availableStoneUpPlus = {
        positionX: selectedStone.positionX,
        positionY: selectedStone.positionY + 2,
      };
      const availableStoneUpMinus = {
        positionX: selectedStone.positionX - 2,
        positionY: selectedStone.positionY,
      };
      const availableStoneLeft = {
        positionX: selectedStone.positionX - 2,
        positionY: selectedStone.positionY,
      };
      const availableStoneRight = {
        positionX: selectedStone.positionX + 2,
        positionY: selectedStone.positionY + 2,
      };
      if (
        (cellData.positionX === availableStoneUpPlus.positionX &&
          cellData.positionY === availableStoneUpPlus.positionY) ||
        (cellData.positionX === availableStoneUpMinus.positionX &&
          cellData.positionY === availableStoneUpMinus.positionY) ||
        (cellData.positionX === availableStoneLeft.positionX &&
          cellData.positionY === availableStoneLeft.positionY) ||
        (cellData.positionX === availableStoneRight.positionX &&
          cellData.positionY === availableStoneRight.positionY)
      ) {
        clickedStoneUp && dispatch(moveSelectedUserStone(cellData));
        clickedStoneLeft && dispatch(moveSelectedUserStone(cellData));
        clickedStoneRight && dispatch(moveSelectedUserStone(cellData));
      } else {
        console.log("GİTMİYORUM BİYERE");
      }
    }
  };

  useEffect(() => {
    if (multiRivalStones && selectedStone.isChekers) {
      const mUp = moveUps?.find(
        (cell) =>
          cell.positionX === cellData.positionX &&
          cell.positionY === cellData.positionY
      );
      mUp &&
      mUp?.positionX === cellData.positionX &&
      mUp?.positionY === cellData.positionY
        ? setBgMoveUp("bg-green-500")
        : cellData.color === "white"
        ? setBgMoveUp("bg-stone-300")
        : setBgMoveUp("bg-slate-500");
    } else {
      cellData.color === "white"
        ? setBgMoveUp("bg-stone-300")
        : setBgMoveUp("bg-slate-500");
    }

    if (multiRivalStones && selectedStone.isChekers) {
      const mLeft = moveLefts.find(
        (cell) =>
          cell.positionX === cellData.positionX &&
          cell.positionY === cellData.positionY
      );
      mLeft &&
      mLeft.positionX === cellData.positionX &&
      mLeft.positionY === cellData.positionY
        ? setBgMoveLeft("bg-green-500")
        : cellData.color === "white"
        ? setBgMoveLeft("bg-stone-300")
        : setBgMoveLeft("bg-slate-500");
    } else {
      cellData.color === "white"
        ? setBgMoveLeft("bg-stone-300")
        : setBgMoveLeft("bg-slate-500");
    }

    if (multiRivalStones && selectedStone.isChekers) {
      const mRight = moveRights.find(
        (cell) =>
          cell.positionX === cellData.positionX &&
          cell.positionY === cellData.positionY
      );
      mRight &&
      mRight.positionX === cellData.positionX &&
      mRight.positionY === cellData.positionY
        ? setBgMoveRight("bg-green-500")
        : cellData.color === "white"
        ? setBgMoveRight("bg-stone-300")
        : setBgMoveRight("bg-slate-500");
    } else {
      cellData.color === "white"
        ? setBgMoveRight("bg-stone-300")
        : setBgMoveRight("bg-slate-500");
    }
  }, [
    bgMoveUp,
    cellData.color,
    cellData.positionX,
    cellData.positionY,
    moveLefts,
    moveRight,
    moveRights,
    moveUps,
    multiRivalStones,
    selectedStone,
  ]);
  //console.log("seçili taş :", selectedStone);
  return (
    <div
      className={`w-[85px] h-[85px] flex items-center justify-center border-[1px] border-slate-900 ${
        cellData.color === "black" ? "bg-slate-500" : "bg-stone-300"
      } ${
        cellData.positionX === moveUp.pX && cellData.positionY === moveUp.pY
          ? "bg-green-600"
          : "bg-slate-500" &&
            cellData.positionX === moveLeft.pX &&
            cellData.positionY === moveLeft.pY
          ? "bg-green-600"
          : "bg-slate-500" &&
            cellData.positionX === moveRight.pX &&
            cellData.positionY === moveRight.pY
          ? "bg-green-600"
          : "bg-slate-500" && bgMoveUp
      } ${bgMoveLeft} ${bgMoveRight}`}
      onClick={() => handleClick(cellData)}
    >
      <span>{cellData.positionX}</span>
      <span>-</span>
      <span>{cellData.positionY}</span>
      {!cellData.isEmpty && <Stone stoneData={cellData.stoneData} />}
    </div>
  );
}

export default Cell;

/*
${cellData.color === "black" ? "bg-slate-500" : "bg-stone-300"}
 cellData.positionX === moveUp.pX && cellData.positionY === moveUp.pY
          ? "bg-green-600"
          : "bg-slate-500" &&
            cellData.positionX === moveLeft.pX &&
            cellData.positionY === moveLeft.pY
          ? "bg-green-600"
          : "bg-slate-500" &&
            cellData.positionX === moveRight.pX &&
            cellData.positionY === moveRight.pY
          ? "bg-green-600"
          : "bg-slate-500"
*/
