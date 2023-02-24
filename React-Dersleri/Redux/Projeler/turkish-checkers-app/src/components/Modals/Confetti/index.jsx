import React from "react";
import ReactConfetti from "react-confetti";
import { useSelector } from "react-redux";

function Confetti() {
  const { gameStatus } = useSelector((state) => state.game);
  return (
    <>
      {gameStatus === "gameover" && (
        <ReactConfetti style={{ width: "100%", height: "100vh" }} />
      )}
    </>
  );
}

export default Confetti;
