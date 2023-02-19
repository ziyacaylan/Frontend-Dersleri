import React, { useEffect, useState } from "react";

import Row from "./Row";

import { useSelector } from "react-redux";

function Board() {
  const { board, gameStatus } = useSelector((state) => state.game);
  const [rows, setRows] = useState([]);

  useEffect(() => {
    setRows(
      Array(Math.ceil(board.length / 8))
        .fill()
        .map(function (_, i) {
          return board.slice(i * 8, i * 8 + 8);
        })
    );
  }, [board]);
  //console.log(board);
  //console.log("--->>>", rows);
  return (
    <div className="w-[800px] h-[800px] flex flex-col items-center justify-center mx-auto bg-indigo-400 rounded">
      <div className="flex items-center justify-center flex-nowrap">
        {/* Y kordinatlar */}
        <div className="flex flex-col items-center justify-center mt-10">
          <div className="text-xl w-6 h-[75px] mr-3">1</div>
          <div className="text-xl w-6 h-[75px] mr-3">2</div>
          <div className="text-xl w-6 h-[75px] mr-3">3</div>
          <div className="text-xl w-6 h-[75px] mr-3">4</div>
          <div className="text-xl w-6 h-[75px] mr-3">5</div>
          <div className="text-xl w-6 h-[75px] mr-3">6</div>
          <div className="text-xl w-6 h-[75px] mr-3">7</div>
          <div className="text-xl w-6 h-[75px] mr-3">8</div>
        </div>
        {/* Table */}

        {rows.map((rowData, index) => (
          <Row key={index} rowInfo={rowData} />
        ))}
      </div>
      <div className="ml-[105px] flex items-center justify-center flex-nowrap mt-4">
        <div className="w-[75px] text-xl mr-2">a</div>
        <div className="w-[75px] text-xl mr-2">b</div>
        <div className="w-[75px] text-xl mr-2">c</div>
        <div className="w-[75px] text-xl mr-2">d</div>
        <div className="w-[75px] text-xl mr-1">e</div>
        <div className="w-[75px] text-xl ml-2">f</div>
        <div className="w-[75px] text-xl ml-2">g</div>
        <div className="w-[75px] text-xl ml-2">h</div>
      </div>
    </div>
  );
}

export default Board;
