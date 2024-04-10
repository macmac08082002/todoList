import React, { useState } from "react";
import axios from "axios";
import "./TodoForm.css";

const TodoForm = ({ onAdd, onUpdate }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Thay đổi địa chỉ URL này thành địa chỉ máy chủ của bạn
      const response = await axios.post("http://localhost:5000/api/todos", {
        title,
        description,
      });
      onAdd(response.data);
      setTitle("");
      setDescription("");
    } catch (error) {
      console.error("Error creating todo:", error);
    }
  };

  return (
    <div className="todo-form">
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </label>
        <label>
          Description:
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        </label>
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
};

export default TodoForm;
