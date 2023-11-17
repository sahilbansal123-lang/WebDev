//  Interaction of javascript with browser
// DOM == DOCUMENT OBJECT MODEL

// Query Selector using tag name
// const div = document.querySelector("div");
// //  = '<h1> HACKED!! </h1>';
// console.log(div.innerHTML);


//  Query Selector using #id
const username = document.querySelector('#username');
console.log(username.innerText);
// username.innerText = "John Doe";


//  Query Selector using class(.)
const classes = document.querySelector('.block')
console.log(classes);
// classes.innerHTML = "<h1> Hacked! </h1>";