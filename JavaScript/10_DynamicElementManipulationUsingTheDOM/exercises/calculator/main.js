//input
let input = document.getElementById("input");
// operators
let plus = document.children[0].children[1].children[0].children[1].children[0].children[0];
let minus = document.children[0].children[1].children[0].children[1].children[0].children[1];
let times = document.children[0].children[1].children[0].children[1].children[0].children[2];
let divide = document.children[0].children[1].children[0].children[1].children[0].children[3];
// prvata idea
// plus.onclick = function(){
//     input.innerText += "+";
// }
// minus.onclick = function(){
//     input.innerText += "-";
// }
// times.onclick = function(){
//     input.innerText += "*";
// }
// divide.onclick = function(){
//     input.innerText += "/";
// }
//vtorata idea
let symbol;
plus.onclick = function(){
    symbol = "a";
    asd();
}
minus.onclick = function(){
    symbol = "b";
    asd();
}
times.onclick = function(){
    symbol = "c";
    asd();
}
divide.onclick = function(){
    symbol = "d"
    asd();
}
function asd() {
    if (input.innerText.includes("+") || input.innerText.includes("-") || 
        input.innerText.includes("*") || input.innerText.includes("/")) {
        return console.log("hey xD");
    }
    if (symbol === "a") {
        input.innerText += "+";
    } else if(symbol === "b"){
        input.innerText += "-";
    }else if(symbol === "c"){
        input.innerText += "*";
    }else if(symbol === "d"){
        input.innerText += "/";
    }
}
//_____________________________________________________________
//numbers
let nul = document.children[0].children[1].children[0].children[1].children[1].children[3].children[0];
let decimal = document.children[0].children[1].children[0].children[1].children[1].children[3].children[1];
let errase = document.children[0].children[1].children[0].children[1].children[1].children[3].children[2];
let one = document.children[0].children[1].children[0].children[1].children[1].children[2].children[0];
let two =document.children[0].children[1].children[0].children[1].children[1].children[2].children[1]; 
let three =document.children[0].children[1].children[0].children[1].children[1].children[2].children[2];
let four = document.children[0].children[1].children[0].children[1].children[1].children[1].children[0];
let five = document.children[0].children[1].children[0].children[1].children[1].children[1].children[1];
let six = document.children[0].children[1].children[0].children[1].children[1].children[1].children[2];
let seven = document.children[0].children[1].children[0].children[1].children[1].children[0].children[0];
let eight = document.children[0].children[1].children[0].children[1].children[1].children[0].children[1];
let nine = document.children[0].children[1].children[0].children[1].children[1].children[0].children[2]; 

nul.onclick = function () {
    input.innerText += 0;
}
decimal.onclick = function () {
    input.innerText += ".";
}
errase.onclick = function () {
    input.innerText = "";
}
one.onclick = function () {
    input.innerText += 1;
}
two.onclick = function () {
    input.innerText += 2;
}
three.onclick = function () {
    input.innerText += 3;
}
four.onclick = function () {
    input.innerText += 4;
}
five.onclick = function () {
    input.innerText += 5;
}
six.onclick = function () {
    input.innerText += 6;
}
seven.onclick = function () {
    input.innerText += 7;
}
eight.onclick = function () {
    input.innerText += 8;
}
nine.onclick = function () {
    input.innerText += 9;
}
//________________________________________
//equal
let equal = document.getElementById("result");
equal.onclick = function () {
    input.innerText = eval(input.innerText);
}