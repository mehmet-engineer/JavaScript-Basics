let age = 18;
let success = true;

// if else
if (age >= 18) {
  console.log("Confirmed.");
} else if (age < 18) {
  console.log("Forbidden.");
} else {
  console.log("Error.");
}

// and && operator
// or || operator
if (age >= 18 && success) {
  console.log("Confirmed.");
}

// boolean comparison 
// == equal value?
// === equal value and equal type?
let x = "5";
if (x == 5) {
  console.log("true");
}
if (x === 5) {
  console.log("false");
}

// for loop usage 1
let cars = ["honda", "toyota", "mazda"];
for (let i = 0; i < cars.length; i++) {
  console.log(cars[i]);
}

// for loop usage 2
for (let car of cars) {
  console.log(car);
}

// while loop
while (i < 10) {
  text += "The number is " + i;
  i++;
  // break;
}

// JavaScript labels
// allows statement referencing to control flow
block1:
{
  console.log("starts...");
  break block1;
  console.log("Not executed.");
}

// block is used for loop control
let i = 0;
outer: for (let i = 0; i < 10; i++) {
  inner: for (let j = 0; j < 10; j++) {
    if (j === 2) {
      break outer;
    }
  }
}

// do while loop
// first run do block, then check while condition
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);