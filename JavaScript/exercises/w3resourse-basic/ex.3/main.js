// Write a JavaScript program to get the current date.  Go to the editor
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let day = date.getDate();

console.log(`${day} / ${month + 1} / ${year}`);