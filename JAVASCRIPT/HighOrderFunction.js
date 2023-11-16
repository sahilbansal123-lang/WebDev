//  High order function are the type of function which accept a function as an argument

function add(a, b, cb) {
  let result = a + b;
  cb(result);

  return () => console.log(result);
}

let resultFunction = add(2, 4, () => {});
resultFunction();

// add(10, 333, function (val) {
//   console.log(val);
// });

// add(10, 20, (res) => console.log(res)); // using arrow function
