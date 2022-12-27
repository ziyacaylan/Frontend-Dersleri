import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

import {
  toggle,
  destroy,
  // selectedTodos,
  selectFilteredTodos,
  getTodosAsync,
} from "../redux/todos/todosSlice";
// let filtered = [];
function TodoList() {
  const dispatch = useDispatch();
  // const items = useSelector((state) => state.todos.items);
  // const items = useSelector(selectedTodos);
  // const activeFilter = useSelector((state) => state.todos.activeFilter);

  const filteredTodos = useSelector(selectFilteredTodos);

  //console.log(items);

  const isLoading = useSelector((state) => state.todos.isLoading);
  const error = useSelector((state) => state.todos.error);
  // console.log("state durumu : ", isLoading);

  useEffect(() => {
    dispatch(getTodosAsync());
  }, [dispatch]);

  const handleDestroy = (id) => {
    if (window.confirm("Are you sure ?")) {
      console.log(id);
      dispatch(destroy(id));
    }
  };
  // filtered = items;
  // if (activeFilter !== "all") {
  //   filtered = items.filter((todo) =>
  //     activeFilter === "active"
  //       ? todo.completed === false
  //       : todo.completed === true
  //   );
  // }
  if (isLoading) {
    return <Loading />;
  }
  if (error) {
    return <Error message={error} />;
  }
  return (
    <ul className="todo-list">
      {filteredTodos.map((item) => (
        <li key={item.id} className={item.completed ? "completed" : ""}>
          <div className="view">
            <input
              className="toggle"
              type="checkbox"
              onChange={() => dispatch(toggle({ id: item.id }))}
              checked={item.completed}
            />
            <label> {item.title}</label>
            <button
              className="destroy"
              onClick={() => handleDestroy(item.id)}
            ></button>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TodoList;
