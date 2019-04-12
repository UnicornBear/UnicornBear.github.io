
// create a variable for my 6 questions
var questions = [
{question: "Which nail grows fastest?"
 answers: ["pinky","middle","index","thumb"];
 answer: 1
 },{
 question: "What temperature does water boil at (c)?"
 answers: ["100","200","125","180"];
 answer: 0
 },{
 question: "When did the First World War start?"
 answers: ["1900","1908","1914","1920"];
 answer: 2
 },{
 question: "Where is the smallest bone in the body?"
 answers: ["foot","leg","ear","hand"];
 answer: 2
 },{
 question: "Which is the only mammal that can’t jump? "
 answers: ["dolphin","ant eater","giraffe","elephant"];
 answer: 3
 },{
 question: "How many dots are there on two dice?"
 answers: ["38","39","42","44"];
 answer: 2
 };
 
 //create picture array for each questions answer/picture
 var pictureArray = ['question-1','question-2','question-3','question-4','question-5','question-6'];
 
 var currentQuestions;
 var messageFinal;
 var correctAnswers;
 var incorrectAnswers;
 var unanswered;
 
 // need to push start button to for game to begin
 $('#startButton').on('click',function(){
	 //hide button and start a newGame
	 $(this).hide();
	 newGame();
 }
 
 // need to allow game restart
 $('#restartButton').on('click',function(){
	//hide restart button and start newGame
	 $(this).hide();
	 newGame();
}

//need to create a newGame function to set up the html and clear counters
function newGame(){
	// need to clear out all messages (may be game restart)
	$('#messageFinal').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	//
	currentQuestions = 0,
	correctAnswers = 0,	
	incorrectAnswers = 0,	
	unanswered = 0,	
}

//need to create a newQuestion function to 
function newQuestion(){
	// need to clear out all question id div
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();	
		//sets up new questions & answerList
		$('#currentQuestion').html.("Question #" + (currentQuestions+1) + "/" + questions.length);
		&('.question').html("<h2>" + questions[currentQuestions].question + "</h2>");
		
		//clicking an answer will pause the time and setup answerPage
		
	
}
	
	
	
	
	