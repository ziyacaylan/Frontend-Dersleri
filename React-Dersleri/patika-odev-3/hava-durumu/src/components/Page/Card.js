import React, { useEffect, useState } from "react";
import { useWeather } from "../../context/WeatherContext";
import { useDay } from "../../context/DayContext";
import DayCard from "./DayCard";

import cloudsImg from "../../assets/icons/d-few-clouds.png";
import dayClearSky from "../../assets/icons/d-clear-sky.png";
import sunset from "../../assets/icons/sunset.png";
import sunrise from "../../assets/icons/sunrise.png";
import tempUp from "../../assets/icons/temp-up.png";
import tempDown from "../../assets/icons/temp-down.png";
import humidity from "../../assets/icons/humidity.png";
import windFlag from "../../assets/icons/wind-flag.png";
import windDirection from "../../assets/icons/wind-direction.png";

const days = [
  "Pazar",
  "Pazartesi",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

function Card() {
  const {
    loading,
    setLoading,
    isForecastLoading,
    setIsForecastLoading,
    error,
    setError,
    city,
    setCity,
    weeklyForcast,
    setWeeklyForcast,
    language,
    setLanguage,
    tempType,
    setTempType,
  } = useWeather();

  const { day, setDay } = useDay();

  const getDay = () => {
    const dayInAWeek = new Date().getDay();
    const forecastDays = days
      .slice(dayInAWeek, days.length)
      .concat(days.slice(0, dayInAWeek));

    console.log(forecastDays[0]);
  };
  getDay();

  return (
    <div className="card-weather mt-4">
      <div className="glass-panel ">
        <h1 className="text-center city-title">Şehir Adı</h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="weather d-flex">
            <div className="weather-general pe-3">
              <div className="weather-icon text-center">
                <img src={cloudsImg} alt="" className="weth-icon" />
              </div>
              <div className="weth-description text-center">
                <p className="weth-desc-paragraph">Weather Description</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <p>14.5 °C</p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <div>
                  <p>Hissesilen Sıcaklık</p>
                </div>
                <div className="ps-1">
                  <p>: 15 °C</p>
                </div>
              </div>
              <div className="day-item d-flex justify-content-center align-items-center">
                <div>
                  <p>Perşembe</p>
                </div>
                <div className="clock-item ps-2">
                  <p>23:20</p>
                </div>
              </div>
            </div>
            <div className="weather-details d-flex justify-content-end align-items-end">
              <div className="card-up"></div>
              <div className="card-down">
                <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center geo-list">
                  <li className="sun-rise-set px-3 border-right border-left">
                    <div>
                      <p className="text-block">Doğumu & Batımı</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={sunrise} alt="" className="icon-weather-48" />
                        <p className="text-block">Gün Doğumu</p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={sunset} alt="" className="icon-weather-48" />
                        <p className="text-block">Gün Batımı</p>
                      </div>
                    </div>
                  </li>
                  <li className="max-min-temp px-3 border-right">
                    <p className="text-block text-center">Sıcaklıklar</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={tempUp} alt="" className="icon-weather-48" />
                      <p className="text-block">
                        Max <span>13 °C</span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={tempDown} alt="" className="icon-weather-48" />
                      <p className="text-block">
                        Min<span>13 °C</span>
                      </p>
                    </div>
                  </li>
                  <li className="humidity px-3 border-right">
                    <p className="text-block text-center">Nem oranı</p>
                    <div className="d-flex justify-content-between align-items-center">
                      <span>70%</span>
                      <img src={humidity} alt="" className="icon-weather-48" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <p className="text-block">Yükseklik</p>
                      <img
                        src={dayClearSky}
                        alt=""
                        className="icon-weather-48"
                      />
                    </div>
                  </li>
                  <li className="wind px-3">
                    <div>
                      <p className="text-block">Rüzgar Durumu</p>
                      <div className="d-flex justify-content-between align-items-center">
                        <span>9,6</span>
                        <img
                          src={windFlag}
                          alt=""
                          className="icon-weather-48"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <img
                          src={windDirection}
                          alt=""
                          className="icon-weather-48"
                        />
                        <span>Yönü</span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <div className="weather-days">
          <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center">
            <li className="px-3">
              <DayCard />
            </li>
            <li className="px-3">
              <DayCard />
            </li>
            <li className="px-3">
              <DayCard />
            </li>
            <li className="px-3">
              <DayCard />
            </li>
            <li className="px-3">
              <DayCard />
            </li>
            <li className="px-3">
              <DayCard />
            </li>
          </ul>
        </div>
        <hr />
        {/* TAble start */}
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Date (.dt)</th>
                <th scope="col">Date (tt_txt)</th>
                <th scope="col">Tems</th>
                <th scope="col">feels_like</th>
                <th scope="col">temp_min</th>
                <th scope="col">temp_max</th>
                <th scope="col">humidity</th>
                <th scope="col">description</th>
                <th scope="col">icon</th>
                <th scope="col">clouds (all)</th>
                <th scope="col">wind speed</th>
                <th scope="col">wind deg</th>
                <th scope="col">wind gust</th>
              </tr>
            </thead>
            <tbody>
              {/* {weeklyForcast.list.map((item, index) => {
                return (
                  <tr key={index}>
                    <th scope="row">{index}</th>
                    <td>{new Date(item.dt * 1000).toLocaleString()}</td>
                    <td>{item.dt_txt}</td>
                    <td>{item.main.temp} °C</td>
                    <td>{item.main.feels_like}</td>
                    <td>{item.main.temp_min} °C</td>
                    <td>{item.main.temp_max} °C</td>
                    <td>{item.main.humidity}</td>
                    <td>{item.weather[0].description}</td>
                    <td>{item.weather[0].icon}</td>
                    <td>{item.clouds.all}</td>
                    <td>{item.wind.speed}</td>
                    <td>{item.wind.deg}</td>
                    <td>{item.wind.gust}</td>
                  </tr>
                );
              })} */}
            </tbody>
          </table>
        </div>
        {/* Table end */}
      </div>
    </div>
  );
}

export default Card;
