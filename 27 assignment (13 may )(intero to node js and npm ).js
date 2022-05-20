//27 assignment (13 may )(intero to node js and npm ).js
// question number 1 
// Requirements: "1. Write a nodeJS program that would read content from the file and also append new content into the file.

var fs = require("fs");
var fileName = "demofile.txt"


// // first approavh to write a file 
var cee  = Buffer.from("geeks fro geeks"+"it is a operating susytm")

fs.open(fileName,"a",(err,data)=>
{if(err){
    console.log(err)
}
else{

    fs.write(data,cee,0,cee.length,(err,writtenbytes)=>{
        console.log(writtenbytes)
    })

}
}
)


// 2nd approiach t0 write the file

var write_this = "i want to write this string" 

fs.open(fileName,"a",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.write(data,write_this,(err,bytes)=>{
            console.log(bytes)
        })
    }
})





// // another approach to write the file 
const write_this = "write this to the file "
fs.writeFile(fileName,write_this,(err)=>{ 
    if (err) {
      console.log(err);
      return;
    }
})


fs.readFile(fileName,"utf8", (err, data) => {
    if (err) {
      console.log(err);
      return;
    }
    console.log(data);
})




// second  question of assignment 
function appstart(){
    console.log("function have been started")
}

setTimeout(appstart,10000)


function counter(){
    for(let i =0;i<10;i++){
        console.log(i)
    }
}
setInterval(counter, 5000);
