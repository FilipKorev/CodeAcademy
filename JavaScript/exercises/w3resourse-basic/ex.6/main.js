// Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.
//1 If the year is evenly divisible by 4, go to step 2. Otherwise, go to step 5.
//2 If the year is evenly divisible by 100, go to step 3. Otherwise, go to step 4.
//3 If the year is evenly divisible by 400, go to step 4. Otherwise, go to step 5.
//4 The year is a leap year (it has 366 days).
//5 The year is not a leap year (it has 365 days).


let a = prompt("year?");

if ((a/4) % 1 === 0) {
    if ((a/100) % 1 === 0) {
        if ((a/400) % 1 === 0) {
            console.log("The year is a leap year (it has 366 days).");
        }else{
            console.log("The year is not a leap year (it has 365 days).");
        }
    }else{
        console.log("The year is a leap year (it has 366 days).");
    }
} else {
    console.log("The year is not a leap year (it has 365 days).");
}