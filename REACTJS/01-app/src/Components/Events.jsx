import React, { useState } from "react";

const Events = () => {
  const purple = "#8344ad";
  const lightPurple = "#9b59b6";
  const [bg, setBg] = useState(purple);
  const [Name, setName] = useState("Click Me");
  const [color, setcolor] = useState(lightPurple);

  const bgChange = () => {
    let bg = "#34495e";
    setBg(bg);
    setName("Welcome Sahil ❤️");
    let color = "#868686";
    setcolor(color);
  };
  const bgChangeAgain = () => {
    let bg = "#8344ad";
    setBg(bg);
    setName("BYEE Sahil ✋");
    let color = "#9b59b6";
    setcolor(color);
  };

  return (
    <div style={{ backgroundColor: bg }}>
      <button
        style={{ backgroundColor: color }}
        onClick={bgChange}
        onDoubleClick={bgChangeAgain}
      >
        {Name}
      </button>
    </div>
  );
};

export default Events;
