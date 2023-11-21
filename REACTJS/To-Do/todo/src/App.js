import React from "react";
import Header from "./components/Head.jsx";
import TodoItem from "./components/TodoItem.jsx";
import Button from "./components/Button.jsx";

const App = () => {
  return (
    <div>
      <Head />
      <TodoItem />
      <Button />
    </div>
  );
};

export default App;
