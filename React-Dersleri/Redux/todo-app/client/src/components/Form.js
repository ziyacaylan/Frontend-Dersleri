import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loading from "./Loading";
import Error from "./Error";

// import { nanoid } from "react-redux";
import { addTodoAsync } from "../redux/todos/services";
function Form() {
  const [title, setTitle] = useState("");
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.todos.addNewTodo.isLoading);
  const error = useSelector((state) => state.todos.addNewTodo.error);

  const handleSubmit = async (e) => {
    if (!title) return;
    e.preventDefault();
    //console.log(e);
    await dispatch(addTodoAsync({ title }));
    setTitle("");
  };
  // if (error) {
  //   alert(error);
  //   return null;
  // }
  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", alignItems: "center" }}
    >
      <input
        disabled={isLoading}
        className="new-todo"
        type="text"
        placeholder="What needs to be done?"
        autoFocus
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      {isLoading && <Loading />}
      {error && <Error message={error} />}
    </form>
  );
}

export default Form;
