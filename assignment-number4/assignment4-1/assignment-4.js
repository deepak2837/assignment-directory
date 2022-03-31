//Assignment 1
//Requirements: "1. Create a program where you will be given a list of names of the people along with their designation,
//based on the name you type in from the input field of the given html file, the relevant designation of
//the person will be displayed.
//Following are the designation of the people:
//Alex is a Developer
//John is an Artist
//Strek is a Singer
//Smith is an Actor
//
//






var list = ["Alex is a Developer",
    "John is an Artist",
    "Strek is a Singer",
    "Smith is an Actor"]

function getVal() {
    const val = document.getElementsByName("searchTxt")[0].value;
    if (val!=0){
    for (var i = 0;i<list.length;i++){
                if (check = list[i].includes(val)){
                    var j = list[i]
                    document.getElementById("alhabibi").innerHTML= j
    document.getElementById("alhabibi").innerHTML= j}
    else {
        
    }
   
  }
}
}

getVal()
