let month = Number(prompt("what month is it? using numbers from 1-12"));
let year = prompt("is it leap year? true or false");
let leapY = "";
if(year  && month === 2){
    month = 2.1;
}else if (year === false && month === 2){
    month = 2.2;
}
switch(month){
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("This month has 31 days");
    break;
    case 4:
    case 6:
    case 9:
    case 11:
        console.log("This month has 30 days");
    break;
    case 2.1:
        console.log("This month has 29 days");
    break;
    case 2.2:
        console.log("This month has 28 days");
    break;
    default:
        console.log("Invalid Month");
    break;
}