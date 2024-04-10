import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";
import "./TodoList.css";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        // Thay đổi địa chỉ URL này thành địa chỉ máy chủ của bạn
        const response = await axios.get("http://localhost:5000/api/todos");
        setTodos(response.data);
      } catch (error) {
        console.error("Error fetching todos", error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <div className="todo-list">
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo._id} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
