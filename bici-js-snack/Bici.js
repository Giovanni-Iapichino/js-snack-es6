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

const LightestBike = racingBike[3].name;
const LightestWeight = racingBike[3].weight;
console.log(
  `La Bici più leggera sarà la ${LightestBike} con un peso di ${LightestWeight} kg`
);
