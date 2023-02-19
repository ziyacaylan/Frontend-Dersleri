import React from "react";
import { ImSad } from "react-icons/im";

import { useDispatch } from "react-redux";
import { closeModal, resetGame } from "../../../redux/GameSlice";

function WarningModal() {
  const dispatch = useDispatch();

  const handleClickYes = () => {
    dispatch(resetGame());
    dispatch(closeModal());
  };
  const handleClickNo = () => {
    dispatch(closeModal());
  };
  return (
    <div className="absolute inset-x-0 shadow-xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[250px] bg-slate-100 rounded-md z-50 ">
      <div className="flex flex-col items-center justify-start">
        {/* Header */}
        <div className="w-full py-4 bg-red-500 flex items-center justify-center text-4xl rounded-t-md text-white">
          <ImSad />
        </div>
        <span className="text-sm text-center mt-8">
          If you exit, the game will be reset. Are you sure ?
        </span>
        <div className="mt-8">
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

export default WarningModal;
