function sum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
   sum += arr[i];
  }
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

//5///////////////////////////////////////////////
function max(arr) {
    return Math.max(...arr);
}

//6/////////////////////////////////////////////
function min(arr) {
    return Math.min(...arr);
}

//7/////////////////////////////////////////
function mean(arr) {
  if (arr.length === 0){
        return null;
  }

  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
   sum += arr[i];
  }
  return sum/(arr.length);
}

//8////////////////////////////////
function median(arr) {

}
