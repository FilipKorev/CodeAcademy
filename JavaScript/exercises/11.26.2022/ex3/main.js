let miles = 209.2142;
const kmInMiles = 1.60934;
let km = miles / kmInMiles;
console.log(`The distance od ${km} is equal to ${miles} miles`);

let heightInInch = 69;
let weightInPounds = 43;
const inchToCm = 2.54;
const kgToPounds = 2.2046;

let heightInCm = heightInInch * inchToCm;
let weightInKilo = weightInPounds * kgToPounds;
console.log('Height in cm = ' + heightInCm);
console.log('Weight in kg = ' + weightInKilo);

let BMI = weightInKilo / (heightInCm ** 2 / 100);
console.log(`BMI is = ${BMI}`);