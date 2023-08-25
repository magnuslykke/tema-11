import { randomNumber } from "./utils/numbers.js";
import { getRandomColor } from "./utils/colors.js";

const p = document.querySelectorAll("p");
const btn = document.querySelector("button");

function populatePs(max) {
  p.forEach((p) => {
    p.textContent = randomNumber(max);
    p.style.backgroundColor = getRandomColor();
  });
}

btn.addEventListener("click", (e) => {
  populatePs(30);
});
