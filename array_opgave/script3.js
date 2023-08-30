"use strict";

const people = ["Harry", "Ron", "Hermione", "Neville"];
function sayHello(person) {
  console.log(`Hello ${person}`);
}

// sayHello(people[0]);
// sayHello(people[1]);
// sayHello(people[2]);
// sayHello(people[3]);

// people.forEach(sayHello);

//-- kan også skrives sådan:
// people.forEach(function sayHello(person) {
//   console.log(`Hello ${person}`);
// });

//--- eller:

// people.forEach((person) => {
//   console.log(`Hello ${person}`);
// });

//------ ny opgave:

// function testParms(a, b, c, d) {
//   console.log(`a: ${a}, b: ${b}, c: ${c}, d:${d}`);
// }

// people.forEach(testParms);

//--------- nY opgave
// console.log(isVowel("a"));
// function isVowel(letter) {
//   if (letter === "a" || letter === "e") {
//     return true;
//   } else {
//     return false;
//   }
// }

//-------------------

const animals = [
  {
    name: "grete",
    type: "cat",
  },
  {
    name: "susanne",
    type: "snemand",
  },
  {
    name: "hans",
    type: "dog",
  },
];

// function all(animal) {
//   return true;
// }

// function none(animal) {
//   return false;
// }

// console.log("all", animals.filter(none));
// console.log("all", animals.filter(all));

//--------

function isCat(animal) {
  if (animal.type === "cat") {
    return true;
  } else {
    return false;
  }
}

const onlyCats = animals.filter(isCat);

console.log("Only Cats", animals.filter(isCat));
