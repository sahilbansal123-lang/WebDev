import React from "react";

import Header from "./components/Header.jsx";
import TodoItem from "./components/TodoItem.jsx";
import Button from "./components/Button.jsx";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem item="Eat" />
      <TodoItem item="sleep" />
      <TodoItem item="code" />
      <TodoItem item="repeat" />
      <Button />
    </div>
  );
};

export default App;
