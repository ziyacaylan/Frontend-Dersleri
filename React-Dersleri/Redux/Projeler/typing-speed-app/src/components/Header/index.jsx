import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Header() {
  return (
    <div className="w-full bg-sky-500 rounded-t flex flex-col sm:flex-row items-center justify-between p-2">
      <div>Language</div>
      <div>Header</div>
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
