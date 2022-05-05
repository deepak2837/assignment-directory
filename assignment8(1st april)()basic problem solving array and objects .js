//assignmnet for 1 st april

// problem number 1 
// merge two sorted array 

var arr1 = [1,3,5,7] 
var arr2 = [0,2,6,8,9]
var arr = []
var i = 0 
var j = 0 
while(i<arr1.length && j<arr2.length){
    if (arr1[i]<arr2[j]){
        arr.push(arr1[i])
        i++

    }
    else{
        arr.push(arr2[j])
        j++
    }
}

while (i<arr1.length){
    arr.push(arr1[i])
    i++
}


while (j<arr2.length){
    arr.push(arr2[j])
    j++
}


console.log(arr)






// // problem number 2 
k =  [4,2,6,3,5,3,21]

var min = 9007199254740991
j = 0
while(j<k.length){
if (k[j]<min){
    min = k[j]
    j = j+1
}
else{
    j = j+1
}
    
}
console.log(min)





