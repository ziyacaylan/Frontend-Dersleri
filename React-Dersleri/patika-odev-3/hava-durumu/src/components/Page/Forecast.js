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

  let Days = [];
  const weatherDays = [];

  weeklyForecast?.list.map((item, index) => {
    const weather_day = Number(
      new Date(item.dt * 1000)
        .toLocaleDateString()
        .split(".")
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
      Days.push(weatherDay);
      weeklyForecast.list.length - 1 === index && weatherDays.push([...Days]);
    } else if (weather_day !== day) {
      day += 1;
      Days.length > 0 && weatherDays.push([...Days]);
      Days.splice(0, Days.length);

      const weatherDay = {
        id: `${index}`,
        date: `${new Date(item.dt * 1000).toLocaleDateString()}`,
        hour: `${new Date(item.dt * 1000).toLocaleTimeString()}`,
        description: `${item.weather[0].description}`,
        icon: `${item.weather[0].icon}`,
        temp_max: `${item.main.temp_max}`,
        temp_min: `${item.main.temp_min}`,
      };
      Days.push(weatherDay);
    }
  });

  return (
    <ul className="list-unstyled d-flex flex-wrap justify-content-center align-items-center">
      {weatherDays.map((itemList, index) => {
        return (
          <li key={index} className="px-2">
            <div className="item-day card-size mb-2">
              <div className="mx-5 my-2">
                <div className="text-center my-3">
                  <p className="text-day color-orange-400 text-size-1 text-weight-1">
                    {forecastDays[index]}
                  </p>
                </div>

                <div className="text-center mb-3">
                  <img
                    src={
                      now_hour > 12
                        ? itemList.length >= 4
                          ? `icons/${itemList[4].icon}.png`
                          : `icons/${itemList[0].icon}.png`
                        : itemList.find((val) =>
                            val.hour === 12
                              ? `icons/${val.icon}.png}`
                              : `icons/${itemList[0].icon}.png`
                          )
                    }
                    alt=""
                    className="icon-weather"
                  />
                </div>
                <div className="text-center color-cyan-500 text-size-1 text-weight-1">
                  <span>
                    {now_hour > 12
                      ? itemList.length >= 4
                        ? `${itemList[4].description}`
                        : `${itemList[0].description}`
                      : itemList.find((val) =>
                          val.hour === 12
                            ? `${val.description}`
                            : `${itemList[0].description}`
                        )}
                  </span>
                </div>
                <div className="day-temp text-center">
                  <p className="mt-2">
                    <span className="text-size-1 text-weight-1">
                      <span className="color-cyan-500">
                        {now_hour > 12
                          ? itemList.length >= 4
                            ? `${Math.round(itemList[4].temp_min)}`
                            : `${Math.round(itemList[0].temp_min)}`
                          : itemList.find((val) =>
                              val.hour === 12
                                ? `${Math.round(val.temp_min)}`
                                : `${Math.round(itemList[0].temp_min)}`
                            )}{" "}
                        °
                      </span>{" "}
                      /{" "}
                    </span>
                    <span className="color-orange-400 text-size-1 text-weight-1">
                      <span>
                        {now_hour > 12
                          ? itemList.length >= 4
                            ? `${Math.round(itemList[4].temp_max)}`
                            : `${Math.round(itemList[0].temp_max)}`
                          : itemList.find((val) =>
                              val.hour === 12
                                ? `${Math.round(Math.round(val.temp_max))}`
                                : `${Math.round(itemList[0].temp_max)}`
                            )}
                      </span>{" "}
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
