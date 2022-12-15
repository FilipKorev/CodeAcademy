let myTable =[];
let numRow = 8;
let numColumns = 9;
let counter = 0;

for (let i = 0; i <= numRow; i++) {
    let tempTable = [];
    for (let j = 0; j <= numColumns; j++){
        tempTable.push(counter);
        counter++;
    }
    myTable.push(tempTable);
}
console.log(myTable);
