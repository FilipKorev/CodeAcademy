class employee{
    constructor(fName,lName,years){
        this.firstName = fName;
        this.lastName = lName;
        this.yearsWorked = years;
    }

}

let person1 = new employee("filip", "korev", 5);
let person2 = new employee("mitko", "mitrov", 4);
let person3 = new employee("kristijan", "kacurovski", 3);

let employees = [person1,person2,person3];

employee.prototype.info1 = function () {
    console.log(`${this.firstName} ${this.lastName} has worked ${this.yearsWorked} years in this company`);
}

console.log(`${employees[1].firstName} ${employees[1].lastName} has worked ${employees[1].yearsWorked} years in this company`);