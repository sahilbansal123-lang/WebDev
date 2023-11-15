// if else

const a = 6;

if ((a >= 18) & (a < 60)) {
  console.log("Yes you can vote");
} else if (a >= 60) {
  console.log("Now you can retire");
} else {
  console.log("No you can't vote");
}

// If else using ternarry operators
const age = 11;

age >= 18 ? console.log("yes") : console.log("No");
//      then                  else

// SWITCH CASE STATEMENT
const option = 4;
switch (option) {
  case 1:
    console.log("Namaste");
    break;
  case 2:
    console.log("Hello");
    break;
  case 3:
    console.log("Kem cho");
    break;
  case 4:
    console.log("bonjour");
    break;
  default:
    console.log("Sorry");
}

const b = 10;
const c = 20;
const opt = "/";

switch (opt) {
  case "+":
    console.log("b + c = ", b + c);
    break;
  case "-":
    console.log("b - c = ", b - c);
    break;
  case "*":
    console.log("b * c = ", b * c);
    break;
  case "/":
    console.log("b / c = ", b / c);
    break;
  case "%":
    console.log("b % c = ", c % b);
    break;
  default:
    console.log("Select the operator first")
    break;
}
