import React from "react";
import { useWeather } from "../../context/WeatherContext";

function Forecast() {
  const { weeklyForecast, forecastDays } = useWeather();

  let day = Number(
    new Date().toLocaleDateString().split(".").slice(0, 1).join()
  );
  let now_hour = Number(
    new Date().toLocaleTimeString().split(":").slice(0, 1).join()
  );

  // let Days = [];
  const weatherDays = [];
  //console.log(weeklyForecast);

  weeklyForecast?.list.map((item, index) => {
    const weather_day = Number(
      new Date(item.dt * 1000)
        .toLocaleDateString()
        .split(".")
        .slice(0, 1)
        .join()
    );
    const item_hour = Number(
      new Date(item.dt * 1000)
        .toLocaleTimeString()
        .split(":")
        .slice(0, 1)
        .join()
    );
    if (weather_day === day) {
      const weatherDay = {
        id: `${index}`,
        date: `${new Date(item.dt * 1000).toLocaleDateString()}`,
        hour: `${new Date(item.dt * 1000).toLocaleTimeString()}`,
        description: `${item.weather[0].description}`,
        icon: `${item.weather[0].icon}`,
        temp_max: `${item.main.temp_max}`,
        temp_min: `${item.main.temp_min}`,
      };

      if (now_hour < 12) {
        if (item_hour === 12) {
          weatherDays.push(weatherDay);
        }
      } else {
        // ilk datayı al muhtemel satt 15/18/21 now_hour< 13/14 => item_hour = 15
        if (now_hour > 12 && now_hour < 15) {
          // item_hour === 15 ise al
          item_hour === 15 && weatherDays.push(weatherDay);
        } else if (now_hour >= 15 && now_hour < 18) {
          // item_hour === 18
          item_hour === 18 && weatherDays.push(weatherDay);
        } else if (now_hour >= 18 && now_hour <= 23) {
          // item_hour === 21
          item_hour === 21 && weatherDays.push(weatherDay);
        }
      }
    } else {
      const weatherDay = {
        id: `${index}`,
        date: `${new Date(item.dt * 1000).toLocaleDateString()}`,
        hour: `${new Date(item.dt * 1000).toLocaleTimeString()}`,
        description: `${item.weather[0].description}`,
        icon: `${item.weather[0].icon}`,
        temp_max: `${item.main.temp_max}`,
        temp_min: `${item.main.temp_min}`,
      };

      if (now_hour < 12) {
        // havadurumunun 2/3/4/5 veya 6. günü
        // item_hour = 12 ise al
        if (item_hour === 12) {
          // son gün olabilir yada ara gün ama son gün saat 9 var
          weatherDays.push(weatherDay);
        }
      } else {
        // son gün item_hour = 12 ise datayı al
        item_hour === 12 && weatherDays.push(weatherDay);
      }
    }
  });
  //console.log(weatherDays);

  const handleClick = (event) => {
    document.querySelector(".active")?.classList?.remove("active");
    document.getElementById(`${event?.target?.id}`).classList?.add("active");
  };

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center">
      {weatherDays?.map((item, index) => {
        return (
          <li
            key={index}
            id={index}
            className={`mx-2 ${index === 0 ? "active" : ""}`}
            onClick={handleClick}
          >
            <div
              className="item-day card-size mb-2"
              onClick={handleClick}
              id={index}
            >
              <div className="mx-5 my-2" onClick={handleClick} id={index}>
                <div
                  className="text-center my-2"
                  onClick={handleClick}
                  id={index}
                >
                  <p
                    className="text-day color-orange-400 text-size-1 text-weight-1"
                    onClick={handleClick}
                    id={index}
                  >
                    {forecastDays[index]}
                  </p>
                </div>
                <div className="text-center">
                  <span className="color-orange-400">
                    {item.hour.split(":").slice(0, 2).join(" : ")}
                  </span>
                </div>

                <div className="text-center mb-2">
                  <img
                    onClick={handleClick}
                    id={index}
                    src={`icons/${item.icon}.png`}
                    alt="weather-icon"
                    className="icon-weather"
                  />
                </div>
                <div className="text-center color-cyan-500 text-size-1 text-weight-1">
                  <span onClick={handleClick} id={index}>
                    {item.description}
                  </span>
                </div>
                <div className="day-temp text-center">
                  <p className="mt-2">
                    <span className="text-size-1 text-weight-1">
                      <span
                        className="color-cyan-500"
                        onClick={handleClick}
                        id={index}
                      >
                        {`${Math.round(item.temp_min)}`} °
                      </span>
                    </span>
                    /
                    <span className="color-orange-400 text-size-1 text-weight-1">
                      <span onClick={handleClick} id={index}>
                        {` ${Math.round(item.temp_max)}`}
                      </span>
                      °
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Forecast;
