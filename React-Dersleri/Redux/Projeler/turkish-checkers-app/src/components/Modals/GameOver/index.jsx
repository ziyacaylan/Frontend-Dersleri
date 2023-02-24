import React from "react";

import { useSelector, useDispatch } from "react-redux";
import {
  closeModal,
  openStartGameModal,
  resetGame,
} from "../../../redux/GameSlice";

function GameOver() {
  const { user1, user2 } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const handleClickYes = () => {
    dispatch(resetGame());
    dispatch(closeModal());
    dispatch(openStartGameModal());
  };

  const handleClickNo = () => {
    dispatch(closeModal());
    dispatch(resetGame());
  };
  return (
    <div className="absolute inset-x-0 shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] bg-slate-100 rounded-md z-50 bg-opacity-80">
      <div className="flex flex-col items-center justify-start">
        {/* Header */}
        <div className="w-full py-4 bg-red-500 bg-opacity-80 flex items-center justify-center text-4xl rounded-t-md text-white">
          <span>GAME OVER</span>
        </div>
        <div className="w-full h-auto flex flex-col items-center justify-center mt-3">
          <span className="text-2xl font-bold text-red-600">
            Congratulations
          </span>
          <span className="mt-4">
            <span className="text-xl text-purple-700">
              <span className="font-bold pr-4 text-2xl">{`${
                user1.totalStones > user2.totalStones ? user1.name : user2.name
              }`}</span>
              won the game
            </span>
          </span>
        </div>
        <span className="text-sm text-center mt-8">
          Do you want to play again ?
        </span>
        <div className="mt-4">
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-8 mb-2"
            onClick={handleClickYes}
          >
            Yes
          </button>
          <button
            type="button"
            className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center ml-2 mb-2"
            onClick={handleClickNo}
          >
            No
          </button>
        </div>
      </div>
    </div>
  );
}

export default GameOver;
