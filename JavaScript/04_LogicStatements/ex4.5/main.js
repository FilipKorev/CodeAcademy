let prize =Number(prompt("select a number between 0-10"));
let output = "My Selection: ";
let reward;
switch(prize) {
    case 0:
    case 1:
    case 2:
        reward = "$300"
    break;
    case 3:
    case 4:
    case 5:
        reward = "$500"
    break;
    case 6:
    case 7:
    case 8:
    case 9:
        reward = "$1000"
    break;
    case 10:
        reward = "$1500"
    break;
    default:
        reward = "no reward"
    break;
}
console.log(output + reward);