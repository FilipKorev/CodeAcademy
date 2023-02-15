class rectangle {
    constructor(a,b){
        this.a = a;
        this.b = b;
    }

    area(){
        return this.a * this.b;
    }
}

let rectangleA = new rectangle(2,3);
let rectangleB = new rectangle(5,10);

let areaOfA = rectangleA.area();
console.log(`The area of the rectangleA = ${areaOfA}`);

//gore e so metod a dole so funkcija.

function rectangleArea(x) {
    return x.a * x.b;
}
let areaOfB = rectangleArea(rectangleB);
console.log("The area of the rectangleB = " + areaOfB);
