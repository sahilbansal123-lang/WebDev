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