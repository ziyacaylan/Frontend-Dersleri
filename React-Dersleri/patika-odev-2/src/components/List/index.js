import React from "react";
import "../List/list.css";
// fonksiyonumuzu oluşturduk ve içerisinide propslarımızı çağırıyoruz. ( gönderilen propslar)
function TodoList({ todos, setTodos, hide }) {
  // console.log(todos);
  const checkTodo = (event) => {
    let newTodos = todos.map((todo) => {
      if (parseInt(todo.id) === parseInt(event.target.id)) {
        return { ...todo, checked: !todo.checked };
      }
      return todo;
    });
    setTodos(newTodos);
    //console.log(newTodos);
  };
  const isCompleted = (event) => {
    if (event.checked && hide === "All") {
      return "completed";
    } else if (event.checked && hide === "Active") {
      return "completed hidden";
    } else if (!event.checked && hide === "Completed") {
      return "hidden";
    }
  };

  const deleteTodo = (event) => {
    setTodos(
      todos.filter((todo) => parseInt(todo.id) !== parseInt(event.target.id))
    );
  };
  return (
    <div>
      <input className="toggle-all" type="checkbox" />
      <label htmlFor="toggle-all">Mark all as complete</label>
      <div className="main-section">
        <ul className="todo-list">
          {todos.map((todo) => (
            <li key={todo.id} id={todo.id} className={isCompleted(todo)}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  defaultChecked={todo.checked}
                  id={todo.id}
                  onClick={checkTodo}
                />
                <label>{todo.todo}</label>
                <button
                  className="destroy"
                  id={todo.id}
                  onClick={deleteTodo}
                ></button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoList;
