import React from "react";
import ReactDOM from "react-dom/client";

// // Component
// function HelloWorld() {
//   return <h1> Hello World</h1>;
// }

// JSX
function MyComponent() {
  const name = "Sahil Bansal";
  return <h2> Hello {userName()} </h2>;
}

function userName() {
  return user.firstName + " " + user.lastName;
}

let user = {
  firstName: "sahil",
  lastName: "Bansal",
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<MyComponent />);
