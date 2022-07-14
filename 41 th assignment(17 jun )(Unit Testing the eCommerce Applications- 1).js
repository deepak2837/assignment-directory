//41th assignment(17 jun )(Unit Testing the eCommerce Applications- 1).js
//for testing promise 

function promiseTestFunction(){
return new Promise((resolve,reject)=>{resolve("promise tested")})
}
test("testing the promsie",()=>{
    return promiseTestFunction().then((msg)=>{
        expect(msg).toBe("promise tested")
    })
})



//testing the call back fyunctions 




test("testing call back function",done=>{
    function callback(data){
        try{
            expect(data).toBe("called");
            done();
        }
        
        catch(error){
            done(error)
        }
    }
    fetch(callback)
})
function fetch(callback){
    setTimeout(()=>{
        callback("called")
    },2000)
}





//imprted from thew cal.js 
function add(...num) {
    return num.reduce((acc, sum) => acc + sum, 0)
}
function multiply(...num) {
    return num.reduce((acc, sum) => acc * sum, 1)
}

function subtract(minuend, subtrahend) {
    return minuend - subtrahend
}


function divide(dividend, divisor) {
    return dividend / divisor
}

module.exports = {add,multiply,subtract,divide}




// another file named file.js which takes function from cal.js
const { default: test } = require("node:test")
const {add,multiply,subtract,divide} = require("./cal")

test("testing the add method",()=>{
    expect(add(1,2,3,4)).toBe(10);
});


test("testing the multiply method",()=>{
    expect(multiply(1,2,3,4)).toBe(24);
});



test("testing the add method",()=>{
    expect(subtract(4,2)).toBe(2);
});


test("testing the add method",()=>{
    expect(divide(4,2)).toBe(2);
});

