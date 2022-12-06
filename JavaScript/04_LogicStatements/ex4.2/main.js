let age = prompt("What is your age?");
ageNum = Number(age);
let messege;
if(ageNum >= 21) {
    messege = "you can enter the venue and purchase alchohol"
} else if(ageNum >= 19) {
    messege = "you can enter the venue but you can not buy alchohol"
} else {
    messege = "you can not enter!"
}

console.log(messege);