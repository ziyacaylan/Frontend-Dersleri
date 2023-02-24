import React from "react";

import Board from "../Board";
import ScoreBoard from "../ScoreBoard";

import {
  FaGithub,
  FaLinkedin,
  FaCodepen,
  FaFreeCodeCamp,
  FaRegUserCircle,
} from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import {
  openStartGameModal,
  closeGameStartModal,
  openModal,
  closeModal,
  resetGame,
} from "../../redux/GameSlice";

function MainContainer() {
  const { user1, user2, gameStatus, showModal, player } = useSelector(
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
    gameStatus === "gameover" && dispatch(resetGame());
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
        <ScoreBoard
          userData={user1}
          player={player}
          totalStones={user1.totalStones}
        />

        <div className="flex flex-col items-center justify-center">
          <Board />
          <div className="w-full flex items-center justify-center pt-4">
            <a
              href="https://github.com/ziyacaylan"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub className="w-8 h-8 text-black m-2 hover:text-sky-600 duration-500" />
            </a>
            <a
              href="https://www.linkedin.com/in/ziya-caylan/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="w-8 h-8 m-2 text-linkedin hover:text-blue-800 duration-500" />
            </a>
            <a
              href="https://codepen.io/ziya-c/pens/"
              target="_blank"
              rel="noreferrer"
            >
              <FaCodepen className="w-8 h-8  m-2 text-linkedin hover:text-blue-800 duration-500" />
            </a>
            <a
              href="https://www.freecodecamp.org/ziya_caylan"
              target="_blank"
              rel="noreferrer"
            >
              <FaFreeCodeCamp className="w-8 h-8  m-2 text-linkedin hover:text-blue-800 duration-500" />
            </a>
            <a
              href="https://ziya-caylan-portfolio.netlify.app"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegUserCircle className="w-8 h-8 text-black m-2 hover:text-sky-600 duration-500" />
            </a>
          </div>
          <div>
            <span className="text-xs text-gray-400">
              Copyright © 2023. All rights reserved. | Designed by Ziya ÇAYLAN
            </span>
          </div>
        </div>

        <ScoreBoard
          userData={user2}
          player={player}
          totalStones={user2.totalStones}
        />
      </div>
    </div>
  );
}

export default MainContainer;
