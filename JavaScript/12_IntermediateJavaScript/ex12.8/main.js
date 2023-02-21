let a = {
    "name": "Learn JavaScript",
    "status": false
}
let b = {
    "name": "Learn css",
    "status": true
}
let c = {
    "name": "Learn html",
    "status": true
}
let arr = [a, b, c];

function loop(array) {
    for (let i = 0; i < array.length; i++) {
        console.log(array[i].name);       
        console.log(array[i].status);       
    }
}
loop(arr);
console.log(JSON.stringify(c));