// LOGICAL OPERATOR
//      AND both condititon should be true
//      OR at least one condition will be true
//      NOT

// AND OPERATOR (&&) ->
const age = 18;

if (age >= 18 && age <= 50) {
  console.log("You are an adult");
} else if (age > 50) {
  console.log("You are an old person");
} else if (age > 5 && age < 18) {
  console.log("you are a teen");
} else {
  console.log("you are an infant");
}

// OR OPERATOR(||) ->

const num = 10;
const gender = "male";
if (num >= 20 || gender == "female") {
  console.log("you are adult female");
} else {
  console.log("you are an teenage boy");
}

// NOT OPERATOR (!) ->
const number = 2;
if (!(number % 2 == 0)) {
  console.log("odd Number");
} else {
  console.log("even Number");
}
