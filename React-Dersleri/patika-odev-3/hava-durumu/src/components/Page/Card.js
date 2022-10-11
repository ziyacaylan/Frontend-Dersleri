import React from "react";
import { useWeather } from "../../context/WeatherContext";
import Forecast from "./Forecast";
import { useCity } from "../../context/CityContext";

import sunset from "../../assets/icons/sunset.png";
import sunrise from "../../assets/icons/sunrise.png";
import tempUp from "../../assets/icons/temp-up.png";
import tempDown from "../../assets/icons/temp-down.png";
import humidity from "../../assets/icons/humidity.png";
import windFlag from "../../assets/icons/wind-flag.png";
import windDirection from "../../assets/icons/wind-direction.png";
import pressure from "../../assets/icons/pressure.png";

function Card() {
  const {
    isForecastLoading,
    setIsForecastLoading,
    forecastDays,
    error,
    setError,
    weeklyForecast,
    setWeeklyForecast,
    language,
    setLanguage,
    tempType,
    setTempType,
  } = useWeather();

  const { currentWeather } = useWeather();

  //console.log(currentWeather);

  //console.log(forecastDays);

  return (
    <div className="card-weather mt-4">
      <div className="glass-panel ">
        <h1 className="text-center city-title">
          {currentWeather.name.toUpperCase()}
        </h1>
        <div className="d-flex justify-content-center align-items-center">
          <div className="weather d-flex">
            <div className="weather-general pe-3">
              <div className="weather-icon text-center">
                <img
                  src={`icons/${currentWeather.weather[0].icon}.png`}
                  alt="weather"
                  className="weth-icon"
                />
              </div>
              <div className="weth-description text-center">
                <p className="weth-desc-paragraph color-cyan-500">
                  {currentWeather.weather[0].description}
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center">
                <p>
                  <span className="corrent-temp color-orange-400">
                    {Math.floor(currentWeather.main.temp)} °C
                  </span>
                </p>
              </div>
              <div className="d-flex justify-content-center align-items-center text-size-1 text-weight-1">
                <div>
                  <p className="color-cyan-500">Hissesilen Sıcaklık</p>
                </div>
                <div className="ps-1">
                  <p className="color-orange-400">
                    :{" "}
                    <strong>
                      {Math.round(currentWeather.main.feels_like)}
                    </strong>{" "}
                    °C
                  </p>
                </div>
              </div>
              <div className="day-item d-flex justify-content-center align-items-center color-cyan-500 text-size-1 text-weight-1">
                <div>
                  <p>{forecastDays[0]}</p>
                </div>
                <div className="clock-item ps-2">
                  <p>
                    {new Date()
                      .toLocaleTimeString()
                      .split(":")
                      .slice(0, 2)
                      .join(":")}
                  </p>
                </div>
              </div>
            </div>
            <div className="weather-details d-flex justify-content-end align-items-end">
              <div className="card-up"></div>
              <div className="card-down">
                <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center geo-list">
                  <li className="sun-rise-set px-3 border-right border-left">
                    <div>
                      <p className="text-block color-cyan-500 text-size-1 text-weight-1">
                        Doğumu & Batımı
                      </p>
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={sunrise} alt="" className="icon-weather-48" />
                        <p className="text-block color-orange-400 text-size-1 text-weight-1">
                          {new Date(currentWeather.sys.sunrise * 1000)
                            .toLocaleTimeString()
                            .split(":")
                            .slice(0, 2)
                            .join(":")}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center">
                        <img src={sunset} alt="" className="icon-weather-48" />
                        <p className="text-block color-orange-400 text-size-1 text-weight-1">
                          {new Date(currentWeather.sys.sunset * 1000)
                            .toLocaleTimeString()
                            .split(":")
                            .slice(0, 2)
                            .join(":")}
                        </p>
                      </div>
                    </div>
                  </li>
                  <li className="max-min-temp px-3 border-right">
                    <p className="text-block text-center color-cyan-500 text-size-1 text-weight-1">
                      Sıcaklıklar
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={tempUp} alt="" className="icon-weather-48" />
                      <p className="text-block color-orange-400 text-size-1 text-weight-1">
                        Max:{" "}
                        <span>
                          {Math.floor(currentWeather.main.temp_max)} °C
                        </span>
                      </p>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <img src={tempDown} alt="" className="icon-weather-48" />
                      <p className="text-block color-orange-400 text-size-1 text-weight-1">
                        Min:{" "}
                        <span>
                          {Math.floor(currentWeather.main.temp_min)} °C
                        </span>
                      </p>
                    </div>
                  </li>
                  <li className="humidity px-3 border-right">
                    <p className="text-block text-center color-cyan-500 text-size-1 text-weight-1">
                      Nem & Basınç
                    </p>
                    <div className="d-flex justify-content-between align-items-center color-orange-400 text-size-1 text-weight-1">
                      <span>{`${currentWeather.main.humidity} `}%</span>
                      <img src={humidity} alt="" className="icon-weather-48" />
                    </div>
                    <div className="d-flex justify-content-between align-items-center color-orange-400 text-size-1 text-weight-1">
                      <p className="text-block">
                        {`${currentWeather.main.pressure} `}hPa
                      </p>
                      <img
                        src={pressure}
                        alt=""
                        className="icon-weather-48 mt-2"
                      />
                    </div>
                  </li>
                  <li className="wind px-3">
                    <div>
                      <p className="text-block color-cyan-500 text-size-1 text-weight-1">
                        Rüzgar Durumu
                      </p>
                      <div className="d-flex justify-content-between align-items-center color-orange-400 text-size-1 text-weight-1">
                        <span>{`${currentWeather.wind.speed} m/s`}</span>
                        <img
                          src={windFlag}
                          alt=""
                          className="icon-weather-48"
                        />
                      </div>
                      <div className="d-flex justify-content-between align-items-center color-orange-400 text-size-1 text-weight-1">
                        <img
                          src={windDirection}
                          alt=""
                          className="icon-weather-48"
                        />
                        <span>{`${currentWeather.wind.deg}°`}</span>
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
          <Forecast />
        </div>
        {/* <hr /> */}
        {/* TAble start */}
        {/* <div className="table-responsive">
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
        {/* </tbody>
          </table> */}
        {/* </div>  */}
        {/* Table end */}
      </div>
    </div>
  );
}

export default Card;
