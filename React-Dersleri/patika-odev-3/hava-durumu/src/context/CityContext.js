import { createContext, useContext, useEffect, useState } from "react";
import JSONCityData from "../Data/Cities.json";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");
  //const [citiesData, setCitiesData] = useState([]);
  // console.log("Beni çek");
  // useEffect(() => {
  //   setCitiesData(JSONCityData);
  // }, []);

  const values = {
    city,
    setCity,
    JSONCityData,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
