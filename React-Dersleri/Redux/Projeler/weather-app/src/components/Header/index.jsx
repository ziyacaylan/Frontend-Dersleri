import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { changeTheme } from "../../redux/WeatherSlice";

import Search from "../Search";
import { FiSun } from "react-icons/fi";
import { BsMoonStarsFill } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "../../assets/icons/weather_logo.png";

function Header() {
  const { theme } = useSelector((state) => state.weather);

  const dispatch = useDispatch();

  useEffect(() => {
    theme === "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  }, [theme]);

  const handleThemeChange = () => {
    dispatch(changeTheme());
  };

  //console.log(theme);
  return (
    <div className="w-full h-auto sm:h-20 py-5 bg-headerBlue dark:bg-darkHeader dark:text-white flex flex-col sm:flex-row items-center justify-between">
      <div className="w-100 flex items-center justify-center">
        <img src={Logo} alt="logo" className="w-[64px] ml-5" />
      </div>
      <div className=" bg-white p-1 rounded-xl dark:bg-darkInput my-5">
        <Search />
      </div>
      <div className="flex items-center justify-center mr-4">
        <div className="mx-2 w-9 h-9 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold duration-500 flex items-center justify-center rounded-md">
          {" "}
          <a href="https://www.linkedin.com/in/ziya-caylan" target="_blank">
            <FaLinkedin />
          </a>
        </div>
        <div
          className="mx-2 w-9 h-9 bg-blue-500 hover:bg-blue-700 text-white text-xl
        font-bold duration-500 flex items-center justify-center rounded-md"
        >
          <a href="https://github.com/ziyacaylan" target="_blank">
            <FaGithub />
          </a>
        </div>
        <div
          onClick={handleThemeChange}
          className="mx-2 w-9 h-9 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold duration-500 flex items-center justify-center rounded-md"
        >
          {theme === "light" ? <BsMoonStarsFill /> : <FiSun />}
        </div>
      </div>
    </div>
  );
}

export default Header;
