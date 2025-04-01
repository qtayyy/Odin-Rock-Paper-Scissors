let	humanScore = 0;
let computerScore = 0;
const	body = document.querySelector("body");
const	res = document.createElement("div");
body.appendChild(res);

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return (choices[Math.floor(Math.random() * 3)]);
}

function playRound(humanChoice, computerChoice) {
	res.textContent = "";

	if (humanChoice === computerChoice)
	{
		res.textContent = "It's a draw!"
		return;
	}
	
	const winningCombinations = {
		"rock" : "scissors",
		"paper" : "rock",
		"scissors" : "paper"
	}
	if (winningCombinations[humanChoice] === computerChoice)
	{
		humanScore++;
		res.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
	}
	else
	{
		computerScore++;
		res.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
	}
	if (humanScore >= 5)
		res.textContent = "You win!";
	else if (computerScore >= 5)
		res.textContent = "You lose!";
}

const	buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
	button.addEventListener("click", () => {
		const	playerSelection = button.id;
		if (humanScore < 5 && computerScore < 5)
		{
			playRound(playerSelection, getComputerChoice());
			const scores = document.querySelector("#scores");
			scores.textContent = `human score: ${humanScore}; computer score: ${computerScore}`;
		}
	})
})
