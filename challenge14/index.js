function highestSum (ccArray) {
	var sumArray = [];
	for (var i = 0; i < ccArray.length; i++){
		var noDash =ccArray[i].replace(/[\-]/g,"");
		var numArray = noDash.split("");

		var sum = 0;
		for (var j = 0; j < numArray.length; j++){
			sum += parseInt(numArray[j]);
		}

		sumArray.push(sum);
	}	

	var max = Math.max(...sumArray); 
	var maxIndex = sumArray.indexOf(max); 

	var indices = [];
	while(maxIndex != -1){
		  indices.push(maxIndex);
		maxIndex = sumArray.indexOf(max, (maxIndex +1))
	}

	var maxCCIndex = indices.pop();
	return ccArray[maxCCIndex];
}