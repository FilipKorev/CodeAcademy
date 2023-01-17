/*
1. Write a JavaScript function that reverse a number. Go to the editor
Example x = 32243;
Expected Output : 34223
*/



function ReverseNumber (x) {
    let strOfX = x.toString();
    let arrayOfX = strOfX.split("");    
    let reverseArrOfx = arrayOfX.reverse();
    let reverseStringOfx = reverseArrOfx.join("");
    return parseInt(reverseStringOfx);
}

function ReverseNumber2(x) {
    let y = x.toString().split("").reverse().join("");
    return parseInt(y);
} 

console.log(ReverseNumber(32243));
console.log(ReverseNumber2(32243));
