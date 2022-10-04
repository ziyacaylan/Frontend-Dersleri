import { createContext, useContext, useState } from "react";
import JSONUserData from "../Data/UserData.json";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(JSONUserData.find((data) => data.id === 0));

  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
