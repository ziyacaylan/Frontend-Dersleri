import { createContext, useState, useContext } from "react";

const DayContext = createContext();

export const DayProvider = ({ children }) => {
  const [days, setDays] = useState([]);

  const values = {
    days,
    setDays,
  };
  return <DayContext.Provider value={values}>{children}</DayContext.Provider>;
};

export const useDay = () => useContext(DayContext);
