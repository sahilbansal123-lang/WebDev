import React, { useEffect, useState } from "react";

import Header from "./components/Header.jsx";
import TodoItem from "./components/TodoItem.jsx";
import Button from "./components/Button.jsx";
import CounterComponent from "./components/CounterComponent.jsx";
import UUseEffect from "./components/UUseEffect.jsx";
import Timer from "./components/timer.jsx";

import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <UUseEffect />
      <Timer />
      {/* <Header />
      <TodoItem item="Eat" />
      <TodoItem item="sleep" />
      <TodoItem item="code" />
      <TodoItem item="repeat" />
      <Button /> */}
    </div>
  );
};

export default App;
