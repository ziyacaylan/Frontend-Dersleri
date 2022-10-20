import { useState } from "react";

const defaultItems = [
  { name: "Item A" },
  { name: "Item b" },
  { name: "Item C" },
];
function Todo() {
  const [text, setText] = useState("");
  const [items, setItems] = useState(defaultItems);

  const addItem = () => {
    setItems((prev) => [...prev, { name: text }]);
    setText("");
  };
  return (
    <div>
      <label>
        Text{" "}
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <button onClick={addItem}>Add</button>

      <br />
      <br />
      {items.map((item, idx) => (
        <div key={idx}>{item.name}</div>
      ))}
    </div>
  );
}

export default Todo;
