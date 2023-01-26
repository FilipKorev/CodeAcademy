let start = 10;
function countdown(countdownVal) {
    console.log(countdownVal);
    if (countdownVal < 1) {
        return;
    }else{
        countdown(--countdownVal);
    }
}

countdown(start);