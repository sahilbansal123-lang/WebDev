//  High order function are the type of function which accept a function as an argument

function add(a, b, cb) {
  let result = a + b;
  cb(result);
}

add(10, 333, function (val) {
  console.log(val);
});

add(10, 20, (res) => console.log(res)); // using arrow function
