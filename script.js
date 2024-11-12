// Snack 1
const bikes = [
  {
    brand: "scott",
    weight: 120005,
  },
  {
    brand: "bianchi",
    weight: 1322,
  },
  {
    brand: "cannondale",
    weight: 121,
  },
  {
    brand: "trek",
    weight: 12229,
  },
];

let lightestBike = bikes[0];
for (let i = 0; i < bikes.length; i++) {
  if (bikes[i].weight < lightestBike.weight) {
    lightestBike = bikes[i];
  }
}
console.log(lightestBike);
console.log(
  `La bicicletta piu leggera e' la: ${lightestBike.brand} e il stuo peso e' di ${lightestBike.weight} kg`
);

// Snack 2
const teams = [
  {
    team: "Milan",
    point: 0,
    foul: 0,
  },
  {
    team: "Barca",
    point: 0,
    foul: 0,
  },
  {
    team: "Bayern",
    point: 0,
    foul: 0,
  },
  {
    team: "Psg",
    point: 0,
    foul: 0,
  },
];

for (let i = 0; i < teams.length; i++) {
  teams[i].point = randomNumber(1, 20);
  teams[i].foul = randomNumber(1, 3);
}
console.log(teams);

let teamFoults = [];
for (let i = 0; i < teams.length; i++) {
  teamFoults.push(teams[i].team);
  teamFoults.push(teams[i].foul);
}
console.log(teamFoults);

// Snack 3

const numBetween = [];
const a = 2;
const b = 12;

let newArray = (a, b) => {
  for (let i = a; i <= b; i++) {
    numBetween.push(i);
  }
  return numBetween;
};
console.log(newArray(a, b));
