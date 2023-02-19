import React from "react";

import Board from "../Board";
import ScoreBoard from "../ScoreBoard";

import { useSelector, useDispatch } from "react-redux";
import {
  openStartGameModal,
  closeGameStartModal,
  openModal,
  closeModal,
} from "../../redux/GameSlice";

function MainContainer() {
  const { user1, user2, gameStatus, showModal } = useSelector(
    (state) => state.game
  );
  const dispatch = useDispatch();

  const handleClick = () => {
    gameStatus === "" && dispatch(openStartGameModal());
    gameStatus === "playing" && dispatch(openModal());
  };
  const closeGameModal = () => {
    gameStatus === "start" && dispatch(closeGameStartModal());
    showModal && dispatch(closeModal());
  };
  return (
    <div
      className={`w-full h-full flex flex-col items-center justify-start ${
        gameStatus === "start" && "opacity-60"
      }`}
      onClick={closeGameModal}
    >
      <h1 className="text-center text-4xl my-2 font-bold text-indigo-600">
        Turkish Chekers Game
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mb-3"
        onClick={handleClick}
      >
        {gameStatus ? "Reset Game" : "Start Game"}
      </button>
      <div className="flex items-center justify-start">
        <ScoreBoard userData={user1} />
        <Board />
        <ScoreBoard userData={user2} />
      </div>
    </div>
  );
}

export default MainContainer;
