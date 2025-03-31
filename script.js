function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	return (choices[Math.floor(Math.random() * 3)]);
}

function getHumanChoice() {
	let humanChoice;
	
	do {
		humanChoice = prompt("Enter: rock, paper or scissors");
		humanChoice = humanChoice.toLowerCase();
	}
	while (humanChoice !== "rock" && humanChoice !== "paper" && humanChoice !== "scissors")	
	return (humanChoice);
}

function	playGame() {
	let	humanScore = 0;
	let	computerScore = 0;

	function playRound(humanChoice, computerChoice) {
		if (humanChoice === computerChoice)
		{
			console.log("It's a draw!");
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
			console.log(`You win! ${humanChoice} beats ${computerChoice}`);
		}
		else
		{
			computerScore++;
			console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
		}
	}

	while (humanScore < 3 && computerScore < 3)
	{
		playRound(getHumanChoice(), getComputerChoice());
		console.log(`human score: ${humanScore}; computer score: ${computerScore}`);
	}
	if (humanScore >= 3)
		console.log("You win!");
	else
		console.log("You lose!");
}

playGame();
