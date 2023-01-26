function factorial(x) {
    console.log("started function:",x);

    if (x === 0) {
        return 1;
    }
    
    return x* factorial(--x);   

}

console.log(factorial(5));