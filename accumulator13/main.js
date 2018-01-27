//Given the following array of student grades, 
//accumulate an array called watchList 
//containing the names of students who received at 
//least one grade below 60.

var students = [
  {
    "name":"Dan",
    "grades":[33, 76, 99]
  },
  {
    "name":"Freya",
    "grades":[92, 65, 77]
  },
  {
    "name":"Azul",
    "grades":[45, 66, 89]
  }
];

for (var i = 0; i < students.length; i++){
    var studentName = students[i].name;
    var gradesArray = students[i].grades;
    var watchList = [];
    
    for (var j = 0; j < gradesArray.length; j++){

        console.log("before if" + watchList);
        if (gradesArray[j] < 60){
            watchList = watchList.push(studentName);
            console.log("after array push" + watchList);
        }

     }

}
console.log("watchList " + watchList);

//second loop is currently hanging