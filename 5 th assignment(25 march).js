

// assignment number 1 
// Requirements: "1. Given a positive integer A, find a pair of integer a, b such that
// a and b are positive
// A <= B
// a ^ 2 + b ^ 2 = A
// 0 <= A <= 100000


function find_ab(n) {
    a = 0
    while (a * a < n) {
        b = 0
        while (b * b < n) {
            if (a * a + b * b == n) { if (a <= b) { console.log(a, b) } }
            b = b + 1
        }
        a = a + 1
    }
}
console.log(find_ab(100))




// // assigmnetment number 2 
// 2. Item delivery needs to take place for a circle of size B.Suppose we start from the position C(given)
// then find the position where the Ath item will be delivered.
//     Note: Distribution of Items are performed at the adjacent positions starting from C.
// Expected Input: Three integers A, B, C
// Expected Output: Integer denoting the position of the delivery of the Ath item if started from position C."
// # a = 5 //number of  items 
// # b = 2 //size of circle 
// # c = 1  // starting position


function find_distance(a, b, c) {
    k = (a + c - 1) % b
    if (k == 0) {
        return b
    }
    else {
        return k
    }
}
console.log(find_distance(8,5,4))
