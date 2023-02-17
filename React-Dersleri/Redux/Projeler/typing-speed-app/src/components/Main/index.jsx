import React from "react";
import Header from "../Header";
import InputSection from "../InputSection";
import WordsSection from "../WordsSection";

function Main() {
  return (
    <>
      <div className="min-w-[768px] h-[450px] bg-amber-100 rounded drop-shadow-xl flex flex-col items-center justify-start">
        <Header />
        <WordsSection />
        <InputSection />
      </div>
    </>
  );
}

export default Main;
