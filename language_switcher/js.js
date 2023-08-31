"use strict";
const texts = {
  de: {
    texts: [
      { text: "Das Bot", location: ".header" },
      { text: "Das Ro-Bot", location: ".footer" },
    ],
  },
  da: {
    texts: [
      { text: "Båden", location: ".header" },
      { text: "Robotten", location: ".footer" },
    ],
  },
};

console.log(texts.da);
console.log(texts["da"]); //Det er der samme som at skrive det der står lige over.

// document.querySelector(texts[locale].texts[0].location).textContent = texts[locale].texts[0].text; //-viser hvordan man kommer ned i objektet.

// console.log(texts[locale].texts);
// texts[locale].texts.forEach((textObj) => {
//   console.log(textObj);
// });

document.querySelectorAll("option").forEach(() => {
  console.log("noget er sket");
  addEventListener("click", klik);
});

function klik(language) {
  let locale = language.target.value;
  texts[locale].texts.forEach((textObj) => {
    console.log(textObj.text);
    console.log(textObj.location);
    document.querySelector(textObj.location).textContent = textObj.text;
  });
}

// if (locale === "da") {
//   document.querySelector("header").textContent = texts[locale].texts[0].text;
//   document.querySelector(".footer").textContent = texts[locale].texts[1].text;
// } else {
//   document.querySelector("header").textContent = texts.de.texts[0].text;
//   document.querySelector(".footer").textContent = texts.de.texts[1].text;
// }

// let select = klik_dropdown;

// function klik_dropdown(klik) {
// document.querySelector("option").addEventListener("click", dropDownMenu);

// function dropDownMenu() {
//   document.querySelector();
// }

// if (locale === "de") {
//   document.querySelector("header").textContent = texts.de.texts[0].text;
//   document.querySelector(".footer").textContent = texts.de.texts[1].text;
// } else {
//   document.querySelector("header").textContent = texts.da.texts[0].text;
//   document.querySelector(".footer").textContent = texts.da.texts[1].text;
// }
