// sqare of each num arr using map() method

function squareOfNum(arr) {
    return arr.map(num => num * num);
}
let number = [5,10,15,30];
let squareOfArr = squareOfNum(number);

console.log("Array:- " + number);
console.log("Square of Array:- " + squareOfArr);
