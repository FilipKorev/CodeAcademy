let variable = function (x) {
    console.log(x);
}
variable("wow");

function variable2(x) {
    console.log(x);
}

variable2(5)

//povikuvanje na funkcija vo funkcija
function doFlexibleStuff(executeStaff) {
    executeStaff(15);
    console.log("insude doFlexibleStuff");
}
doFlexibleStuff(variable);

let logName = function () {
    console.log("My name is Filip");
}


setTimeout(logName, 10000)