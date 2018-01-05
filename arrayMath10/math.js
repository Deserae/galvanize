function sum(arr) {
  var sum = 0;
  for (var i = 1; i < arr.length; i++) {
   sum += arr[i];
  }
  console.log(sum);
  return sum;
}

//////////////////////////////////////////////////
var arr = [1,2,3,4];
function product(arr) {
    if (arr.length === 0){
        return 1;
    }
    
    console.log(arr);
    var product = 1;
    for (var i=0; i< arr.length; i++){
    product = product * product[i];
    console.log(product);
    }
    console.log("product " + product);
    return product;
}
product(arr);
//returning NAN

//////////////////////////////////////////////                
function filterPassingGrades(arr) {
  
  function grades(arr) {
  return arr >= 70;
  }

  var filtered = arr.filter(grades);
  console.log(filtered);
  return filtered;

}

////////////////////////////////////////
function replace(arr, from, to) {
  // YOUR CODE HERE
}

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