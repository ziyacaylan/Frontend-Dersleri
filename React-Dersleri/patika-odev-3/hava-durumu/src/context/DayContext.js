import { createContext, useContext, useState } from "react";

const DayContext = createContext();

export const DayProvider = ({ children }) => {
  const [days, setDays] = useState([]);
  const values = {
    days,
    setDays,
  };
  return <DayContext.Provider value={values}>{children}</DayContext.Provider>;
};

export const useDays = () => useContext(DayContext);
