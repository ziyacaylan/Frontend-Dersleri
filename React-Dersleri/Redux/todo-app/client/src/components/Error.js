import React from "react";

const Error = ({ message }) => {
  return (
    <div style={{ padding: 15, fontSize: "1,3rem", color: "red" }}>
      Error : {message}
    </div>
  );
};
export default Error;
