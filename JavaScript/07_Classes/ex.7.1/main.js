class Person {
    constructor (firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    }
}

let f = new Person("filip","korev");
let m = new Person("mitko","mitrov");
let p = new Person("petar","mladenovski");
console.log(`hello ${f.lastName}`);

function new1(person) {
    console.log(`hello ${person.firstName}`);
}

new1(m);
new1(p);

class PersonMethods {
    constructor (firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    }

    greet() {
        console.log(`hi there!`);
    }

    compliment(name, object){
        return "that's a wonderfull " + object + ", " + name;
    }
}

let x = new PersonMethods("filip","korev");
let y = new PersonMethods("mitko","mitrov");
x.greet();
let xCompliment = x.compliment(y.firstName, "dress");
console.log(xCompliment);