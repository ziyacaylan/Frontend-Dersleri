import React from "react";

function Error({ message }) {
  return (
    <div>
      <h1 style={{ textAlign: "center", color: "black" }}>Error : {message}</h1>
    </div>
  );
}

export default Error;
