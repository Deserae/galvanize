function sum(arr) {
  var sum = 0;
  for (var i = 1; i < arr.length; i++) {
   sum += arr[i];
  }
  console.log(sum);
  return sum;
}

//2////////////////////////////////////////////////
function product(arr) {
    if (arr.length === 0){
        return 1;
    }
    var product = 1;
    for (var i=0; i< arr.length; i++){
    product = product * arr[i];
    }
    return product;
}

//3////////////////////////////////////////////                
function filterPassingGrades(arr) {
  
  function grades(arr) {
  return arr >= 70;
  }

  var filtered = arr.filter(grades);
  console.log(filtered);
  return filtered;

}

//4//////////////////////////////////////
function replace(arr, from, to) {
  var target = from;
  var newnum = to;
  var newArray = [];

  arr.forEach(function(item) {
      if (item === target){
        newArray.push(newnum);
      } else {
        newArray.push(item);
      }
  });

  return newArray;
}

/////////////////////////////////////////////////
function max(arr) {
  // YOUR CODE HERE
}

function min(arr) {
  // YOUR CODE HERE
}

function mean(arr) {
  // YOUR CODE HERE
}

function median(arr) {
  // YOUR CODE HERE
}