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
    weight: 132,
  },
  {
    brand: "cannondale",
    weight: 1221,
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

// Snack 2
const teams = [
  {
    team: "Milan",
  },
];
