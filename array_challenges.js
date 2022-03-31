/*****************************************************************/
// Always Hungry

function alwaysHungry(arr) {
    for(var i=0; i<arr.length; i++) {
        if(arr[i] === "food") {
            console.log("yummy")
        }
        else (arr[i] != "food")
            console.log("I'm hungry")
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

/*****************************************************************/
// High Pass Filter

function highPass(arr, cutoff) {
    var filteredArr = [];
    for(i=0; i<arr.length; i++) {
        if(arr[i]> 5) 
        filteredArr.push(arr[i])
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

/*****************************************************************/
// Better Than Average

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i]
    } 
    var count = []
    avg = sum /arr.length;
    for(i=0; i<arr.length; i++) {
        if(arr[i] > avg)
        count.push(arr[i])
    }
    return count.length;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

/*****************************************************************/
// Reverse Array

function reverse(arr) {
    var newArr =[]
    for (var i = 0; i < arr.length; i++) {      
        newArr[i] = arr[arr.length - i - 1];
    } 
    return newArr;

}
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]

/*****************************************************************/
// Fibonacci Array  
    // Had to look this up

function fibonacciArray(n) {
    var fibArr = [0, 1];
    var newArr = []
    for (var i = 2; i <= n; i++ ) {
        fibArr[i]=fibArr[i-1]+fibArr[i-2];
        newArr.push(fibArr[i])
    }

    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]