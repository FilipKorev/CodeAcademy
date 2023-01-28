let fun1 = () => console.log("one");
let fun2 = () => console.log("two");
function fun3() {
    console.log("three");
}
setTimeout(fun1,5000);
setTimeout(fun2,6000);
function fun4() {
    console.log("four");
}
fun4();
fun3();
setTimeout(fun1,7000);