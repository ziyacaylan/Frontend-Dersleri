import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeActiveFilter,
  // clearCompleted,
  selectedTodos,
  selectActiveFilter,
} from "../redux/todos/todosSlice";

import { clearCompletedTodoListAsync } from "../redux/todos/services";

function ContentFooter() {
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.todos.items);
  // yukarıdaki kodu kısaca yazdık yarın ileride state içerisindeki items ismi değişir ise bu şekilde yazmamız bir noktadan değiştirmek yeterli olacaktır.
  const items = useSelector(selectedTodos);
  const itemsLeft = items.filter((item) => !item.completed).length;
  //console.log(itemsLeft);
  // console.log(items);

  // const activeFilter = useSelector((state) => state.todos.activeFilter);
  // bu şekilde daha temiz olacaktır. Birden fazla kullanım olduğunda bu kod tercih edilmelidir.
  const activeFilter = useSelector(selectActiveFilter);

  useEffect(() => {
    localStorage.setItem("activeFilter", activeFilter);
  }, [activeFilter]);

  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{itemsLeft}</strong>
        {` item${itemsLeft > 1 ? "s" : ""} left`}
      </span>

      <ul className="filters">
        <li>
          <a
            href="#/"
            className={activeFilter === "all" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("all"))}
          >
            All
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "active" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("active"))}
          >
            Active
          </a>
        </li>
        <li>
          <a
            href="#/"
            className={activeFilter === "completed" ? "selected" : ""}
            onClick={() => dispatch(changeActiveFilter("completed"))}
          >
            Completed
          </a>
        </li>
      </ul>
      <button
        className="clear-completed"
        onClick={() =>
          dispatch(clearCompletedTodoListAsync({ clearCompleted: true }))
        }
      >
        Clear Completed
      </button>
    </footer>
  );
}

export default ContentFooter;
