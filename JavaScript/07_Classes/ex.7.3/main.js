class animal{
    constructor(species,sound){
        this.species = species;
        this.sound = sound;
    }

    print(){
        console.log(`this ${this.species} produces ${this.sound} sounds`);
    }
}

let a = new animal("cat","meow");
let b = new animal("dog","wof");

animal.prototype.sayHi = function () {
    console.log(`${this.species} says hi`);
}


console.log(a);