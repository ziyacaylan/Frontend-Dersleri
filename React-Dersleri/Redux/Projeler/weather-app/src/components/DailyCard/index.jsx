import React, { useEffect, useState } from "react";

function DailyCard({ weather }) {
  const [daily, setDaily] = useState({});

  //Moment
  const moment = require("moment-timezone");
  require("moment/locale/tr");

  useEffect(() => {
    if (Object.keys(weather).length === 8) {
      const day = weather.filter(
        (item) => moment.unix(item.dt).utc().format("LT") === "12:00"
      );
      setDaily(day);
    } else {
      //yarısını al
      const day = weather.filter(
        (item, index) => index === Math.floor(Object.keys(weather).length / 2)
      );
      setDaily(day);
    }
  }, [moment, weather]);

  if (Object.keys(daily).length === 0) return;

  //console.log(daily);
  //console.log("aldım Yazayım", weather);
  return (
    <div className="min-w-[150px] shadow-xl rounded-xl px-2 m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white relative">
      <div className="w-full bg-blue-500 absolute top-0 left-0 rounded-t-xl flex items-center justify-center">
        <span className="text-dark dark:text-white text-xl tracking-widest py-1">
          {moment.unix(daily[0].dt).utc().format("dddd")}
        </span>
      </div>

      <span className="mt-10">
        {moment.unix(daily[0].dt).utc().format("ll")}
      </span>
      <img
        src={require(`../../assets/icons/${daily[0].weather[0].icon}.png`)}
        alt="icon"
        className="drop-shadow-lg object-cover w-16"
      />
      <div className="flex items-center justify-center">
        <span className="text-slate-600 dark:text-slate-300 font-bold">{`${Math.floor(
          daily[0].main.temp_min
        )}°`}</span>
        <span className="font-bold">{`- ${Math.round(
          daily[0].main.temp_max
        )}°`}</span>
      </div>
      <span>{daily[0].weather[0].description}</span>
    </div>
  );
}

export default DailyCard;
