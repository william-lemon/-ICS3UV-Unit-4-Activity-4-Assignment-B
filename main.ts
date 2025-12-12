/**
 * @author William Lemon
 * @version 1.0.0
 * @date 2025-12-11
 * @fileoverview This program keeps track of car stats.
 */

// FUNCTIONS

function oilChange(mileage: number, oilChangeKM: number): boolean {
  // This function will check if the car needs an oil change
  if (mileage - oilChangeKM >= 5000) {
    console.log("An oil change was done.");
    return true;
  } else {
    return false;
  }
}

function carStats(odometer: number, oilChangeKM: number, carColor: string,
  carModel: string, gasCost: number[]): string {

  // Build a list of gas costs
  let costList = "";
  let index = 0;
  while (index < gasCost.length) {
    if (!isNaN(gasCost[index])) {
      costList = costList + gasCost[index] + ", ";
    }
    index = index + 1;
  }

  return "Car Model: " + carModel +
    "\nCar Colour: " + carColor +
    "\nOdometer: " + odometer + " km" +
    "\nLast Oil Change At: " + oilChangeKM + " km" +
    "\nGas Costs: " + costList;
}

function wrapCar(): string {
  // Prompt user for a new colour
  let colour = prompt("Enter a new colour: ");
  if (colour === null || colour === "") {
    colour = "red";
  }
  return colour;
}

function drive(): number {
  // Generate random distance between 100–1000 km
  let km = Math.floor(Math.random() * 901) + 100;
  console.log("You drove " + km + " km.");
  return km;
}

function fillUp(gasCost: number[]): void {
  // Prompt user for cost to fill up
  let amount = Number(prompt("Enter cost to fill up: "));
  let index = 0;
  while (index < gasCost.length) {
    if (isNaN(gasCost[index])) {
      gasCost[index] = amount;
      console.log("Fill-up saved.");
      break;
    }
    index = index + 1;
  }
}

function displayCostToFillUp(gasCost: number[]): number {
  // Display all fill-up costs and calculate average
  let total = 0;
  let count = 0;
  console.log("\nFill-up costs:");
  let index = 0;
  while (index < gasCost.length) {
    if (!isNaN(gasCost[index])) {
      console.log("$" + gasCost[index]);
      total = total + gasCost[index];
      count = count + 1;
    }
    index = index + 1;
  }
  let average = total / count;
  console.log("Average fill-up cost: $" + average.toFixed(2));
  return average;
}

// CONSTANTS AND VARIABLES

let odometer: number = 65000;       // mileage of Car
let oilChangeKM: number = 65000;    // value since the last oil change
let carColor: string = "red";       // color of Car
let carModel: string = "Honda Civic"; // model of Car
let newMileage: number = 0;         // new mileage amount
let gasCost: number[] = new Array(10); // cost of gas per fill up

// Initialize gasCost array to NaN
let gasIndex = 0;
while (gasIndex < gasCost.length) {
  gasCost[gasIndex] = NaN;
  gasIndex = gasIndex + 1;
}

// First fill-up
gasCost[0] = 74.00;

// WRAP THE CAR
carColor = wrapCar();

// DRIVE THE CAR
newMileage = drive();
odometer = odometer + newMileage;

// CHECK OIL CHANGE
if (oilChange(odometer, oilChangeKM)) {
  oilChangeKM = odometer;
} else {
  console.log("Your car does not need an oil change.");
}

// FILL-UP
fillUp(gasCost);

// DISPLAY FILL-UP COSTS AND AVERAGE
let averageCost = displayCostToFillUp(gasCost);
console.log("Average Returned to Main: $" + averageCost.toFixed(2));

// DISPLAY CAR STATS
console.log("\n--- CAR STATS ---");
console.log(carStats(odometer, oilChangeKM, carColor, carModel, gasCost));

console.log("\nDone.");
