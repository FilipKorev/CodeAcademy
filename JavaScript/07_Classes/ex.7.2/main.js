class Person {
    constructor (firstName, lastName){
    this.firstName = firstName
    this.lastName = lastName
    }

    fullName(){
        return this.firstName + " " + this.lastName;
    }
}

let f = new Person("filip","korev");
let m = new Person("mitko","mitrov");
let p = new Person("petar","mladenovski");

console.log(f.fullName());
console.log(m.fullName());
console.log(p.fullName());