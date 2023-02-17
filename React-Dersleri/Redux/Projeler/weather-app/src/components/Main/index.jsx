import React from "react";
import DailyCard from "../DailyCard";
import { useSelector } from "react-redux";

import { WiHumidity, WiSunrise, WiSunset, WiCloudy } from "react-icons/wi";
import { FaStopwatch } from "react-icons/fa";
import { TbTemperatureMinus, TbTemperaturePlus } from "react-icons/tb";
import { MdOutlineVisibility } from "react-icons/md";

function Main() {
  const { currentData, dailyData } = useSelector((state) => state.weather);

  //Moment
  const moment = require("moment-timezone");
  require("moment/locale/tr");

  if (Object.keys(dailyData).length === 0) return;
  // console.log(currentData);
  //console.log(dailyData);
  return (
    <div className="w-full col-span-3 md:row-span-1 bg-gray-100 dark:bg-darkMain">
      {/* Timeline Week */}
      <div className="w-full flex flex-col items-center justify-center">
        <h2 className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 tracking-widest font-bold my-4">
          Günlük Tahminler
        </h2>
        <div className="flex flex-wrap items-center justify-center">
          {React.Children.toArray(
            dailyData.map((item) => <DailyCard weather={item} />)
          )}
        </div>
        {/* Today's Highlights */}
        <h2 className="text-transparent text-4xl bg-clip-text bg-gradient-to-r from-green-300 to-blue-500 tracking-widest font-bold my-4">
          Bu Günün Detayları
        </h2>
        <div className="w-full flex flex-col items-center justify-center">
          {/* üst satır */}
          <div className="w-full flex flex-wrap items-center justify-center">
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl px-2 m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl my-3">Nem</span>
                <WiHumidity className="text-5xl text-blue-500" />
                <div className="flex items-start justify-center">
                  <span className="my-3 text-5xl">{`${currentData.main.humidity}`}</span>{" "}
                  <span className="my-3 text-xl"> %</span>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl px-2 m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <span className="text-2xl my-3">Basınç</span>
              <FaStopwatch className="text-5xl text-blue-500" />
              <div className="flex items-start justify-center">
                <span className="my-3 text-5xl font-bold">{`${currentData.main.pressure}`}</span>
                <span className="my-3 text-xl">hPa</span>
              </div>
            </div>
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl  m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <div className="w-full h-full flex flex-row">
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                  <TbTemperatureMinus className="text-5xl text-blue-500" />
                  <div className="flex items-center justify-center">
                    <span className="font-bold py-2 text-4xl">{`- ${Math.round(
                      currentData.main.temp_min
                    )}`}</span>
                    <span className="text-4xl">°</span>
                  </div>
                </div>
                <div className="w-1/2 h-full bg-blue-500 rounded-r-xl flex flex-col items-center justify-center">
                  <TbTemperaturePlus className="text-5xl text-red-600" />
                  <div className="flex items-center justify-center text-white">
                    <span className="font-bold py-2 text-4xl">{`- ${Math.round(
                      currentData.main.temp_max
                    )}`}</span>
                    <span className="text-4xl">°</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* alt satır */}
          <div className="w-full flex flex-wrap items-center justify-center">
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl px-2 m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <div className="flex flex-col items-center justify-center">
                <span className="text-2xl my-3">Bulutluluk</span>
                <WiCloudy className="text-5xl text-blue-500" />
                <div className="flex items-start justify-center">
                  <span className="my-3 font-bold text-5xl">
                    {currentData.clouds.all}
                  </span>
                  <span className="my-3 text-2xl">%</span>
                </div>
              </div>
            </div>
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl px-2 m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <span className="text-2xl my-3">Görünürlük</span>
              <MdOutlineVisibility className="text-5xl text-blue-500" />
              <div className="flex items-start justify-center">
                <span className="my-3 font-bold text-5xl">
                  {currentData.visibility}
                </span>
                <span className="my-3 text-2xl">km</span>
              </div>
            </div>
            <div className="min-w-[250px] h-[176px] shadow-xl rounded-xl  m-4 flex flex-col items-center justify-center bg-white dark:bg-darkAside dark:text-white">
              <div className="w-full h-full flex flex-row">
                <div className="w-1/2 h-full flex flex-col items-center justify-center">
                  <WiSunrise className="text-5xl text-blue-500" />
                  <span className="font-bold text-slate-600 py-2 text-4xl">
                    {moment.unix(currentData.sys.sunrise).utc().format("LT")}
                  </span>
                </div>
                <div className="w-1/2 h-full bg-blue-500 rounded-r-xl flex flex-col items-center justify-center">
                  <WiSunset className="text-5xl text-red-600" />
                  <span className="font-bold py-2 text-4xl text-white">
                    {moment.unix(currentData.sys.sunset).utc().format("LT")}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
