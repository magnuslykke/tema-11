"use strict";
// let letters = ["a", "b", "c", "d", "e", "f", "g", "h"];

// console.log(letters[4]);

// let newarr = letters;
// newarr[4] = "*";

// console.log(letters[4]);

//------------------------

// const people = ["Harry", "Ron", "Hermione"];

// let result;
// result = people.push("Draco");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.pop();
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.push("Neville");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.push("Luna");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.slice(0, 3);
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.splice(0, 1, "Cho");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// people[1] = "Ginny";
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.push("Fred", "George");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.indexOf("Fred");
// console.log("result", result);
// console.log("people", people);

// console.log("**************");
// result = people.splice(result, 1);
// console.log("result", result);
// console.log("people", people);

//---------------------------

const str = "abcdefghijklmn";
const arr1 = str.split("");

const arr2 = Array.from(str);

const arr3 = [...str];

console.log(arr1);
console.log(arr2);
console.log(arr3);
