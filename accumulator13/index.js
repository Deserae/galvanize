//Write a function called addStars that takes a string word and number 
//of asterisks num and returns the string surrounded by that number of 
//asterisks on both sides. For instance, if word = cat and num = 3 
//the result would be ***cat***.

function addStars(word, num) {
	var starWord = "";
	var loop = function (starWord){
    	for (var i = 0; i < num; i++ ){
    		starWord = starWord.concat('*');
    	}
    	return starWord;
	}
	
	//first stars
	starWord = loop(starWord);

	//concat word
	starWord = starWord.concat(word);


	//end stars
    starWord = loop(starWord);

	return starWord;	
}

/////////////////////////
//jacob's non working example of scope for me

var loop = function(word, num){
  var newthing;
		for (var i = 0; i < num; i++ ){
			newthing = word.concat('*');
		}
    return newthing;
	}

function addStars(word, num) {


	//first stars
	var something = loop("", num);

	var starWord = something.concat(word);

	//end stars
	var something2 = loop(starWord, num);

	console.log(something2);
	return something2;	
}

addStars("jacob", 3);