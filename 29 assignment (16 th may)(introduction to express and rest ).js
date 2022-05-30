//29 assignment (16 th may)(introduction to express and rest ).js
// this is the answer of assignment number 1 , i have logged it using morgan middleware 
// Let us build a simple web server using morgan as middleware for logging

// 

const mor = require("morgan")
const express = require("express")
const morgan = require("morgan")
var app = express()


app.use(morgan("tiny"))

app.get("/",(req,res)=>{
    res.send("this is thedu8mmy text")})


app.listen(8080)


// this is assignment number 2 
// Add error logic in API’s.
// If anyone creates a user with a repeating userid return 400 code with an Error message.
// Eg: if we already have a user with id=2, we can't create a new user with different details but the same id."

var users =  [ 
      
       { 
          "id":"1", 
          "name": "Tom", 
          "lastname": "Price" 
       }, 
      
       { 
          "id":"2", 
          "name": "Nick", 
          "lastname": "Thameson" 
       } 
    ,
    { 
        "id":"3", 
        "name": "deepak", 
        "lastname": "aldjd" 
     } ,
     { 
        "id":"4", 
        "name": "surbhi", 
        "lastname": "verma" 
     } 
    ] 


const express = require("express")

const  bodyParser= require("body-parser")
const res = require("express/lib/response")

var app = express()
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get("/users",(req,res)=>{
    res.send(users).status(200)

})

// this is my way and it worked 
app.delete('/users/:id', (req, res) => {

    const id = req.params.id;
    console.log(id)
    for(let i= 0;i<users.length;i++){
                if(id==users[i].id){users.splice(i, 1); // 2nd parameter means remove one item only
                res.send('User is deleted').status(400)}
                else{
                  //  console.error("THIS ")
                   res.send(`no object name by this ${id}`)
                }
        }
// by this method we are just setting tthe array requal to the filtered array 
    // users = users.filter(user => {
    // if (user.id !== id) {
    // return true;
    // }
    // return false;
    // });
    });
    
    
// adding a object 
app.post("/user",(req,res)=>{
   var user1 = req.body

   users.push(user1)
   res.send('User is added to the database').status(200);


})
app.listen(8080)









