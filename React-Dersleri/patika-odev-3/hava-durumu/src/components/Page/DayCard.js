import React from "react";
import rain from "../../assets/icons/d-rain.png";
function DayCard() {
  return (
    <div className="item-day mb-2">
      <div className="mx-5 my-2">
        <div className="text-center">
          <p className="text-day">Pazartesi</p>
        </div>
        <div className="text-center">
          <p>08:32</p>
        </div>
        <div className="text-center">
          <img src={rain} alt="" className="icon-weather" />
        </div>
        <div className="day-temp text-center">
          <p>13 °C</p>
        </div>
      </div>
    </div>
  );
}

export default DayCard;
