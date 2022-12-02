let inventoryOfStoreItems = [];

let item1 = {
    name:"maus" ,
    model:"m1" ,
    cost:"$2.5" ,
    quantity: 50
};
let item2 = {
    name:"keyboard" ,
    model:"k1" ,
    cost: "$10",
    quantity: 100
};
let item3 = {
    name:"cable" ,
    model:"c1" ,
    cost:"$1.5" ,
    quantity: 200
};
 inventoryOfStoreItems.push(item1, item2, item3);
 console.log(inventoryOfStoreItems);

console.log( inventoryOfStoreItems[2].quantity);

inventoryOfStoreItems[0].cost = "$5";
console.log(inventoryOfStoreItems[0].cost);
