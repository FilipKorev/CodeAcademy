class price{
    #item1Price = 5;
    #item2Price = 6;
    constructor(x,y){
        this.item1Bought = x;
        this.item2Bought = y;
    }

    totalCost(){
        return ((this.#item1Price * this.item1Bought)+(this.#item2Price * this.item2Bought));
    }

    get calculate(){
      return  this.totalCost();
    }
}

let a = new price(5,6);
let b = new price(1,8);
let c = new price(2,20);
console.log(a.totalCost());
console.log(b.totalCost());