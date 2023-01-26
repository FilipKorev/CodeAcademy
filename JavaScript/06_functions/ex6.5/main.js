let x = "1000";
(function () {
    let x = 1001;
    console.log(x);
})();

let result = (function () {
    let x = 1002;
    return x;
})();

console.log("result = ",result);
console.log(x);

let asd = function (param) {
    let x = param 
    console.log(`${x}`);
}

asd(4);

