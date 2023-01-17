// 1. Write a JavaScript program to display the current day and time in the following format.  Go to the editor
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38


//console.log(`Today is : ${"Tuesday"}`);

let denovi = ["nedela", "ponedelnik", "vtornik", "sreda", "cetvrtok", "petok", "sabota"];
let indexZaDen = new Date().getDay();
console.log(`Denes e : ${denovi[indexZaDen]}`);

let datum = new Date();
let saat = datum.getHours();
let minuta = datum.getMinutes();
let sekundi = datum.getSeconds();
let saatNov;
let amPm;
if(saat > 12){
    saatNov = saat - 12;
    amPm = "PM";
}else {
    saatNov = saat;
    amPm = "AM";
}

console.log(`momentalnoto vreme e : ${saatNov} ${amPm} : ${minuta} : ${sekundi}`);