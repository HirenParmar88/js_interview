//forEach()
const numbers=[45,4,9,16,25]
let txt="";
numbers.forEach(myFunction)
console.log(txt);
function myFunction(value,index,array){
    txt += value +" ";
}

//map()
const numbers1 = [45, 4, 9, 16, 25];
const numbers2 = numbers1.map(myFun);
function myFun(value, index, array) {
  return value * 2;
}
console.log(numbers2);

//flatMap()
const myArr = [1,2,3,4,5,6]
console.log(myArr);
const newArr = myArr.flatMap((x)=>x * 2)
console.log(newArr);

//filter()
const num=[45,4,9,16,25]
const over18 = num.filter(filterFun)
function filterFun(value,index,array){
    return value > 18;
}
console.log(over18);

//reduce()
const myNum=[10,20,30,40,50]
let sum=myNum.reduce(myNumFun)
function myNumFun(total, value, index, array){
    return total +  value
}
console.log(sum);

//reduceRight()
const roll=[50,100,200,300,50]
let sumArr=roll.reduceRight(myFunction)
function myFunction(total,value,index,array){
    return total+value;
}
console.log(sumArr);

//every()
