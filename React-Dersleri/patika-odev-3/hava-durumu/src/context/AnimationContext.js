import { useState, createContext, useContext } from "react";

const AnimationContext = createContext();

export const AnimationProvider = ({ children }) => {
  const [anim, setAnim] = useState("settings-page-up");

  const values = {
    anim,
    setAnim,
  };
  return (
    <AnimationContext.Provider value={values}>
      {children}
    </AnimationContext.Provider>
  );
};
export const useAnimation = () => useContext(AnimationContext);
