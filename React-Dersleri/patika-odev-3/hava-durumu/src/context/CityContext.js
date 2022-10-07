import { useState, createContext, useContext } from "react";
import JSONCityData from "../Data/Cities.json";

const CityContext = createContext();

export const CityProvider = ({ children }) => {
  const [city, setCity] = useState("");

  const values = {
    city,
    setCity,
  };
  return <CityContext.Provider value={values}>{children}</CityContext.Provider>;
};

export const useCity = () => useContext(CityContext);
