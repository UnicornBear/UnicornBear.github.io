//Letter choices available

var computerChoices = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// setting for zero
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterUser = [];
var eachofLetters = null;
// setting for computer
var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];



function generateGuess() {
    computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
}

function countGuessesLeft() {
	document.querySelector("#guessesLeft").innerHTML = "Guesses Left: " + guessesLeft;
}

function farUserGuesses() {
	document.querySelector("#letter").innerHTML = "Your Guesses so far: " + letterUser.join(' ');
}

function restart() {
	guessesLeft = 9;
    letterUser = [];
}

// When the user presses a key, it will run the following function..
document.onkeyup = function(event) {
	guessesLeft--;

	var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

	letterUser.push(userGuess);
	countGuessesLeft();
	farUserGuesses();

	if (userGuess === computerGuess){
		wins++;
        document.querySelector("#wins").innerHTML = "Wins: " + wins;
        generateGuess();
    	restart();
	} 
	else if (guessesLeft === 0) {
		losses++;
		document.querySelector("#losses").innerHTML = "Loses: " + losses;
		restart();
    }
 };

  











