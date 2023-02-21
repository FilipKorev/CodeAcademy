const myWords = ["learn javascript","learn css","learn html"];
const game = {
    word: "",
    solution: "",
    pageElements: [],
    lettersLeft: 0
}
const gameArea = document.querySelector(".gameArea");
const score = document.querySelector(".score");
const puzzle = document.querySelector(".puzzle");
const letters = document.querySelector(".letters");
const button = document.querySelector("button");

button.addEventListener("click", startGame);

function startGame() {
    if (myWords.length > 0) {
        button.style.display = "none";
        game.pageElements = [];
        game.lettersLeft = 0;
        game.word = myWords.shift();
        game.solution = game.word.split();
        builder();
    }
}
function builder() {
    puzzle.innerHTML = "";
    letters.innerHTML = "";
    for (const letter of game.solution) {
        let element = createElements("p", puzzle, "-", "myclass")
    }
}

function createElements(tagName, parent, outputContent, classOfElements) {
    let myElement = document.createElement(tagName);
    myElement.ClassList.add(classOfElements);
    parent.append(myElement);
    myElement.textContent = outputContent;
}