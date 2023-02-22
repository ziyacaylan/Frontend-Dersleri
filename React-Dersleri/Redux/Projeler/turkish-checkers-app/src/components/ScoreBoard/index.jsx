import React from "react";
import Stone from "../Stone";
import { GiQueenCrown } from "react-icons/gi";

function ScoreBoard({ userData, player, totalStones }) {
  const componentArray1 = Array.from(
    { length: 16 - totalStones },
    (_, index) => ({
      id: index,
    })
  );

  return (
    <div
      className={`w-[150px] h-[680px] border-t-2 border-b-2 border-indigo-400 ${
        userData.id === 1 ? "border-l-2 rounded-l" : "border-r-2 rounded-r"
      }`}
    >
      <div className=" w-full h-full flex flex-col items-center justify-start">
        <div className="text-xl font-bold text-violet-900">
          {userData.id === 1 ? "User 1" : "User 2"}
        </div>
        <div className="w-full border-t-2 border-indigo-400"></div>

        <span>Name</span>
        <div className="w-full flex items-center justify-between">
          <span className="text-orange-600 font-semiBold mx-2">
            {userData.name}
          </span>
          <div
            className={`w-10 h-10 rounded-full ${
              userData.color === "black" ? "bg-zinc-800" : "bg-zinc-400"
            } mx-2 shadow-md text-green-300 text-2xl flex items-center justify-center`}
          >
            {userData.color === player && <GiQueenCrown />}
          </div>
        </div>
        <div className="flex flex-wrap p-1">
          {componentArray1.map((item, idx) => (
            <Stone stoneData={userData} key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ScoreBoard;
