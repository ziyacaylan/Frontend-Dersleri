import { useState, useEffect } from "react";
import Clouds from "../assets/clouds.jpg";
import Lightning_1 from "../assets/lightning-1.jpg";
import Lightning from "../assets/lightning.jpg";
import OpenWeather from "../assets/open-weather.jpg";
import Rain from "../assets/rain.jpg";
import WeatherNight from "../assets/weather-night.jpg";
import WeatherNight_1 from "../assets//weather-night_1.jpg";

const bgImg = [
  Clouds,
  Lightning_1,
  Lightning,
  OpenWeather,
  Rain,
  WeatherNight,
  WeatherNight_1,
];
function MainContainer() {
  const RandomImg = () => {
    const random = Math.random() * bgImg.length;
    //console.log(random);
    return bgImg[Math.floor(random)];
  };
  return (
    <div className="main-container ">
      <img src={RandomImg()} alt="" className="my-img" />
    </div>
  );
}

export default MainContainer;
