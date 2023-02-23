import React, { useState } from "react";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import { startGame } from "../../../redux/GameSlice";

function StartGameModal() {
  const [userName1, setUserName1] = useState("");
  const [userName2, setUserName2] = useState("");
  const dispatch = useDispatch();

  const handleClick = () => {
    console.log(userName1, userName2);

    if (!userName1 || !userName2) {
      toast.error("User Names are requared...!");
    }
    userName1 &&
      userName2 &&
      dispatch(startGame({ user1: userName1, user2: userName2 }));
  };
  return (
    <div className="absolute inset-x-0 shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-slate-100 rounded-md z-50 ">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-sm pt-2 font-semibold tracking-widest text-sky-700 border-b border-blue-900 mb-2">
          Start Game
        </h2>
        <div className="flex flex-col items-start justify-center">
          <span>User 1</span>
          <input
            type="text"
            name="user1"
            id="user1"
            placeholder="Enter User Name"
            value={userName1}
            onChange={(e) => setUserName1(e.target.value)}
            className="mb-4 rounded-md p-1 text-xl font-semibold mt-1 shadow focus:outline-none"
          />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span>User 2</span>
          <input
            type="text"
            name="user2"
            id="user2"
            placeholder="Enter User Name"
            value={userName2}
            onChange={(e) => setUserName2(e.target.value)}
            className="mb-3 rounded-md p-1 text-xl font-semibold mt-1 shadow focus:outline-none"
          />
        </div>
        <button
          className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:outline-none  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-1"
          onClick={handleClick}
        >
          Start Game
        </button>
      </div>
    </div>
  );
}

export default StartGameModal;
