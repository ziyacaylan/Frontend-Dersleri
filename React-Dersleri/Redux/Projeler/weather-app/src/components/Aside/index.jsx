import React, { useMemo } from "react";

import { useSelector } from "react-redux";
import { RiWindyFill } from "react-icons/ri";
import { RiTempHotLine } from "react-icons/ri";

function Aside() {
  const { currentData, cityName } = useSelector((state) => state.weather);

  //console.log(new Date(currentData.dt).toISOString());
  const image = useMemo(() => {
    const data = require(`../../assets/views/${Math.floor(
      Math.random() * 20 + 1
    )}.jpeg`);
    return data;
  }, [cityName]);

  //Moment
  const moment = require("moment-timezone");
  require("moment/locale/tr");

  //console.log(currentData);
  return (
    <div className="w-full h-full col-span-1 md:row-span-1 bg-white dark:bg-darkAside px-4">
      <div className="w-full flex flex-col items-center justify-center mt-4 mx-2">
        <p className="text-black dark:text-white font-bold text-5xl tracking-widest font-gemunu">
          {currentData.name}
        </p>

        <p className="text-black dark:text-white text-xl font-gemunu mt-8 tracking-widest ">
          {`\"${currentData.weather[0].description}\"`}
        </p>

        <img
          src={require(`../../assets/icons/${currentData.weather[0].icon}.png`)}
          alt={`${currentData.weather[0].icon}`}
          className="drop-shadow-lg w-44 mt-2"
        />
        {/* Date Info */}
        <div className="w-full mt-5">
          <span className="text-black dark:text-white font-bold text-3xl tracking-widest font-gemunu mr-4">
            {moment.unix(currentData.dt).format("dddd")}
          </span>
          <span className="text-slate-600 dark:text-slate-300 font-bold text-2xl tracking-widest font-gemunu">
            {moment.unix(currentData.dt).utc().format("LT")}
          </span>
        </div>
        {/* <p>{}</p> */}
        {/*Current Weather  Details */}
        <div className="w-full h-auto my-12">
          <div className="flex items-center justify-start font-bold text-xl text-black dark:text-white">
            <RiTempHotLine className="text-blue-500 text-2xl" />
            <p className="ml-4">{`Hissedilen      :${currentData.main.feels_like}°`}</p>
          </div>
          <div className="flex items-center justify-start font-bold text-xl text-black dark:text-white my-4">
            <RiWindyFill className="text-blue-500 text-2xl" />
            <p className="ml-4">{`Rüzgar Hızı ${currentData.wind.speed}`}</p>
          </div>
        </div>
        <div className=" w-full  h-auto relative drop-shadow-lg mr-3 ">
          <span className="absolute flex items-center justify-center  text-white font-semibold z-40 text-2xl bg-black bg-opacity-40 w-full h-full rounded-2xl">
            {currentData.name}
          </span>
          <div className="w-[70px] h-[70px] absolute text-4xl text-white bg-gradient-to-r from-green-300 to-blue-500 -top-8 left-1/2 transform -translate-x-1/2 shadow-xl font-bold p-1  rounded-full z-50 flex items-center justify-center">
            <span className="">{`${Math.round(currentData.main.temp)}°`}</span>
          </div>
          <img
            src={image}
            alt="random_photo"
            className=" w-full h-[175px]  object-cover rounded-2xl opacity-90"
          />
        </div>
      </div>
    </div>
  );
}

export default Aside;
