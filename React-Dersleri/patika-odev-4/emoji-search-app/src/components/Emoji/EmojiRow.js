import React, { useState } from "react";

const EmojiRow = ({ emoji, idx }) => {
  const [symbol, setSymbol] = useState("");
  const handleClick = (symbol) => {
    setSymbol(symbol);
    navigator.clipboard.writeText(symbol);

    //get_clip().then((str) => console.log(str));
  };

  // async function get_clip() {
  //   try {
  //     return await navigator.clipboard.readText();
  //   } catch (err) {
  //     console.error("Failed to read clipboard contents: ", err);
  //   }
  // }

  //get_clip().then((str) => console.log(str));

  return (
    <li
      data-testid="row"
      key={idx}
      data-clipboard-text={emoji.symbol}
      //data-testid="row"
    >
      <div className="text" key={idx}>
        <span className="symbol">{emoji?.symbol}</span>
        <span className="title">{emoji?.title}</span>
      </div>
      <span
        className="copy"
        data-testid={`copy-${idx}`}
        onClick={() => handleClick(emoji.symbol)}
      >
        Copy to clipboard
      </span>
    </li>
  );
};

export default EmojiRow;
