//  4.12 4.13  -  got the fuctionality working, but need to consolidate using this weeks activities
//  4.14 - app.js - after 5 hours, have re-written using weeks learnings - overall, took me tons trial and error, research to resolve

// create a randomTrivia variable - store from old code (question: , choices: , answer: )
var randomTrivia = [
	{
	question: "Which nail grows fastest?",
	choices: ["pinky","middle","index","thumb"],
	answer: 1
	}
	// ,{
	// question: "What temperature does water boil at (c)?",
	// choices: ["100","200","125","180"],
	// answer: 0
	// },{
	// question: "When did the First World War start?",
	// choices: ["1900","1908","1914","1920"],
	// answer: 2
	// },{
	// question: "Where is the smallest bone in the body?",
	// choices: ["foot","leg","ear","hand"],
	// answer: 2
	// },{
	// question: "Which is the only mammal that can’t jump? ",
	// choices: ["dolphin","ant eater","giraffe","elephant"],
	// answer: 3
	// },{
	// question: "How many dots are there on two dice?",
	// choices: ["38","39","42","44"],
	// answer: 2
	// }
];

var pictureArray = ['question-1','question-2','question-3','question-4','question-5','question-6'];

var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered; 
var seconds; 
var time; 
var answered; 
var userSelect;

// need an array to store the different messages 
var messages = {
	correct: "That is the Correct Answer",
	incorrect: "I am sorry, That is a Wrong Answer",
	endTime: "You Ran Out of Time!",
	finished: "That is the end of Random Knowledge Trivia, here are your Results."
};

//need a Button function to set up a new game
$('#startButton').on('click', function(){
	$(this).hide();
	newGame();
});

//need a Button function to reset and start a new game
$('#resetButton').on('click', function(){
	$(this).hide();
	newGame();
});


//need function to set countdown 
function countdown(){
	//set variable seconds to 20
	seconds = 20;
	//set html timeLeft to report seconds countdown
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	//report answered as true
	answered = true;
	//sets timer for 1 second countdown
	time = setInterval(showCountdown, 1000);
}

// need function to execute countdown
function showCountdown(){
	//reduce seconds by 1
	seconds--;
	//set html timeLeft to report seconds countdown
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	//if timer runs to 0
	if(seconds < 1){
		//clear time
		clearInterval(time);
		//set answered to false
		answered = false;
		//go to answer page and function should report unasnwered++
		answerPage();
	}
}



// need a function to start a newGame
function newGame(){

	// empty the div group for the scorecard
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();

	//set game counters to 0
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;

	//ask the first question using function
	newQuestion();
}

//function to ask the question
function newQuestion(){
	// empty the div group for answered question 
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#picture').empty();

	//set answered to true
	answered = true;
	
	//set html currentQuestion to current question # of total questions
	$('#currentQuestion').html('Question #' + (currentQuestion + 1) + '/' + randomTrivia.length);
	//set html question to current randomTrivia.#.question 
	$('.question').html('<h2>' + randomTrivia[currentQuestion].question + '</h2>');
	
	// for loop for all possible choices - we will be only < 4
	for(var i = 0; i < 4; i++){
		//create choices variables
		var choices = $('<div>');
		//add .text for each possible answer choice [i]
		choices.text(randomTrivia[currentQuestion].choices[i]);
		//add attr index i
		choices.attr({'data-index': i });
		//add class to choices
		choices.addClass('thisChoice');
		//append to html choices
		$('.choices').append(choices);
	}
	//start countdown timer
	countdown();

	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		// need to store what userSelect ed from options
		userSelect = $(this).data('index');
		//clear the interval 'time'
		clearInterval(time);
		//run the answered question function
		answerPage();
	});
	
}



// function to report the function page (divs)
function answerPage(){
	//clear id currentQuestion
	$('#currentQuestion').empty();

	//clear class thisChoice  ---    choices as addClass .thisChoice  -  this will clear the choice list when show answer
	$('.thisChoice').empty(); 
	
	//clear class question
	$('.question').empty();

	// variable to report correct text answer from the randomTrivia array
							//random trivia var [ current question counter ]. choices var [ from random trivia var ].answer
	var correctAnswerText = randomTrivia[currentQuestion].choices[randomTrivia[currentQuestion].answer];
		console.log(correctAnswerText);

	// variable to report the correct answer from the randomTrivia array
	var rightAnswerIndex = randomTrivia[currentQuestion].answer;
		console.log(rightAnswerIndex);

	// need to report html the picture (gif = jpg)  *had to check pictures and make all .jpg
	$('#picture').html('<img src = "assets/images/'+ pictureArray[currentQuestion] +'.jpg" width = "400px">');

	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + correctAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + correctAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (randomTrivia.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 2000);
	}	
}


//function to report the end of game scoreboard
function scoreboard(){
	//empty the div group for current question
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#picture').empty();

	//empty the div group for the game score
	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);

	// resetButton div - show the button - addclass (bootstrap) - button text 
	$('#resetButton').show();
	$('#resetButton').addClass('reset');
	$('#resetButton').html('Have Another Go ?');
}