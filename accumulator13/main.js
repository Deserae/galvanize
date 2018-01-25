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
    var watchList = [];
    console.log("first loop " + i);

    for (var grades in students){
        console.log("second loop " + grades);

        if (grades < 60){
            watchList.push(students[i].name);

        }
    }
}
console.log(watchList);

//current status
//--first loop looks like it's working as expected
//--second loop isn't looping over grades