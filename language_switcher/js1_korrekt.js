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

// Funktion til at opdatere teksterne på siden baseret på det valgte sprog
function updateTextContent(selectedLocale) {
  texts[selectedLocale].texts.forEach((textObj) => {
    document.querySelector(textObj.location).textContent = textObj.text;
  });
}

const dropdown = document.getElementById("dropdown");

// Eventlytter til ændringer i dropdown-værdien
dropdown.addEventListener("change", function () {
  const selectedLocale = dropdown.value;
  updateTextContent(selectedLocale);
});

// Initialisering af teksterne baseret på det forudvalgte sprog
const initialLocale = "da";
updateTextContent(initialLocale);
