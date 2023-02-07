import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";
import { fillCards, resetGame } from "../../redux/CardsSlice";

function Header() {
  const dispatch = useDispatch();
  const [btnStatus, setBtnStatus] = useState("start");

  const { total, score } = useSelector((state) => state.cards);

  const handleStart = () => {
    if (btnStatus === "start") {
      dispatch(resetGame());
      dispatch(fillCards());
      setBtnStatus("playing");
    } else if (btnStatus === "playing") {
      if (window.confirm("Reset The Game")) {
        dispatch(resetGame());
        setBtnStatus("start");
      }
    }
  };
  useEffect(() => {
    total.closed === 0 && setBtnStatus("start");
  }, [total]);

  return (
    <div className="w-full bg-slate-200 text-black my-5 p-2 font-gemunu">
      {/* Header Title */}
      <h2 className="text-center font-bold tracking-light text-pink-500">
        match the pokemons
      </h2>
      {/* Header content */}
      <div className="w-full flex flex-row items-center justify-center mt-2">
        <div className="w-full grid grid-cols-3 gap-4">
          {/* column-1 */}
          <div className="flex flex-col items-start justify-center w-full">
            <span className="w-full uppercase">your score : {score}</span>
            <span className="w-full uppercase">notlar :</span>
            <span className="w-full text-xs">
              * Your starting score is{" "}
              <strong className="text-fuchsia-500">200</strong>
            </span>
            <span className="w-full text-xs">
              * Each correct gives{" "}
              <strong className="text-green-500">50</strong> points,
            </span>
            <span className="w-full text-xs">
              * Each wrong takes <strong className="text-red-600">10</strong>{" "}
              points
            </span>
          </div>

          {/* column-2 */}
          <div className="flex items-center justify-center">
            <button
              type="button"
              className="text-white bg-purple-700 hover:bg-purple-800 focus:outline-none focus:ring-4 focus:ring-purple-300 font-medium rounded-full px-5 py-2.5 text-center mb-2 dark:bg-purple-600 dark:hover:bg-purple-700 dark:focus:ring-purple-900 uppercase tracking-widest text-xl"
              onClick={() => handleStart()}
            >
              {btnStatus === "start"
                ? "start game"
                : total.closed === 0
                ? "start game"
                : "reset game"}
            </button>
          </div>

          {/* column-3 */}
          <div className="w-full flex flex-col items-start justify-center">
            <span className=" uppercase tracking-widest">
              total cards : {total.all}
            </span>
            <span className=" uppercase tracking-widest">
              total opened : {total.opened}
            </span>
            <span className=" uppercase tracking-widest">
              total closed : {total.closed}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
