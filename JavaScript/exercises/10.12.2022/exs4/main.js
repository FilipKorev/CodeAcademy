let num = prompt("number?");
switch(true){
    case (num <= 5):
        console.log("number is low");
        break;
    case (num <= 100):
        console.log("number is medium");
        break;
    case (num > 100):
        console.log("number is high");
        break;
}