var playAgain;
var wins = 0;
var losses = 0;

var randomLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userPicks = [];

var compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];
var guessesLeft = 9;

document.onkeydown = function (event) {
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	if (userInput == compPick) {
		userPicks.push(userInput);
		wins++;
		playAgain = confirm("You Win! Do you want to play again?");
		if (playAgain) {
			guessesLeft = 9;
			compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];
			userPicks = [];
		}
		//break;
	}
	else if (userInput !== compPick) {
		userPicks.push(userInput);
		guessesLeft--;

		if (guessesLeft == 0) {
			losses++;
			playAgain = confirm("You Lose! Do you want to play again?");
			if (playAgain) {
				guessesLeft = 9;
				compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];
				userPicks = [];
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


