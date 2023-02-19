import React from "react";
import MainContainer from "./components/MainContainer";
import StartGameModal from "./components/Modals/StartGameModal";
import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";
import WarningModal from "./components/Modals/WarningModal";

function App() {
  const { gameStatus, showModal } = useSelector((state) => state.game);

  //console.log(gameStatus);
  return (
    <div
      className={`w-full h-screen bg-cyan-300 relative ${
        gameStatus === "start" && "bg-opacity-25"
      }`}
    >
      <Toaster />
      {gameStatus === "start" && <StartGameModal />}
      {gameStatus === "playing" && showModal && <WarningModal />}
      <MainContainer />
    </div>
  );
}

export default App;
