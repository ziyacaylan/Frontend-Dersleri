import "./App.css";
import Todos from "./components/TodoApp";
function App() {
  return (
    <div className="App">
      <Todos />
      <footer className="info">
        <p>Click to edit a todo</p>
        <p>
          Created by <a href="https://github.com/ziyacaylan">Ziya ÇAYLAN</a>
        </p>
        <p>
          Part of <a href="#">TodoMVC</a>
        </p>
      </footer>
    </div>
  );
}

export default App;
