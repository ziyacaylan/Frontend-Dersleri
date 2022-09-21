import { useEffect, useState } from "react";
import "../Footer/footer.css";

function Footer({ todos, setTodos, setHide, count, setCount }) {
  const inCompleted = todos.filter((todo) => todo.checked === false);
  const [select, setSelect] = useState("selected", "", "");

  useEffect(() => {
    setCount((count = todos.length));
  });

  const deleteCompleted = (event) => {
    setTodos(todos.filter((todo) => todo.checked === false));
    setCount((count = todos.length));
  };

  const selectedButton = (event) => {
    switch (event.target.id) {
      case "All":
        setSelect(["selected", "", ""]);
        setHide("All");
        break;
      case "Active":
        setSelect(["", "selected", ""]);
        setHide("Active");
        break;
      case "Completed":
        setSelect(["", "", "selected"]);
        setHide("Completed");
        break;
      default:
    }
  };
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>
          {inCompleted.length > 1
            ? `${count} items left`
            : `${count} item left`}
        </strong>
      </span>

      <ul className="filters">
        <li>
          <a className={select[0]} id="All" onClick={selectedButton} href>
            All
          </a>
        </li>
        <li>
          <a className={select[1]} id="Active" onClick={selectedButton} href>
            Active
          </a>
        </li>
        <li>
          <a className={select[2]} id="Completed" onClick={selectedButton} href>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed" onClick={deleteCompleted}>
        Clear completed
      </button>
    </footer>
  );
}

export default Footer;
