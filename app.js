const rock = 1;
const paper = 2;
const scissor = 3;

let userScore = 0;
let cpuScore = 0;

const btnRock = document.getElementById("rock");
const btnPaper = document.getElementById("paper");
const btnScissor = document.getElementById("scissor");
const result = document.getElementById("result");
const userScoreDisplay = document.getElementById("user-score");
const cpuScoreDisplay = document.getElementById("cpu-score");
const cpuChoiceDisplay = document.getElementById("cpu-choice");

btnRock.addEventListener("click", () => playGame(rock, "Piedra"));
btnPaper.addEventListener("click", () => playGame(paper, "Papel"));
btnScissor.addEventListener("click", () => playGame(scissor, "Tijera"));

function playGame(userChoice, userChoiceText) {
    const cpuChoice = getRandomChoice();
    cpuChoiceDisplay.textContent = getChoiceText(cpuChoice);
    const resultText = determineWinner(userChoice, cpuChoice);

    if (resultText.includes("Usted gana")) {
        userScore++;
    } else if (resultText.includes("Maquina gana")) {
        cpuScore++;
    }

    result.textContent = resultText;
    updateScores();
    checkScores();
}

function getRandomChoice() {
    const choices = [rock, paper, scissor];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function getChoiceText(choice) {
    switch (choice) {
        case rock: return "Piedra";
        case paper: return "Papel";
        case scissor: return "Tijera";
    }
}

function determineWinner(userChoice, cpuChoice) {
    if (userChoice === cpuChoice) {
        return "Empate";
    } else if (
        (userChoice === rock && cpuChoice === scissor) ||
        (userChoice === paper && cpuChoice === rock) ||
        (userChoice === scissor && cpuChoice === paper)
    ) {
        return "Usted gana";
    } else {
        return "Maquina gana";
    }
}

function updateScores() {
    userScoreDisplay.textContent = userScore;
    cpuScoreDisplay.textContent = cpuScore;
}

function checkScores() {
    if (userScore === 3 || cpuScore === 3) {
        const winner = userScore === 3 ? "Usted" : "La Maquina";
        alert(`${winner} ha ganado el juego!`);
        resetGame();
    }
}

function resetGame() {
    userScore = 0;
    cpuScore = 0;
    cpuChoiceDisplay.textContent = "CPU";
    result.textContent = "";
    updateScores();
}