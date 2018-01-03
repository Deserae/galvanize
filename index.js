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
    	//console.log('in the OUTER loop: ' + i);
    	song += `On the ${i}${endings[(i-1)]} ${dayOfXmas} `;
    	
    	//loop again to add endings to string
    	for (var j = i; j > 0; j--){
    		//console.log("in the INNER loop" + j);
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

//console.log("xxxxxxxxxx" + daysOfChristmas(3));


module.exports= {
	daysOfChristmas
}

	//whole song version
    // var song = "";
    // //loop up to n
    // for(var i = 1; i <=n; i++){
    // 	console.log('in the OUTER loop: ' + i);
    // 	song += `On the ${i}${endings[(i-1)]} ${dayOfXmas} `;
    // 	//up to here works
    // 	//loop again to add endings to string

    // 	for (var j = i; j > 0; j--){
    // 		//(j = (n-1); j >= 0; j--)
    // 		//(j = 0; j < i; j++)
    // 		console.log("in the INNER loop" + j);
    // 		song += days[(j-1)];
    // 		song += '\n'; 

    // 		//figure out way to insert and before days[0]
    // 	}
    // }

//**************************************************

// ///only line of the day given
// function daysOfChristmas(n) {
//    //get rid of edge cases and 0 input 
//     if (n === 0 || n == undefined || n === null){
//         return "I got coal for Christmas";
//     }
    	
//     var	song = `On the ${n}${endings[(n-1)]} ${dayOfXmas} `;
//     console.log("before loop" + song);
//     	for (var j = n; j > 0; j--){
//     		console.log("in the INNER loop" + j);
//     		song += days[(j-1)];
//     		song += '\n'; 
//     	}  
// 	console.log("END RESULT" + song);
//     return  song;
// }