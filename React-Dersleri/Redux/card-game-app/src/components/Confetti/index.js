import React from "react";
import ReactConfetti from "react-confetti";
import { useSelector } from "react-redux";

function Confetti() {
  const { total } = useSelector((state) => state.cards);
  return (
    <>
      {total.opened === 24 && (
        <ReactConfetti style={{ width: "100%", height: "100vh" }} />
      )}
    </>
  );
}

export default Confetti;
