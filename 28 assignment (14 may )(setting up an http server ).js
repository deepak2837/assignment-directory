//28 assignment (14 may )(setting up an http server ).js
// // assignment question number 1 

// // Requirements: "1.Updating Port; Question-> Let us try to create a web server on port 8448 instead of
// // 8080.

var http = require("http")

function for_http(req,res){
    res.write("hello to the new server");
    res.end();

}

var m = http.createServer(for_http)

m.listen(8080)



// assignment question number 2 
// 2.Updating response Code;Question -> Let us try to return a 400 error message!"
var http = require("http")

function for_http(req,res){
    
    res.write("hello to the new server");
    res.end();

}

var m = http.createServer(for_http)

m.listen(8080)


// question number 2 
// Updating response Code;Question -> Let us try to return a 400 error message!"

const http = require('http')

const hostname = '127.0.0.1'
const port = 3001

const server = http.createServer((req, res) => {
  
if (req.url == '/') {
           
    // Set response header
    res.writeHead(200, { 'Content-Type': 'text/html' }); 
       
    // Set response content    
    res.write(
      `<html><body style="text-align:center;">
        <h1 style="color:green;">welcome to dummy  Home Page</h1>
        <p> u will get mad </p>
        </body></html>`);
    res.end();//end the response
   
}

else if (req.url == "/dummy") {
       
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write(<h1>thisw is the dummy text</h1>);
  res.end(); //end the response
 
}
else{
  res.writeHead(400)
    res.end('Invalid Request!'); //end the response

}

})

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`)
})
