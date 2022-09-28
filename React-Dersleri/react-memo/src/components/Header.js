import React from "react";

function Header({ increment }) {
  console.log("Header Component Re-rendered");
  return (
    <div>
      <h2>Header</h2>
      <button onClick={increment}>Click</button>
    </div>
  );
}

export default React.memo(Header);
