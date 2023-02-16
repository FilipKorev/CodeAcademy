function test(val) {
    try {
        if (isNaN(val)) {
            throw "Not a number";
        } else {
            console.log("number!");
        }
    } catch (error) {
        console.log(error);
    }finally {
        console.log("done " + val);
    }
}

test("a");
test(100)