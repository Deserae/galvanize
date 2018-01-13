function camelize (paramString){
  if (typeof paramString === "undefined" || typeof paramString !== "string" ){
      return "Please enter a valid string.";
  } 
  var paramString = paramString.replace(/[^a-zA-Z\s\-\_]/g, "");
 
  if (paramString === ""){
        return "Please enter a valid string.";
  } 
  
  //tolowercase
  var lowerCaseParamString = paramString.toLowerCase();  
  //turn into array with split
  var arrayofstrings = lowerCaseParamString.split(" ");

  if (arrayofstrings.length === 1){
    var arrayofstrings = arrayofstrings.toString();
    return arrayofstrings;
  }
   
    //loop over array - skip over first
    for (var i=1; i < arrayofstrings.length; i++){
    var upperCaseLetter = arrayofstrings[i].charAt(0).toUpperCase();
    // take upper letter and replace in word
    var endOfWord = arrayofstrings[i].slice(1);
    var finalWord = upperCaseLetter + endOfWord;
    //var finalWord = upperCaseLetter.concat(endOfWord);
    //console.log(finalWord);
    arrayofstrings[i] = finalWord;
    }
    
    var camelCase = arrayofstrings.join("");
    return camelCase;
}
    
    



