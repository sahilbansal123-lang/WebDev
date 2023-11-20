// CURRING

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// console.log(add(11)(22)(33));

// function sendEmail(emailAddress) {
//   return function (subject) {
//     return function (body) {
//       console.log(
//         `sending Email to ${emailAddress} with subject ${subject} and message is ${body}`
//       );
//     };
//   };
// }

// ANOTHER WAY OF DOING THE ABOVE WORK IN ONE LINE IS
const sendEmail = (emailAddress) => (subject) => (body) =>
  `sending Email to ${emailAddress} with subject ${subject} and message is ${body}`;

let step1 = sendEmail("bansalsahil9053@gmail.com");
let step2 = step1("new order confirmation");
console.log(step2("Hey sahil here is something intresting for you"));
//   ^^ ABOVE IS AN EXAMPLE OF CURRING
