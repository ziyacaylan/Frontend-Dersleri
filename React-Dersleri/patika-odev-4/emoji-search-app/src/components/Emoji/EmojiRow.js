import React, { useState } from "react";

const EmojiRow = ({ emoji, idx }) => {
  const [symbol, setSymbol] = useState("");
  const handleClick = (symbol) => {
    setSymbol(symbol);
    navigator.clipboard.writeText(symbol);
  };
  return (
    <li data-testid="row" key={idx}>
      <div
        className="text"
        key={idx}
        data-clipboard-text={emoji.symbol}
        data-testid="row"
      >
        <span className="symbol">{emoji?.symbol}</span>
        <span className="title">{emoji?.title}</span>

        <span className="copy" onClick={() => handleClick(emoji.symbol)}>
          Copy to clipboard
        </span>
      </div>
    </li>
  );
};

export default EmojiRow;
