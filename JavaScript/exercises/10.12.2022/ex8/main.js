let a =Number( prompt("a= ?"));
let b =Number( prompt("b= ?"));
let operation = prompt("operation?");
if(operation === "+"){
    console.log(a + b);
}else if(operation === "-"){
    console.log(a - b);
}else if(operation === "*"){
    console.log(a * b);
}else if(operation === "/"){
    console.log(a / b);
}else {
    console.log("Invalid operation");
}