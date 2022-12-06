let randomNum = Math.floor(Math.random() * 6);
console.log(randomNum);
let prompt14 = prompt("ask a question");
let answer;
switch (randomNum){
    case 0:
        answer = "answer0"
    break;
    case 1:
       answer = "answer1"
    break;
    case 2:
        answer = "answer2"
    break;
    case 3:
        answer = "answer3"
    break;
    case 4:
        answer = "answer4"
    break;
    case 5:
        answer = "answer5"
    break;
}

console.log(prompt14 + " " + answer);

