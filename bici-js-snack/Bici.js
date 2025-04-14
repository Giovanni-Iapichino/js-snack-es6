//todo Creare un array di oggetti:
//todo Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
//todo Stampare a schermo la bici con peso minore.

const racingBike = [
  {
    name: "Bici da corsa 1",
    weight: 7.7,
  },
  {
    name: "Bici da corsa 2",
    weight: 7.5,
  },
  {
    name: "Bici da corsa 3",
    weight: 7.8,
  },
  {
    name: "Bici da corsa 4",
    weight: 7.2,
  },
  {
    name: "Bici da corsa 5",
    weight: 7.6,
  },
];

//* VERSIONE HARDCODE
// const LightestBike = racingBike[3].name;
// const LightestWeight = racingBike[3].weight;
// console.log(
//   `La Bici più leggera è la ${LightestBike} con un peso di ${LightestWeight} kg`
// );

// * VERSIONE DYNAMIC
let lightestBike;

for (const currentBike of racingBike) {
  if (!lightestBike || currentBike.weight < lightestBike.weight) {
    lightestBike = currentBike;
  }
}

console.log(
  `La bici più leggera è la ${lightestBike.name} con un peso di ${lightestBike.weight} kg`
);
