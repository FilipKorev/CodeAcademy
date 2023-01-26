 function countToTen(num) {
    if (num === 10) {
        console.log(num);
        return 10;
    }else{
    console.log(num);
    countToTen(++num);
}}

console.log(countToTen(3));