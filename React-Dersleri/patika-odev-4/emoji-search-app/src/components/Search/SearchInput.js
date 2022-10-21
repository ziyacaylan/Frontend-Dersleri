import React, { useEffect } from "react";
import { useEmoji } from "../../context/EmojiContext";
import cat from "../../assets/cat.png";
import cat_1 from "../../assets/cat_1.png";

const SearchInput = () => {
  const { _text, _setText } = useEmoji();
  const handleChange = (e) => {
    _setText(e.target.value);
  };
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {}, 200);
    return () => clearTimeout(delayDebounceFn);
  }, [_text]);

  return (
    <>
      <form>
        <div className="search">
          <img className="icons" src={cat} alt="" />

          <input
            placeholder="Search emoji"
            className="search-input"
            value={_text}
            type="text"
            onChange={handleChange}
          />
          <img className="icons" src={cat_1} alt="" />
        </div>
      </form>
    </>
  );
};

export default SearchInput;
