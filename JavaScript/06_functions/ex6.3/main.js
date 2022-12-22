let a =Number( prompt("number 1"));
let b =Number( prompt("number 2"));
let c = prompt("+, -, * or /");
function simpleCalculator(par1, par2, par3) {
    // if (par3 === "-" ) {
    //     return par1 - par2;
    // }else {
    //     return par1 + par2;
    // }
    
    let res = 0;
    switch (par3) {
        case "-":
            res = par1 - par2;
            break;
        case "+":
            res = par1 + par2;
            break;
        case "*":
            res = par1 * par2;
            break;
        case "/":
            res = par1 / par2;
            break;
        default:
            res = par1 + par2;
            break;
    }
    return res;
}

console.log(simpleCalculator(a,b,c));

//funkcija 1 nacin
function sumOfTwoNumbers(n1, n2) {
    let res = n1 + n2;
    return res;
}
console.log(sumOfTwoNumbers(5,10));
//funkcija 2 nacin
let sumOfTwoNumbers2 = function(n1, n2){
    let res = n1 + n2;
    return res;
}
console.log(sumOfTwoNumbers2(5,10));

//arrow funkcija
let sumOfTwoNumbers3 = (n1, n2) => n1 + n2;
console.log(sumOfTwoNumbers3(5,10));