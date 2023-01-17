function fizzBuzz(n){
    if(n%3==0 && n%5==0){
        console.log("fizzBuzz");
    }else if(n%3==0){
        console.log("Buzz");
    }else if(n%5==0){
        console.log("Fizz");
    }
}

// let x = Number(prompt("number"));
// fizzBuzz(x);

//1
function helloWorld(){
    console.log("Hello world");
}
//2
function helloUser(){
    let n = prompt("what's your name?")
    console.log(`Hello ${n}`);
}
//helloUser();

//3
function square(n) {
    return n*n;
}
//console.log(square(5));

//4
function CtoF(n) {
    return (n * 1.8) + 32
}
//console.log(CtoF(20));

//5
function rectangleArea(lenght,width) {
    return lenght * width
}
//console.log(rectangleArea(5,7));

//6
function circleAreaParametar(r) {
    let Pi = 3.14159;
    let area = 2*r * Pi;
    let par = Pi * square(r);
    return `the area of the sircle is ${area} and the parametar is ${par}`
}
//console.log(circleAreaParametar(5));

//7
function simpleInterest(x,y,z){
    let lenght = z;
    let interest = y / 100; // in % (10% = 0.1 in our calculations)
    let sumOfMoney = x; //$
    return sumOfMoney * interest * lenght
}   
//console.log(simpleInterest(10000,10,5));

//8
function randomNum(){
    return Math.floor(Math.random() * 100)
}
//console.log(randomNum());

//9
let arr = [13,23,12,45,22,48,66,100]
function printEven(n) {
    for (let i = 0; i < n.length; i++) {
        if(n[i] % 2 == 0 ){
            console.log(n[i]);
        }
    }
}
//printEven(arr)

//10
function getSum(n)
{
    let sum = 0;
    while (n != 0) {
        sum = sum + n % 10;
        n = parseInt(n / 10);
    }
    return sum;
}
//console.log(getSum(555));

//11
let countryName = ["Australia","Germany", "United States of America"]
function longestName(arr) {
    let lgth = 0;
    let longest;

for (let i = 0; i < arr.length; i++) {
  if (arr[i].length > lgth) {
    let lgth = arr[i].length;
    longest = arr[i];
  }
}
console.log(longest);
}
//longestName(countryName);

//12
 function lessby20_others(x, y, z) {
   return (
     (x >= 20 && (x < y || x < z)) ||
     (y >= 20 && (y < x || y < z)) ||
     (z >= 20 && (z < y || z < x))
   );
}
//  console.log(lessby20_others(23, 45, 10));
//  console.log(lessby20_others(23, 23, 10));
//  console.log(lessby20_others(21, 66, 75));
