function main() {
  const name = "Sahil";

  function sayMyName() {
    console.log(name);
  }
  sayMyName();
}
// main();

function adder(num) {
  function add(b) {
    console.log(num + b);
  }
  return add;
}
// const addto6 = adder(6);
// const addto10 = adder(10);

// addto6(4);
// addto6(55);

// addto10(10);
// addto10(33);

const myName = document.getElementById("my-name");
const btn = document.getElementById("myButton");

function makeTextSizer(size) {
  function changeSize() {
    myName.style.fontSize = `${size}px`;
  }

  return changeSize;
}
const size12 = makeTextSizer(12);
const size20 = makeTextSizer(20);
const size5 = makeTextSizer(5);
const size44 = makeTextSizer(44);
const size70 = makeTextSizer(70);

btn.addEventListener("click", size70);
