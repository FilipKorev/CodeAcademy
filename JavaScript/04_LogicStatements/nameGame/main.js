let frend = ["filip", "mitko", "stefan", "david"];
let ask = prompt("enter a name ");
switch(ask){
    case frend[0]:
        console.log(frend[0] + " is my frend");
    break;
    case frend[1]:
        console.log(frend[1] + " is my frend");
    break;
    case frend[2]:
        console.log(frend[2] + " is my frend");
    break;
    case frend[3]:
        console.log(frend[3] + " is my frend");
    break;
    default:
        console.log(ask + "is not my frend");
}