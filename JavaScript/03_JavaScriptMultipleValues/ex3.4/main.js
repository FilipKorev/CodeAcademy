let myCar = {
    make: "AUDI",
    model: "A3",
    year: 2002,
    color: "Dark blue",
    diesel: true
};
console.log("my car color = " , myCar.color);

let prop = "color";
myCar[prop] = "red";
console.log("my new car color = " , myCar.color);

prop = "forSale";
myCar[prop] = false;


console.log(`make = ${myCar.make} and model = ${myCar.model}`);
console.log(`For sale: ${myCar.forSale ? "Yes" : "No"}`);
