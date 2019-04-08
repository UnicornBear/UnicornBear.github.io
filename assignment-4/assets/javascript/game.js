$(document).ready(function() {

    // tmnt image array
    tmnt =  ['assets/images/Donatelo.png',
             'assets/images/Leonardo.png',
             'assets/images/Michelangelo.png',
             'assets/images/Rafael.png'];

    //variable for counters
	var counter = 0;
	var wins = 0;
	var losses = 0;

	newTmnt();
	newGame();


// 4.6 update using bubbleSoft class example

    // function for random number for tmnt
	function newTmnt () {
		var numbers = []
			while(numbers.length < 4){ 
              var randomnumber = Math.ceil(Math.random()*12)
			  var found = false;
			  for (var i=0; i< numbers.length; i++){
				if (numbers[i] == randomnumber){
					found = true; break
				}
			  }
			  if(!found)numbers[numbers.length]=randomnumber;
            }
        // log numbers for tmnt
		console.log(numbers);		

        // loop through tmnt array (img, data number,order,class,report append tmnt)
		for (i = 0; i < numbers.length; i++) {
            var tmntImage = $('<img>');  
			tmntImage.attr('data-num', numbers[i]);
			tmntImage.attr('src', tmnt[i]);
			tmntImage.addClass('tmntImage')
			$('#tmnt').append(tmntImage);
		}
	}
    // create the game function
	function newGame() {
        // set counter to zero
        counter = 0;
        
        // report your score as counter
        $('#yourScore').text(counter);
        
        // need function for random generator
		function randomIntFromInterval(min,max){
		   	return Math.floor(Math.random()*(max-min+1)+min);
            }       
            
        // create variable for random number of pizzas
        var numberToGuess = randomIntFromInterval(19,120);
        
        // report random number of pizza 
        $('.value').text(numberToGuess);

        
        // need function when click tmnt character 
		$('.tmntImage').on('click', function(){ 
            // need to add function addition to counter
		    counter = counter + parseInt($(this).data('num'));
            // report score of total from click
		    $('#yourScore').text(counter);

            // report status you WON count =< target
            // wins increase by 1
            // report the wins
            if (counter == numberToGuess){
		    $('#status').text('You won, you ate the delivery order!!!!').show('fast').delay(2000).hide('fast');
		    wins ++;
		    $('#win').text(wins);
    
            // log wins total
            console.log("Wins:" + wins)
    
            // empty #crystals, run to get newPizzas, start a newGame
            $('#tmnt').empty();
            newTmnt();
            newGame();
            }   

            // ELSE report status count > target
            // losses increase by 1
            // report the losses
            else if ( counter > numberToGuess){
	        $('#status').text('You lost, you had to eat frozen pizza!').show('fast').delay(2000).hide('fast');
	        losses ++;
            $('#loss').text(losses);
                
            // log losses total
            console.log("Losses" + losses)
                
            // empty #crystals, run to get new counts, restart game
		    $('#tmnt').empty();
		    newTmnt();
		    newGame();
		    }
		});
	}
});