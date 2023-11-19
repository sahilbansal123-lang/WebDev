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

const addto6 = adder(6);
addto6(4);
addto6(3);
addto6(2);
addto6(55);
