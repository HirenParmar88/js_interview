// array reduce method to print sum of i/p

function sumOfArray(arr) {
    return arr.reduce((oldVal, current)=>oldVal + current, 0);
}
let numbers = [1, 2, 3, 4, 5];
let tot = sumOfArray(numbers);

console.log("array:- " + numbers);
console.log("Sum Of Array:- " + tot);
