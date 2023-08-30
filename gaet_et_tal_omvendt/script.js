"use strict";

console.log("Test om den laver virk på sig");

let lowerBound = 1;
let upperBound = 100;
let comGuess = Math.floor(Math.random() * (upperBound - lowerBound + 1)) + lowerBound;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
});

document.querySelector("#button1").addEventListener("click", function () {
  console.log("Der er nu klikket på 'Tallet er for lavt' knappen");
  console.log("computerens gæt var", comGuess);
  lowerBound = comGuess + 1;
  comGuess = generateRandomGuess(lowerBound, upperBound);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
});

document.querySelector("#button2").addEventListener("click", function () {
  console.log("Der er nu klikket på 'Tallet er for højt' knappen");
  console.log("computerens gæt var", comGuess);
  upperBound = comGuess - 1;
  comGuess = generateRandomGuess(lowerBound, upperBound);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
});

document.querySelector("#button3").addEventListener("click", function () {
  console.log("Der er nu klikket på 'Tillykke du gættede korrekt' knappen");
  console.log("computerens gæt var", comGuess);
});

document.querySelector("#button4").addEventListener("click", function () {
  console.log("Der er nu klikket på 'Genstart' knappen");
  lowerBound = 1;
  upperBound = 100;
  comGuess = generateRandomGuess(lowerBound, upperBound);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
});

function generateRandomGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//-------------------------------

// console.log("test om den laver virk på sig");

// const comGuess = Math.floor(Math.random() * 100);
// console.log("comGuess");

// document.querySelector("#button1").addEventListener("click", klik);
// document.querySelector("#button2").addEventListener("click", klik);
// document.querySelector("#button3").addEventListener("click", klik);
// document.querySelector("#button4").addEventListener("click", klik);

// function klik() {
//   console.log("der er nu klikket på en knap");
// }

//-----------------------

// function klik() {
//   const userGuess = document.querySelector("#guess").value;
//   console.log("userGuess", userGuess);
//   console.log("userGuess", typeof userGuess);
//   const resultText = document.querySelector("#result");
//   if (userGuess == comGuess) {
//     resultText.textContent = "Tillykke du har gættet rigtigt";
//   } else if (userGuess < comGuess) {
//     resultText.textContent = "det er for lavt";
//   } else {
//     resultText.textContent = "Det er for højt";
//   }
// }
