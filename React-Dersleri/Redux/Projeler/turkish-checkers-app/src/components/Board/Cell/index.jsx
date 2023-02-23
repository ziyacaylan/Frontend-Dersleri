import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Stone from "../../Stone";
import { moveSelectedUserStone } from "../../../redux/GameSlice";

function Cell({ cellData }) {
  const { moveUp, moveLeft, moveRight, multiCoordinates, selectedStone } =
    useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [bgMoveUp, setBgMoveUp] = useState("");
  const [bgMoveLeft, setBgMoveLeft] = useState("");
  const [bgMoveRight, setBgMoveRight] = useState("");

  const { moveUps, moveLefts, moveRights } = multiCoordinates;

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
    } else if (multiCoordinates) {
      // tıklanan hücre multiCoordinates içerisinde mi
      const isMoveUp = moveUps.filter(
        (item) =>
          item.positionY === cellData.positionY &&
          item.positionX === cellData.positionX
      );
      const isMoveLeft = moveLefts.filter(
        (item) =>
          item.positionY === cellData.positionY &&
          item.positionX === cellData.positionX
      );
      const isMoveRight = moveRights.filter(
        (item) =>
          item.positionY === cellData.positionY &&
          item.positionX === cellData.positionX
      );
      if (
        isMoveUp.length > 0 ||
        isMoveLeft.length > 0 ||
        isMoveRight.length > 0
      ) {
        dispatch(moveSelectedUserStone(cellData));
      }
    }
  };

  useEffect(() => {
    if (multiCoordinates && selectedStone.isChekers) {
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

    if (multiCoordinates && selectedStone.isChekers) {
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

    if (multiCoordinates && selectedStone.isChekers) {
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
    multiCoordinates,
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
      onClick={() => selectedStone && handleClick(cellData)}
    >
      {!cellData.isEmpty && <Stone stoneData={cellData.stoneData} />}
    </div>
  );
}

export default Cell;
