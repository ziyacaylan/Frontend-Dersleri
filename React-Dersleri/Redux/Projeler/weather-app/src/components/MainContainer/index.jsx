import React, { useEffect } from "react";
import Aside from "../Aside";
import Main from "../Main";
import Loading from "../Loading";
import Error from "../Error";

import { useSelector, useDispatch } from "react-redux";

import {
  fetchCity,
  fetchCurrentWeather,
  fetchWeatherData,
} from "../../redux/Services";

const coord = { lat: 41.0351, lon: 28.9833 };

function MainContainer() {
  const { fetchDataStatus, fetchCurrentDataStatus, currentData } = useSelector(
    (state) => state.weather
  );
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDataStatus === "") {
      dispatch(fetchCity("istanbul"));
      dispatch(fetchCurrentWeather("istanbul"));
      dispatch(fetchWeatherData(coord));
    }
  }, [fetchDataStatus, dispatch]);

  if (Object.keys(currentData).length === 0) return <Loading />;
  if (fetchDataStatus === "failed" || fetchCurrentDataStatus === "failed")
    return <Error />;

  return (
    <div className="w-full h-[calc(100vh-80px)] grid grid-cols-1 md:grid-cols-4">
      <Aside />
      <Main />
    </div>
  );
}

export default MainContainer;
