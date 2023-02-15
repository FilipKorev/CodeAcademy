let shuttleName = 'Determiotion';
let shuttleSpeedMph = 17.500;
let distanceToMars = 225000000;
let distanceToMoon = 238400;
const milesPerKm = 0.621;

console.log(typeof(shuttleName));
console.log(typeof(shuttleSpeedMph));
console.log(typeof(distanceToMars));
console.log(typeof(distanceToMoon));
console.log(typeof(milesPerKm));

let milesToMars = distanceToMars * milesPerKm;
console.log(milesToMars);
let hoursToMars = milesToMars / shuttleSpeedMph ; 
console.log(hoursToMars);
let daysToMars = hoursToMars / 24;
console.log(daysToMars);

alert (shuttleName + ' will take ' + daysToMars + ' days to reach the mars');

let milesToMoon = distanceToMoon * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

alert (`${shuttleName} will take ${daysToMoon} days to reach the moon`)