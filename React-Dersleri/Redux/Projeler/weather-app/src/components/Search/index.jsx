import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";

import toast from "react-hot-toast";

import {
  fetchCity,
  fetchCurrentWeather,
  fetchWeatherData,
} from "../../redux/Services";

import { useSelector, useDispatch } from "react-redux";

function Search() {
  const [city, setCity] = useState("");
  const { coord } = useSelector((state) => state.weather);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    const validCity =
      /^([A-Za-zğüşöçıİĞÜŞÖÇ\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi;
    if (!city) {
      toast.error("Şehir ismi giriniz...!");
    } else if (!validCity.test(city)) {
      toast.error("Geçerli bir şehir ismi giriniz...!");
      setCity("");
    } else {
      dispatch(fetchCity(city));
      dispatch(fetchCurrentWeather(city));
      dispatch(fetchWeatherData(coord));

      setCity("");
    }

    //console.log(city);
    //console.log("coord", coord);
  };

  return (
    <div className="flex items-center px-2 drop-shadow-none dark:bg-darkInput">
      <form onSubmit={handleSubmit}>
        <input
          id="city"
          name="city"
          type="search"
          // required={true}
          placeholder="Enter City Name"
          className="outline-none px-2 font-medium dark:bg-darkInput"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 duration-500 rounded ml-3">
          <div className="flex items-center justify-between">
            <FiSearch />
            <span className="pl-2">Search</span>
          </div>
        </button>
      </form>
    </div>
  );
}

export default Search;
