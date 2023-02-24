import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

import Stone from "../../Stone";
import { moveSelectedUserStone } from "../../../redux/GameSlice";

function Cell({ cellData }) {
  const { moveUp, moveLeft, moveRight, multiCoordinates, selectedStone } =
    useSelector((state) => state.game);
  const dispatch = useDispatch();
  const [bgColor, setBgColor] = useState("");
  // const [bgMoveUp, setBgMoveUp] = useState("");
  // const [bgMoveLeft, setBgMoveLeft] = useState("");
  // const [bgMoveRight, setBgMoveRight] = useState("");

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
      const coords = [...moveUps, ...moveLefts, ...moveRights];
      const currentCell = coords.find(
        (cell) =>
          cell.positionX === cellData.positionX &&
          cell.positionY === cellData.positionY
      );

      if (
        currentCell?.positionX === cellData.positionX &&
        currentCell?.positionY === cellData.positionY
      ) {
        return setBgColor("bg-green-500");
      } else {
        return cellData.color === "black"
          ? setBgColor("bg-slate-500")
          : setBgColor("bg-stone-300");
      }
    } else {
      if (
        moveUp &&
        cellData.positionX === moveUp.pX &&
        cellData.positionY === moveUp.pY
      ) {
        setBgColor("bg-green-500");
      } else if (
        moveLeft &&
        cellData.positionX === moveLeft.pX &&
        cellData.positionY === moveLeft.pY
      ) {
        setBgColor("bg-green-500");
      } else if (
        moveRight &&
        cellData.positionX === moveRight.pX &&
        cellData.positionY === moveRight.pY
      ) {
        setBgColor("bg-green-500");
      } else {
        cellData.color === "black"
          ? setBgColor("bg-slate-500")
          : setBgColor("bg-stone-300");
      }
    }
  }, [
    moveUp,
    cellData.color,
    cellData.positionX,
    cellData.positionY,
    moveLeft,
    moveLefts,
    moveRight,
    moveRights,
    moveUps,
    multiCoordinates,
    selectedStone,
  ]);

  return (
    <div
      className={`w-[85px] h-[85px] flex items-center justify-center border-[1px] border-slate-900 ${bgColor}`}
      onClick={() => selectedStone && handleClick(cellData)}
    >
      {!cellData.isEmpty && <Stone stoneData={cellData.stoneData} />}
    </div>
  );
}

export default Cell;
