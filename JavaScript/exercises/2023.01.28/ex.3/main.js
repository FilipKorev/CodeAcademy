class car {
    constructor(x, y, z) {
        this.name = x;
        this.year = y;
        this.manufacturer = z;
    }
}

let carA = new car("A3",2002,"Audi");
console.log(carA.name, carA.year, carA.manufacturer);
let carB = new car("Golf", 2005, "Wolksvagen");
console.log(`you'r car is ${carB.name} from ${carB.year} and was built by ${carB.manufacturer}`);
