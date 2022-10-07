import { createContext, useState, useContext } from "react";

const DayContext = createContext();

export const DayProvider = ({ children }) => {
  const [day, setDay] = useState([]);

  const values = {
    day,
    setDay,
  };
  return <DayContext.Provider value={values}>{children}</DayContext.Provider>;
};

export const useDay = () => useContext(DayContext);
