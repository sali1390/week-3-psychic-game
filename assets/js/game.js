window.onload = function () {
var playAgain;

var wins = 0;
var losses = 0;

var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userPicks = [];

var compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];
var guessesLeft = 9;

function resetGame() {
	guessesLeft = 9;
	compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];
	userPicks = [];
}
document.onkeydown = function (event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	if (userInput == compPick) {
		userPicks.push(userInput);
		wins++;
		document.getElementById("wins").innerHTML = wins;
		playAgain = confirm("You Win! Do you want to play again?");
		if (playAgain ==true) {
			resetGame();
			document.getElementById("guessesLeft").innerHTML = guessesLeft;

			// document.getElementById("wins").innerHTML = wins++;
			// document.getElementById("losses").innerHTML = losses;
			// document.getElementById("guessesLeft").innerHTML = guessesLeft;
			// document.getElementById("letters").innerHTML = userPicks;
		}
		console.log("Comp: " + compPick);
		console.log("User: " + userInput);
		console.log("Wins: " + wins);
		console.log("Losses: " + losses);
		console.log("Guesses Left: " + guessesLeft);
		console.log("User Array: " + userPicks);
		console.log("----------");
	}
	else if (userInput !== compPick) {
		userPicks.push(userInput);
		guessesLeft--;
		document.getElementById("guessesLeft").innerHTML = guessesLeft;
		userPicks;
		document.getElementById("letters").innerHTML = userPicks;

		if (guessesLeft == 0) {
			losses++;
			document.getElementById("losses").innerHTML = losses;
			playAgain = confirm("You Lose! Do you want to play again?");
			if (playAgain) {
				resetGame();
			}
		}
		console.log("Comp: " + compPick);
		console.log("User: " + userInput);
		console.log("Wins: " + wins);
		console.log("Losses: " + losses);
		console.log("Guesses Left: " + guessesLeft);
		console.log("User Array: " + userPicks);
		console.log("----------");
	}

};
}


