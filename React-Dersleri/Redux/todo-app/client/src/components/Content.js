import React from "react";
import TodoList from "./TodoList";
import ContentFooter from "./ContentFooter";
function Content() {
  return (
    <>
      <section className="main">
        <input type="checkbox" className="toggle-all" />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <TodoList />
      </section>
      <ContentFooter />
    </>
  );
}

export default Content;
