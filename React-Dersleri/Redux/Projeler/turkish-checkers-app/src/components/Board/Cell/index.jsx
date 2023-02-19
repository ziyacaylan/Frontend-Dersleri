import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import Stone from "../../Stone";

function Cell({ cellData }) {
  const { moveUp } = useSelector((state) => state.game);
  console.log(moveUp);
  // useEffect(() => {
  //   if (!cellData.isEmpty) {
  //     console.log(cellData);
  //   }
  // }, [cellData]);
  console.log(cellData);
  return (
    <div
      className={`w-[85px] h-[85px] ${
        cellData.color === "black" ? "bg-slate-500" : "bg-stone-300"
      } flex items-center justify-center border-[1px] border-slate-900 ${
        cellData.positionX === moveUp.pX && cellData.positionY === moveUp.pY
          ? "bg-green-600"
          : "bg-slate-500"
      }`}
    >
      <span>{cellData.positionX}</span>
      <span>-</span>
      <span>{cellData.positionY}</span>
      {!cellData.isEmpty && <Stone stoneData={cellData.stoneData} />}
    </div>
  );
}

export default Cell;
