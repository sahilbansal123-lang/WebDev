import React, { useState } from "react";
import "./index.css";

const App = () => {
  // const [Count, setCount] = useState(0);
  // const IncNum = () => {
  //   setCount(Count + 1);
  // };

  let newTime = new Date().toLocaleTimeString();
  const [Time, setTime] = useState(newTime);

  const time = () => {
    newTime = new Date().toLocaleTimeString();
    setTime(newTime);
  };

  return (
    <>
      <h1>{Time}</h1>
      <button onClick={time}>Get Time</button>
    </>
  );
};

export default App;
