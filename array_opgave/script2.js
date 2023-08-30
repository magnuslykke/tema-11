"use strict";

// function greeting(firstname) {
//   return `Hello ${firstname}`;
// }

// const sayHi = greeting;

// console.log("greeting", greeting("Magnus"));
// console.log("sayHi", sayHi("Gaga"));

//-----------

const person3 = {
  firstName: "Harry",
  lastName: "Potter",
  hired: false,
};

const person4 = {
  firstName: "Fred",
  lastName: "Weasley",
  hired: false,
};

// person3.firstName = "Johnny";
// console.log(person3);

function hire(person) {
  person.hired = true;
}

function fire(person) {
  person.hired = false;
}

// console.log(person4);
// hire(person4);

// console.log(person4);

function fireOrHire(action, person) {
  action(person);
}

console.log(person4);
fireOrHire(hire, person4);
console.log(person4);
fireOrHire(fire, person4);
console.log(person4);

//----------------
console.log("*************");

setTimeout(timesUp, 1000, "Birgitte", "Hanne");
function timesUp(theName, theSecondName) {
  console.log("Tiden er gået!" + theName + " " + theSecondName);
}
