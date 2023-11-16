//      FUNCTIONS

// function sayHello() {
//   console.log("Hey Sahil");
// }

// sayHello();

// function Add(a, b) {
//   let c = a + b;
//   return c;
// }

// function Multiply(a, b) {
//   let c = a * b;
//   return c;
// }

// let add = Add(10, 30);
// console.log("Hey user the ans is", add);

// let mul = Multiply(10, 30);
// console.log("Hey user the ans is", mul);


// Function using Argument keyword for taking multiple params

function addNumbers() {
  let ans = 0;
  for (let i = 0; i < arguments.length; i++) {
    ans = ans + arguments[i];
  }
  return ans;
}

// Function using spread operator usd to take multiple params

function addNumbers(...numbers) {
  let ans = 0;
  for (let i = 0; i < numbers.length; i++) {
    ans = ans + numbers[i];
  }
  return ans;
}

let result = addNumbers(1, 2, 3, 4, 5, 6, 7, 8, 9);
console.log(result);
