import { createContext, useContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    id: 0,
    username: "ziya",
    firstname: "ziya",
    lastname: "çaylan",
    email: "ziyacaylan@gmail.com",
    contact: {
      github: "https://github.com/ziyacaylan",
      linedin: "https://www.linkedin.com/in/ziya-caylan/",
      patika: "https://app.patika.dev/ziyacaylangmailcom",
      freeCodeCamp: "https://www.freecodecamp.org/ziya_caylan",
    },
  });
  const values = { user, setUser };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);
