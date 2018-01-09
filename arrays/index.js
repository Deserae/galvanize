var dayOfXmas = "day of Christmas my true love gave to me,";
var endings = ["st", "nd", "rd", "th", "th"];
var days = ["a partridge in a pear tree", "two turtle doves and", "three french hens", "four calling birds", "five golden rings"];

///only line of the day given
function daysOfChristmas(n) {
   //get rid of edge cases and 0 input 
    if (n === 0 || n == undefined || n === null){
        return "I got coal for Christmas";
    }

  	var song = "";
    //loop up to n
    for(var i = 1; i <=n; i++){
    	song += `On the ${i}${endings[(i-1)]} ${dayOfXmas} `;
    	
    	//loop again to add endings to string
    	for (var j = i; j > 0; j--){
    		song += days[(j-1)];
    		if (j>1){
    			song += ' ';
    		}
    	}

	if(i < n){
		song += '\n';
	} 

    }
    return song;
}

module.exports= {
	daysOfChristmas
}

