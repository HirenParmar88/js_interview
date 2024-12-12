function reverseArr(arr) {

    let reversedArr = [];
    //for loop
    for (let i = arr.length - 1; i >= 0; i--) {
        reversedArr.push(arr[i]);
    }
    return reversedArr;
}

let array = [10, 20, 30, 40, 50];
let rev = reverseArr(array);
console.log("Array is : " + array);
console.log("New Array is : " + rev);
