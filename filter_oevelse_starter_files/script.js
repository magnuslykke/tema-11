const vehicles = [
  { type: "Bus", fuel: "Diesel", passengers: 45, stops: ["Nørrebrogade", "Elmegade"] },
  { type: "Bil", fuel: "Benzin", passengers: 4, ownedBy: "Klaus" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 0, ownedBy: "Jonas", isElectric: true },
  { type: "Bil", passengers: 5, ownedBy: "Elon", isElectric: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Fonda" },
  { type: "Cykel", fuel: "Rugbrød", passengers: 2, ownedBy: "Vingegård", isTandem: true },
  { type: "MC", fuel: "Benzin", passengers: 2, ownedBy: "Yolanda" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Børge" },
  { type: "Knallert", fuel: "Benzin", passengers: 1, ownedBy: "Jonas" },
  { type: "Løbehjul", passengers: 1, isElectric: true },
];

const ulPointer = document.querySelector("ul");

showTheseVehicles(vehicles);

function showTheseVehicles(arr) {
  arr.forEach((each) => {
    ulPointer.innerHTML += `<li>${each.type}</li>`;
    ulPointer.innerHTML += `<li>${each.fuel}</li>`;
    ulPointer.innerHTML += `<li>${each.passengers}</li>`;
    ulPointer.innerHTML += `<li>${each.stops}</li>`;
    ulPointer.innerHTML += `<li>${each.ownedBy}</li>`;
    ulPointer.innerHTML += `<li>${each.isElectric}</li>`;
    ulPointer.innerHTML += `<li>${each.isTandem}</li>`;
  });
}

//--- Viser alle elektriske kørertøjer:

const onlyElectric = vehicles.filter(elec);

function elec(bil) {
  if (bil.isElectric === true) {
    return true;
  } else {
    return false;
  }
}

console.log(onlyElectric);

//-----Viser alle køretøjer med mere end 2 sæder

const moreThan2Seats = vehicles.filter(twoSeat);

function twoSeat(seat) {
  if (seat.passengers === 2) {
    return false;
  } else if (seat.passengers === 1) {
    return false;
  } else if (seat.passengers === 0) {
    return false;
  } else {
    return true;
  }
}

console.log(moreThan2Seats);

//-----------

const onlyElectricOwnedByJonas = vehicles.filter(elecJonas);

function elecJonas(elJo) {
  if (elJo.isElectric === true && elJo.ownedBy === "Jonas") {
    return true;
  } else {
    return false;
  }
}

console.log(onlyElectricOwnedByJonas);

//--------

const onlyRugbroedMedPladsTilMereEnd1 = vehicles.filter(rugbroed1);

function rugbroed1(rug1) {
  if (rug1.fuel === "Rugbrød" && rug1.passengers > 1) {
    return true;
  } else {
    return false;
  }
}

console.log(onlyRugbroedMedPladsTilMereEnd1);

// function isCat(animal) {
//   if (animal.type === "cat") {
//     return true;
//   } else {
//     return false;
//   }
// }

// const onlyCats = animals.filter(isCat);

// console.log("Only Cats", animals.filter(isCat));
