// 3 TYPES OF LOOPS
//      FOR
//      WHILE
//      DO WHILE

// FOR LOOP

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     console.log(i, "-> Number is divisible by 2");
//   } else if (!(i % 2 == 0)) {
//     console.log(i, "Number is not divisible by 2");
//   }
// }

// While LOOP

// let num = 1;
// while (num <= 10) {
//   if (num % 2 == 0) {
//     console.log(num, "-> Number is divisible by 2");
//   } else if (!(num % 2 == 0)) {
//     console.log(num, "Number is not divisible by 2");
//   }
//   num++;
// }

//  DO WHILE LOOP

// let ip = 50;
// let house = 50;
// do {
//     ip = ip + 1;
//     console.log("Step Taken " + ip)
// } while (ip <= house);

// GUESS THE NUMBER GAME
let number = 40;
let guess = 0;
do {
  guess = parseInt(prompt("Guess a number"));
  if (guess == number) {
    alert("winner");
    break;
  }
} while (guess != 0);
