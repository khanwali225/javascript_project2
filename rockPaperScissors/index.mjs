import randomInteger from "random-int";
import promptSync from "prompt-sync";

// The available choices
let choices = ["rock", "paper", "scissors"];

// These will be the message shown to user
let userPrompt = "0 for rock, 1 for paper, or 2 scissors";
let outcome = "ready to play.";

// computer choose randomly
let computerChoice = randomInteger(0, 2);
computerChoice = choices[computerChoice];

//prompt the user for an input
const prompt = promptSync();
let userInput = prompt(userPrompt);
let userChoice = choices[userInput];

if (computerChoice === userChoice) {
    outcome = "Draw";
} else if (computerChoice === "rock" && userChoice === "paper") {
    outcome = "player win";
} else if (computerChoice === "rock" && userChoice === "scissors") {
    outcome = "computer win";
} else if (computerChoice === "paper" && userChoice === "rock") {
    outcome = "computer win";
} else if (computerChoice === "paper" && userChoice === "scissors") {
    outcome = "player win";
} else if (computerChoice === "scissors" && userChoice === "rock") {
    outcome = "player win";
} else if (computerChoice === "scissors" && userChoice === "paper") {
    outcome = "computer win";
} else {
    outcome = "Invalid entry. Please try again";
}

console.log("computer chooses " + computerChoice);
console.log("player chooses " + userChoice);
console.log(outcome);