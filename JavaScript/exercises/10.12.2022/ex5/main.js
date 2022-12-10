let a = prompt("pick a number");
let b = prompt("pick another number");
let c = prompt("pick another number");
if(a > b && a > c){
    console.log(a + " is bigger than " + b + " and " + c);
}else if(b > a && b > c){
    console.log(b + " is bigger than " + a + " and " + c);
}else{
    console.log(c + " is bigger than " + a + " and " + b);
}