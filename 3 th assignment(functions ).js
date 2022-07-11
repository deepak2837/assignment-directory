// Assignment 1
// Requirements: 1. Write a function astroguru that:
// A. Takes four arguments: number of children, spouses name, location and job
// B. Output the following string: “You will be a ‘job’ in ‘location’ and married to ‘partner’ with ‘numkids’".


function astroguru(number_of_children,spouses_name,location,job){
    console.log(`You will be a ${job} in ${location} and married to  ${spouses_name} with ${number_of_children}`)

}
astroguru(3,"kajal","delhi","teacher")

// Assignment 2
// Write a function that compares two numbers and returns the larger of the two.
// Bonus: Output appropriate message if numbers cant be compared or are equal"


function compare(n,s){
    if (n>s){
        console.log(n + " is greater than " + s)
    }
    else if (n<s){
        console.log(s + " is greater than " + n)
    }
    else {
        console.log(n + " is equal to " + s)
    }
}
compare(4,5)
