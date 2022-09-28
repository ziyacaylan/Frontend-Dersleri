import { useState, useMemo, useCallback } from "react";
import "./App.css";
import Header from "./components/Header";
function App() {
  const [number, setNumber] = useState(0);
  // const data = useMemo(() => {
  //   return { name: "Ziya" };
  // }, []);
  const increment = useCallback(() => {
    setNumber((prevState) => prevState + 1);
  }, []);
  return (
    <div className="App">
      <Header increment={increment} />
      <hr />
      <h1>{`Sayaç : ${number}`}</h1>
    </div>
  );
}

export default App;
