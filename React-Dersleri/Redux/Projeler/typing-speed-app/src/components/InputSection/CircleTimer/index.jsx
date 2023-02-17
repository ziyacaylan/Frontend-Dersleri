import { CountdownCircleTimer } from "react-countdown-circle-timer";
import { useState } from "react";

import { useSelector } from "react-redux";
import ResultModal from "../ResultModal";

function CircleTimer() {
  const { time, start, selectedLanguage, timerKey } = useSelector(
    (state) => state.typingSpeed
  );

  const renderTime = ({ remainingTime }) => {
    if (remainingTime === 0) {
      return <ResultModal />;
    } else {
      return (
        <div className="flex flex-col items-center justify-center">
          <span>{remainingTime}</span>
          <span className="text-slate-400">
            {selectedLanguage === "TR" ? "saniye" : "seconds"}
          </span>
        </div>
      );
    }
  };

  //console.log("zaman burada önemli : ", time);
  return (
    <div className="m-2">
      <CountdownCircleTimer
        key={timerKey}
        isPlaying={start === true ? true : false}
        duration={time}
        colors={["#fb1302", "#05aef9", "#fe0404", "#fe0404"]}
        colorsTime={[7, 5, 2, 0]}
        size={100}
        strokeWidth={8}
        trailStrokeWidth={8}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
}

export default CircleTimer;
