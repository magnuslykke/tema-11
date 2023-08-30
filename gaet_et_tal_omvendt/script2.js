"use strict";

console.log("test om JS virker");

let comGuess = Math.floor(Math.random() * 100);
let min = 1;
let max = 100;

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
});

document.querySelector("#button1").addEventListener("click", klik1);
document.querySelector("#button2").addEventListener("click", klik2);
document.querySelector("#button3").addEventListener("click", klik3);
document.querySelector("#button4").addEventListener("click", klik4);

function klik1() {
  console.log("Der er nu klikket på 'Tallet er for lavt' knappen");
  console.log("computerens gæt var", comGuess);
  min = comGuess + 1;
  comGuess = generateRandomGuess(min, max);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
}

function klik2() {
  console.log("Der er nu klikket på 'Tallet er for højt' knappen");
  console.log("computerens gæt var", comGuess);
  max = comGuess - 1;
  comGuess = generateRandomGuess(min, max);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
}

function klik3() {
  console.log("Der er nu trykket på 'Tillykke' knappen");
  console.log("computerens gæt var", comGuess);
}

function klik4() {
  console.log("Der er nu trykket på 'Genstart' knappen");
  min = 1;
  max = 100;
  comGuess = generateRandomGuess(min, max);
  document.querySelector(".tal_computeren_gaetter").textContent = comGuess;
}

function generateRandomGuess(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
