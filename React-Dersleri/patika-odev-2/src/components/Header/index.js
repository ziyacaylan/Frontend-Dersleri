import { useState, useEffect } from "react";
import "./header.css";

const initialInputValues = "";
// Componen içerisine göndermiş olduğumuz prop'ları çağırıyoruz.
function Header({ todos, setTodos, count, setCount }) {
  const [newTodo, setNewTodo] = useState(initialInputValues); // Girilen totonun değerlerini tutması için yeni bir state oluştuyoruz.

  useEffect(() => {
    setNewTodo(initialInputValues);
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);
  const onSubmit = (e) => {
    e.preventDefault(); // Submit olduğunda sayfa yenileme durduruldu.

    // eğer input boşgirildi ise state işlemi başlamasını durduruyoruz.
    if (newTodo.trim() === "") {
      return false;
    }
    console.log(newTodo);
    setTodos([
      ...todos, // state içerisindeki değerler silinmeden ekliyoruz.
      {
        id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
        todo: newTodo,
        checked: false, // checkboxların default değeri için oluşturuldu
      },
    ]);
    console.log(todos);
  };
  return (
    <div>
      <h1 className="page-title">todos</h1>
      <form onSubmit={onSubmit}>
        <input
          className="new-todo"
          placeholder="What needs to be done?"
          autoFocus
          value={newTodo} // newTodo verisi ile value eşitlendi
          onChange={(e) => setNewTodo(e.target.value)} // value değiştiğinde newTodo state'ine value'yu set ediyoruz.
        />
      </form>
    </div>
  );
}

export default Header;
