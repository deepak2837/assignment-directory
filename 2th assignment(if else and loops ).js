// Assignment 1:

// Requirements: "1. Iterate from 1 to 100(using for loop and if else statement) (Submittable assignment)/
// 5 Print Relevel if divisible by 3/
// 5 Print Buzz if divisible by 5/
// 5 Print 6indBuzz if divisible by 15/
// 5 Print the number if all the above condition fails0



for (var i = 1;i<100;i++){ 
   if (i%3==0 && i%5==0){
    console.log("mindbuzz")}
    else if (i%3==0){
    console.log("relevel")}
    else if(i%5==0){
    console.log("buzz")}
    else {
        console.log(i)}

}


// Assignment 2:
// 2. Program to check if a number is odd or even (Submittable assignment)"

n = 0
function even_or_odd(n){
    if (n%2==0){
        console.log(n + " is a even number")
    }
    else{
        console.log(n + " is a odd number")
    }
}
even_or_odd(n)
