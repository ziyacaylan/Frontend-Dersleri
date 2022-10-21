import React, { useState } from "react";
import { useEmoji } from "../../context/EmojiContext";
import EmojiRow from "./EmojiRow";

const EmojiList = () => {
  const { emojies, _text } = useEmoji();

  const filteredData = emojies.filter((item) =>
    item.title.toLowerCase().includes(_text.toLowerCase())
  );
  const [symbol, setSymbol] = useState("");

  const handleClick = (symbol) => {
    setSymbol(symbol);
    navigator.clipboard.writeText(symbol);
  };
  console.log(emojies.length);
  return (
    <div className="container">
      <ul className="emoji-list">
        {filteredData.map((emoji, idx) => (
          <EmojiRow key={idx} emoji={emoji} onClick={handleClick} />
        ))}
      </ul>
    </div>
  );
};

export default EmojiList;
