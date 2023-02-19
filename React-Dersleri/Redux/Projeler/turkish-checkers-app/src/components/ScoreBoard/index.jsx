import React from "react";
import Stone from "../Stone";

function ScoreBoard({ userData }) {
  //console.log(userData);
  return (
    <div
      className={`w-[150px] h-[650px] border-t-2 border-b-2 border-indigo-400 ${
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
              userData.color === "black" ? "bg-zinc-800" : "bg-zinc-300"
            } mx-2 shadow-md`}
          ></div>
        </div>
        {/* <Stone color={userData.color} /> */}
      </div>
    </div>
  );
}

export default ScoreBoard;
