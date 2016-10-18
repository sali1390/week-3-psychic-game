var wins = 0;
var losses = 0;
var randomLetter =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var userPicks = [];

var compPick = randomLetter[Math.floor(Math.random() * randomLetter.length)];

for (i = 0; i < 10;) {
	var guessesLeft = 9;
	document.onkeydown = function(event) {
		var userInput = String.fromCharCode(event.keyCode).toLowerCase();
		if (userInput == compPick) {
			userPicks.push(userInput);
			wins++;
			alert("You Win!");
			// break;
		}
		else if (userInput !== compPick) {
			guessesLeft--;
		}
		console.log(compPick);
		console.log(userInput);
		console.log(wins);
		console.log(losses);
		console.log(guessesLeft);
		console.log("----------");
	}

	if (guessesLeft == 0) {
		losses++;
		alert("You Lose");
	}
	i++;
}