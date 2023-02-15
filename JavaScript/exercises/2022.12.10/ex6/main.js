let a = prompt("a= ?");
let b = prompt("b= ?");
let c = prompt("c= ?");
if(a === b && a === c){
    alert("Equilateral triangle")
}else if(a === b || b === c || a === c){
    alert("Isosceles triangle")
}else {
    alert("Scalene triangle")
}