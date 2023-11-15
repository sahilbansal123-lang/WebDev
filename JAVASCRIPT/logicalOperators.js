// LOGICAL OPERATOR
//      AND
//      OR
//      NOT

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
