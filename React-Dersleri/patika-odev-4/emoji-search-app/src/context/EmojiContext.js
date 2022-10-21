import { useState, createContext, useContext } from "react";

import emojiList from "../data/emojiList";

const EmojiContext = createContext();

export const EmojiProvider = ({ children }) => {
  const [emojies, setEmojies] = useState(emojiList);
  const [_text, _setText] = useState("");

  const values = {
    emojies,
    setEmojies,
    _text,
    _setText,
  };
  return (
    <EmojiContext.Provider value={values}>{children}</EmojiContext.Provider>
  );
};

export const useEmoji = () => useContext(EmojiContext);
