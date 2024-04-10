import React from "react";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

const App = () => {
  return (
    <div>
      <TodoList />
      <TodoForm />
    </div>
  );
};

export default App;