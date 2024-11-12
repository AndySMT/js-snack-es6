/* Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.
Snack 3 (Bonus)
Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).
La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri. */

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
