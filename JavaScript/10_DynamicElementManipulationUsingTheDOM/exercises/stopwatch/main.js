let seconds = 00;
let tens = 00;
let tensElement = document.getElementById("tens");
let secondsElement = document.getElementById("seconds");
let buttonStart = document.getElementById("button-start");
let buttonStop = document.getElementById("button-stop");
let buttonReset = document.getElementById("button-reset");
let interval;

function startTimer() {
    tens++;
    if (tens <= 9) {
        tensElement.innerText = "0" + tens;
    }
    if (tens > 9) {
        tensElement.innerText = tens;
    }
    if (tens > 99) {
        seconds++;
        secondsElement.innerText = "0" + seconds;
        tens = 0;
        tensElement.innerText = "0" + 0;
    }
    if (seconds > 9) {
        secondsElement.innerText = seconds;
    }
}

function start() {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
}

function stop() {
    clearInterval(interval);
}

function reset() {
    clearInterval(interval);
    tens = "00";
    seconds = "00";
    tensElement.innerText = tens;
    secondsElement.innerText = seconds;
}