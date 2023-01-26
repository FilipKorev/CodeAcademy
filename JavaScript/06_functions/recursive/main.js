function logRecursive(nr){
    console.log("started function:",nr);
    if (nr > 0) {
        logRecursive(nr - 1);
    } else {
        console.log("Done with recursion");
    }
    console.log("Ended function", nr);
}

logRecursive(3)