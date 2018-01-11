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

/////////////////////////////////////////
//Traverse the following array of objects creating a variable called oldest 
//which contains the name of the oldest person

var people = [
  {
    'name': 'Frank',
    'age': 43
  },
  {
    'name': 'Mary',
    'age': 37
  }
];


var oldestAge = 0;
for (var i =0; i < people.length; i++){
    var obj = people[i];
    
    for (var key in obj){
        var age = obj[key];
        if (age > oldestAge){
            var oldest = obj["name"];
            oldestAge = age;
            console.log(oldest);
        }
    }
} 