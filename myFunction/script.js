/******************** Numbers Function ********************/

// rdmNum
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
// even-odd
function isEven(num) {
  return num % 2 === 0;
}

/******************** Operators Function ********************/

// Sum
function sumNum(num1, num2) {
  return num1 + num2;
}
// Subtraction
let subNum = (num1, num2) => num1 - num2;
// Moltiplication
let MolNum = (num1, num2) => num1 * num2;
// Division
let divNum = (num1, num2) => {
  if (num2 == 0) {
    alert("Divisione per 0 non consentita");
    return 0;
  } else {
    return num1 / num2;
  }
};
