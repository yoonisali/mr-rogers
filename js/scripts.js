// Business Logic
let numbersArray = [];

function rogersNumbers(input) {
  for (let index = 0; index <= input; index++) {
    numbersArray.push(index.toString());
  }

  rogersSpeaks();
}

const beep = "beep!";
const boop = "boop!";
const neighbor = "Won't you be my neighbor?";
let final = [];

function rogersSpeaks() {
  let rogers = numbersArray.map(function (number) {
    if (number.includes("1")) {
      return beep;
    } else if (number.includes("2")) {
      return boop;
    } else if (number.includes("3")) {
      return neighbor;
    } else {
      return number;
    }
  });
  final = rogers;
}

console.log(rogersNumbers(5));
console.log(final);

// UI Logic
