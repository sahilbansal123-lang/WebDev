import React from "react";
import ReactDOM from "react-dom/client";

// // Component
// function HelloWorld() {
//   return <h1> Hello World</h1>;
// }

// JSX
function MyComponent() {
  const name = "Sahil Bansal";
  return <h2> Hello {name} </h2>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
