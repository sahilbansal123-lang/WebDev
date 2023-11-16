// SYNTAC DIFFRENCE

const sayHello = () =>  {
    console.log("hello");
};

const add = (a, b) => {
    return a + b;
};


let ans = add(10, 30);
console.log(ans);
sayHello();


// ARGUMENTS KEYWORD
    // not available in arrow function
    // so for any numbers of params we have to use spread operator

const mul = (...numbers) => {
    let ans = 1;
    for (let i = 0; i < numbers.length; i++) {
        ans = ans * numbers[i];
    }
    return ans;
}

let result = mul(1, 2, 3, 4, 5, 6);
console.log(result);


// HOISTING
// 1. We cannot call function before defining it in case of arrow function
// 2. but in case of normal function we can call function before defining it

// sub(10, 20); // gives error
const sub = (a, b) => {
    return a-b;
}
console.log(sub(10, 20)); // works fine

console.log(Multiply(10, 20)); // Both work fine properly
function Multiply(a, b) {
  let c = a * b;
  return c;
}
console.log(Multiply(10, 20)); // both work fine


// THIS KEYWORD
const obj = {
    key: 20,
    myFunction: function () {
        console.log("value is: "+ this.key);
    }
};

obj.myFunction();


