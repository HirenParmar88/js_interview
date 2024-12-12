// filter() 

function filterEvenNumber(arr) {
    return arr.filter(num => num % 2 === 0);
}
let number = [1,2,3,4,5,6,7,8,9,10];
let evenNum = filterEvenNumber(number);
console.log("Array is : " + number);
console.log("Even Numbers: " + evenNum);
