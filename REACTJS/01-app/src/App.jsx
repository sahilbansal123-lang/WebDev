import React from "react";
import "./index.css";
import SlotM from "./Components/SlotM";

const App = () => {
  return (
    <>
      <h1 className="heading-style">
        🎰 Welcome to
        <span style={{ fontWeight: "bold" }}> Slot Machine Game</span> 🎰
      </h1>
      <SlotM />
    </>
  );
};

export default App;
