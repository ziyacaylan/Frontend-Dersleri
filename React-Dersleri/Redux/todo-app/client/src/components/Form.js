import { useState } from "react";
import { useDispatch } from "react-redux";

// import { nanoid } from "react-redux";
import { addNewTodo } from "../redux/todos/todosSlice";
function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    if (!title) return;
    e.preventDefault();
    //console.log(e);
    dispatch(addNewTodo({ title }));
    setTitle("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
    </form>
  );
}

export default Form;
