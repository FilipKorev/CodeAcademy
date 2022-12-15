// let gridArr = [];
// let cells = 64;
// let counter = 0;
// let rowArr ;

// for (let i = 0; i < cells + 1; i++) {
//     if (counter % 8 === 0) {
//         if (rowArr === undefined) {
            
//         }else {
//             gridArr.push(rowArr)
//         }
//         rowArr = undefined;
//     }
//     counter++;
//     let tempCounter = counter;
//     rowArr.push(tempCounter);

// }
const grid = [];
const cells = 64;
let counter = 0;
let row;
for (let x = 0; x < cells + 1; x++) {
   if (counter % 8 == 0) {
      if (row != undefined) {
         grid.push(row);
      }
      row = [];
   }
   row.push(++counter);
}
console.table(grid);