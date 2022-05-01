// assignment number7
//  30 th march 
//  "Basic of Data Structures: Arrays (Part-2)"


// problem number  1
// Requirements: "Practice Problem-1:
// Write a method that accepts an array of integers and updates every element with multiplication of previous
// and next elements.

k = [2, 3, 4, 5, 6]
m = k[0]
k [0] = k[0]*k[1]

for(let i = 1;i<k.length-1;i++){
    c = k[i]
    k[i] = m*k[i+1]
    m = c
}
k[k.length-1] = m*k[k.length-1]
console.log(k)


// problem number 2 
// Move all negative numbers to the end and positive to the beginning of the array without using any
// predefined sorting method"

q =  [-12, 11, -13, -5, 6, -7, 5, -3, -6]
i = 0
j = q.length-1
while (i<=j){
    if(q[i] <0){
        i = i+1


    }
    else if (q[j]>0){
        j = j-1
    }
    else{
        [q[i],q[j]] = [q[j],q[i]]
    }
}
console.log(q)

