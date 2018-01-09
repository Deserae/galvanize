function addKey(obj,key,value) {

	var obj[key] = value;
	return obj;
}

function deleteKey(obj,key) {
   delete(obj[key]);
   return obj;
}

// for the last one, add the parameters and build the inside of the function
// like you did for the previous one. Don't forget to add the parameters between the parentheses !

function createOrIncrementValue(obj, key, increment){
	if (obj[key]){
		obj[key] += increment;
		return obj;
	} else {
		obj[key] = increment;
		return obj;
	}	
}