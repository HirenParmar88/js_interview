//indexOf()
const fruits=["apple","mango","banana","cherry"]
console.log(fruits);
let position=fruits.indexOf("apple")+1
console.log(position);

//lastIndexOf()
const valid=["aaa","bbb","ccc","ddd","eee"]
console.log(valid);
let check=valid.lastIndexOf("aaa")+1
console.log(check);

//includes()
const array=["10","20","30","40","50"]
console.log(array);
console.log(array.includes("20"))
console.log(array.includes("70"));

//find()
const numbers=[5,10,15,20,25,30,35,40,45]
let first=numbers.find(myFunction)

function myFunction(value,index,array){
    return value > 18
}
console.log(first);

//findIndex()
const numbers2=[5,10,15,20,25,30,35,40,45]
let first2=numbers.findIndex(myFunction)

function myFunction(value,index,array){
    return value > 18
}
console.log(first2);

//findLast()
const findLast=[27,34,36,40,46,58,79,90]
console.log(findLast);
let high=findLast.findLast(x=>x>40)
console.log(high);

//findLastIndex()
const findLastIn=[27,28,30,40,42,35,30]
console.log(findLastIn);
let last=findLastIn.findLastIndex(x=>x > 40)
console.log(last);