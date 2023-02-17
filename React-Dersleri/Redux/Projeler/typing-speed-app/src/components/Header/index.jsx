import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

import { useSelector, useDispatch } from "react-redux";
import { changeLanguage } from "../../redux/WordSlice";

function Header() {
  const { selectedLanguage } = useSelector((state) => state.typingSpeed);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  //console.log(language);
  return (
    <div className="w-full bg-sky-500 rounded-t flex flex-col sm:flex-row items-center justify-between p-4">
      {/* language select */}
      <div className="mx-2">
        <select
          name="lang"
          id="lang"
          defaultValue={selectedLanguage}
          className="focus:outline-none p-2 rounded-md px-6 bg-orange-400"
          onChange={(e) => handleChange(e)}
        >
          <option value="TR" disabled={selectedLanguage === "TR"}>
            Türkçe
          </option>
          <option value="ENG" disabled={selectedLanguage === "ENG"}>
            English
          </option>
        </select>
      </div>
      <h2 className="text-2xl text-white font-bold">
        {selectedLanguage === "TR"
          ? "Klavyede ne kadar hızlısın ?"
          : "How fast are you fast at typing ?"}
      </h2>
      <div className="flex items-center justify-center mr-4">
        <div className="mx-2 w-9 h-9 bg-blue-500 hover:bg-blue-700 text-white text-xl font-bold duration-500 flex items-center justify-center rounded-md">
          {" "}
          <a
            href="https://www.linkedin.com/in/ziya-caylan"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
        <div
          className="mx-2 w-9 h-9 bg-blue-500 hover:bg-blue-700 text-white text-xl
        font-bold duration-500 flex items-center justify-center rounded-md"
        >
          <a
            href="https://github.com/ziyacaylan"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
