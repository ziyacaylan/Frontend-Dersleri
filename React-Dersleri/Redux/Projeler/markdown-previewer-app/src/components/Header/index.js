import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { showHelpText } from "../../redux/markdownSlice";

function Header() {
  const { isShowingHelp } = useSelector((state) => state.markdown);
  const dispatch = useDispatch();

  return (
    <div className="w-full h-16 flex items-center justify-center">
      <h1 className="font-spaceMono text-4xl leading-5">Markdown Previewer</h1>
      <div
        className="absolute top-6 right-5 w-[60px] h-[60px] bg-boxYellow flex items-center justify-center text-[2rem] shadow-[10px_10px_#646464] hover:shadow-[5px_5px_#646464] hover:transition-all hover:ease-out duration-200 hover:cursor-pointer"
        onClick={() => dispatch(showHelpText())}
      >
        ?
      </div>
    </div>
  );
}

export default Header;
