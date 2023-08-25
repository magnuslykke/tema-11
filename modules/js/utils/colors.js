import { randomNumber } from "./numbers.js";

export function getRandomColor() {
  const r = randomNumber(256);
  const g = randomNumber(256);
  const b = randomNumber(256);

  return `rgb(${r} ${g} ${b})`;
}
