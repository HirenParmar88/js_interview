// Array
const cars=["BMW","Volvo","Marcedese","Range Rover"]
console.log(cars);
//accessing array element
console.log(cars[2]);
//changing an array element
cars[1]="toyota"
console.log(cars);
//converting array to staring
console.log(cars.toString());

//accessing the last ele.
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let fruit = fruits[fruits.length - 1];
console.log(fruit);     //Mango
// adding ele in last
fruits.push("graps")
console.log(fruits);    //graps
// removing last ele
fruits.pop()
console.log(fruits);    //graps

// how to recognize an array
const myArray=["aaa","bbb","ccc"]
let type = typeof(myArray)
console.log(type);  //object

//neated array and object
const myObj = {
    name: "hp",
    age: 30,
    cars: [
      {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]},
      {name:"Fiat", models:["500", "Panda"]}
    ]
  }
  console.log(myObj.cars[0].models);
  
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
