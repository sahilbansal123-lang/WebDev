//  Interaction of javascript with browser
// DOM == DOCUMENT OBJECT MODEL

// Query Selector using tag name
// const div = document.querySelector("div");
// //  = '<h1> HACKED!! </h1>';
// console.log(div.innerHTML);

//  Query Selector using #id
// const username = document.querySelector('#username');
// console.log(username.innerText);
// username.innerText = "John Doe";

//  Query Selector using class(.)
// const classes = document.querySelector('.block')
// console.log(classes);
// classes.innerHTML = "<h1> Hacked! </h1>";

//      DOCUMENT GET ELEMENT BY ID

// const el = document.getElementById("username");
// console.log(el.id);
// el.innerText = "john doe";
// el.style.textDecoration = "underline";
// el.style.color = "green";
// el.parentElement.style.background = "gray";

//      DOCUMENT GET ELEMENT BY CLASS
const elements = document.getElementsByClassName("block");
for (let i = 0; i < elements.length; i++) {
  elements.item(i).style.background = "blue";
}
