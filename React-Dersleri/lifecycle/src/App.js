import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter.js";

function App() {
  const [isVisible, setVisible] = useState(true);
  return (
    <div className="App">
      {isVisible && <Counter />}
      <button onClick={() => setVisible(!isVisible)}>Toggle</button>
    </div>
  );
}

export default App;
