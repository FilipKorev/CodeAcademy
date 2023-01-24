let arr = [];

for (let i = 0; i < 10; i++) {
    let a = i*5;
    let b = i*i;
    let c = add2Params(a,b);
    arr.push(c);
}

function add2Params(x,y) {
    return x + y;
}

console.log(arr);