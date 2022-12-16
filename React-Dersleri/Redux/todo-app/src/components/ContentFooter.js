import React from "react";
import { useSelector } from "react-redux";

function ContentFooter() {
  const items = useSelector((state) => state.todos.items);
  const itemsLeft = items.filter((item) => !item.completed).length;
  //console.log(itemsLeft);
  // console.log(items);

  const activeFilter = useSelector((state) => state.todos.activeFilter);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        {` item${itemsLeft > 1 ? "s" : ""} left`}
      </span>

      <ul className="filters">
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}>
            All
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}>
            Active
          </a>
        </li>
        <li>
          <a href="#/" className={activeFilter === "all" ? "selected" : ""}>
            Completed
          </a>
        </li>
      </ul>
      <button className="clear-completed">Clear Completed</button>
    </footer>
  );
}

export default ContentFooter;
