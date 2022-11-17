// console.log("Filip Korev");
/*
multi
line 
comment
*/
/*
let username = prompt("insert your name!");
alert("vaseto ime " + username + " e procesirano!")
console.log(username);
*/


let randomNum = Math.random() * 3;
console.log("my random number " + randomNum);
let roundNum = Math.floor(randomNum) +1;
console.log("my round number " + roundNum);
let num = prompt("Guess a number from 1 to 3")

if (roundNum == num) {
    alert("you guessed right!");
} else {
    alert("You guessed wrong!");
}
