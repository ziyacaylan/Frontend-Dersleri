import React from "react";
import MainContainer from "./components/MainContainer";
import StartGameModal from "./components/Modals/StartGameModal";
import { Toaster } from "react-hot-toast";

import { useSelector } from "react-redux";
import WarningModal from "./components/Modals/WarningModal";
import GameOver from "./components/Modals/GameOver";
import Confetti from "./components/Modals/Confetti";

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
      <Confetti />
      {gameStatus === "start" && <StartGameModal />}
      {gameStatus === "playing" && showModal && <WarningModal />}
      {gameStatus === "gameover" && showModal && <GameOver />}
      <MainContainer />
    </div>
  );
}

export default App;
