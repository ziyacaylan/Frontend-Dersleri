import React from "react";
import Cell from "../Cell";

function Row({ rowInfo }) {
  //console.log(rowInfo);
  return (
    <div className="flex flex-col items-center justify-center ">
      {rowInfo.map((cellData, idx) => (
        <Cell key={idx} cellData={cellData} />
      ))}
    </div>
  );
}

export default Row;
