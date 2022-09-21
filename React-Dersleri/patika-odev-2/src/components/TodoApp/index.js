import { useState } from "react";
import Footer from "../Footer";
import Header from "../Header";
import TodoList from "../List";
import "../TodoApp/todos.css";

function Todos() {
  const [todos, setTodos] = useState([]);
  const [hide, setHide] = useState("All");
  const [count, setCount] = useState(0);
  return (
    <div className="container">
      <Header
        todos={todos}
        setTodos={setTodos}
        setHide={setHide}
        count={count}
        setCount={setCount}
      />{" "}
      <TodoList todos={todos} setTodos={setTodos} hide={hide} />{" "}
      <Footer
        todos={todos}
        setTodos={setTodos}
        setHide={setHide}
        count={count}
        setCount={setCount}
      />{" "}
    </div>
  );
}

export default Todos;
