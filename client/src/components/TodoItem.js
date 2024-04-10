import React from "react";
import "./TodoItem.css";
const TodoItem = ({ todo }) => {
  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""}`}>
      <h3>{todo.title}</h3>
      <p>{todo.description}</p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
    </li>
  );
};

export default TodoItem;
