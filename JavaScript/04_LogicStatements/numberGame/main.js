let userNum =Number( prompt("write a number wetween 0-10"));
let dynNum = Math.floor(Math.random() * 11);
if(userNum > dynNum) {  
    console.log("your number is greater than " + dynNum);
} else if(userNum === dynNum){
    console.log("your number is equal to " + dynNum);
} else if(userNum < dynNum){
    console.log("you number is less than " + dynNum);
}else {
    console.log("NaN");
}

let messege = userNum > dynNum ?
"your number is greater than " : userNum === dynNum ?
"your number is equal to " : userNum < dynNum ?
"you number is less than " : "NaN" ;
console.log(messege + dynNum);