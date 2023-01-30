// Write a JavaScript program to calculate multiplication and division of two numbers (input from user).

let a = Number(prompt("Number 1:"));
let c = prompt("* or /")
let b = Number(prompt("Number 2:"));

if (c === "*") {
    console.log(a * b);
} else if(c === "/"){
    console.log(a / b);
}else{
    console.log("please use * or /");
}