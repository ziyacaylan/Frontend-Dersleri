import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";

import { selectedUserStone, deselectedUserStone } from "../../redux/GameSlice";
import { useDispatch, useSelector } from "react-redux";

function Stone({ stoneData }) {
  const [select, setSelect] = useState(false);

  const { player, selectedStone } = useSelector((state) => state.game);

  const dispatch = useDispatch();

  const handleClick = () => {
    if (
      selectedStone &&
      selectedStone.positionX === stoneData.positionX &&
      selectedStone.positionY === stoneData.positionY
    ) {
      dispatch(deselectedUserStone(stoneData));
      setSelect(!select);
    }
    if (stoneData.color === player && !selectedStone) {
      setSelect(!select);
      dispatch(selectedUserStone(stoneData));
    }
  };

  //console.log(stoneData);
  return (
    <div
      className={`w-[70px] h-[70px] ${
        stoneData.color === "black" ? "bg-zinc-800" : "bg-zinc-400"
      } shadow-md rounded-full flex items-center justify-center`}
      onClick={handleClick}
    >
      <div
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          select &&
          "bg-red-700 shadow-xl shadow-blue-600 border-[1px] border-blue-600"
        }`}
      >
        {select && !stoneData.isChekers ? (
          <FaCheckCircle className="text-xl text-yellow-100" />
        ) : (
          stoneData.isChekers && (
            <div
              className={` rounded-full flex items-center justify-center border-[2px] border-blue-500 ${
                select ? "w-10 h-10 bg-sky-300 shadow-xl" : "w-8 h-8 bg-red-500"
              }`}
            >
              <GiQueenCrown
                className={`${
                  select ? "text-5xl" : "text-xl"
                } text-yellow-200 `}
              />
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default Stone;
