import React from "react";

import { BiRefresh } from "react-icons/bi";
import CircleTimer from "./CircleTimer";

import { useSelector, useDispatch } from "react-redux";

import {
  startGame,
  setInputWord,
  setKeyPress,
  resetGame,
} from "../../redux/WordSlice";

function InputSection() {
  const { start, inputText, modalOpen } = useSelector(
    (state) => state.typingSpeed
  );

  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(setInputWord(e.target.value));

    if (!start) {
      dispatch(startGame());
    }
  };
  const handleKeyPress = (e) => {
    if (e.keyCode === 32 && inputText) {
      dispatch(setKeyPress());
    }
  };

  const handleClick = () => {
    dispatch(resetGame());
  };
  return (
    <div className="w-10/12 h-auto bg-stone-200 mt-4 flex items-center justify-center rounded-md">
      {/* Timer Clock */}
      <div>
        <CircleTimer />
      </div>
      {/* Input */}
      <div className="w-full mx-2">
        <input
          type="text"
          placeholder="typing..."
          className="p-2 m-2 w-full rounded-md focus:outline-sky-500 text-slate-800"
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
          disabled={modalOpen}
        />
      </div>
      {/* start- reset */}
      <div
        className="mx-2 w-[60px] h-[48px] bg-blue-500 hover:bg-blue-700 text-white text-2xl font-bold duration-500 flex items-center justify-center rounded-md"
        onClick={handleClick}
      >
        <BiRefresh />
      </div>
    </div>
  );
}

export default InputSection;
