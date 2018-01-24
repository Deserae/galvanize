//Write a function called addStars that takes a string word and number 
//of asterisks num and returns the string surrounded by that number of 
//asterisks on both sides. For instance, if word = cat and num = 3 
//the result would be ***cat***.

function addStars(word, num) {
	var starWord = "";
	//first stars
	for (var i = 0; i < num; i++ ){
		starWord = starWord.concat('*');
	}

	//concat word
	starWord = starWord.concat(word);

	//end stars
	for (var i = 0; i < num; i++ ){
		starWord = starWord.concat('*');
	}	

	return starWord;	
}
