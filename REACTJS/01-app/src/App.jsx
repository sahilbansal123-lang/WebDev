import React, { useState } from "react";
import "./index.css";

const App = () => {
  const [Count, setCount] = useState(0);
  const IncNum = () => {
    setCount(Count + 1);
  };

  return (
    <>
      <h1>{Count}</h1>
      <button onClick={IncNum}>Click</button>
    </>
  );
};

export default App;
