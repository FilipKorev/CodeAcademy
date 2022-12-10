let choices = ["rock", "paper", "scissors"];
let random = Math.floor(Math.random() * 3);
let player =Number( prompt("choose coresponding number: 0-rock, 1-paper, 2-scissors"));
console.log("random choice: " + choices[random]);
console.log("your choice: " + choices[player]);
// 0 > 2 > 1 > 0
if(player === random){
    console.log("Tie");
}else if((player === 0) && (random === 2)){
    console.log("player won!");
}else if((random === 0) && (player ===2)){
    console.log("player lost!");
}else if(player > random){
    console.log("player won!");
} else{
    console.log("player lost!");
}