let marks = prompt("input marks");
if(marks < 100 && marks > 90){
    console.log("S grade");
}else if(marks < 90 && marks > 80){
    console.log("A grade");
}else if(marks < 80 && marks > 70){
    console.log("B grade");
}else if(marks < 70 && marks > 60){
    console.log("C grade");
}else if(marks < 60 && marks > 50){
    console.log("D grade");
}else if(marks < 50 && marks > 40){
    console.log("E grade");
}else if(marks < 40 && marks > 0){
    console.log("Failed");
}else {
    console.log("invalid marks");
}


