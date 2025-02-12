//1) Map
const numbers=[1,2,3,4,5];
const squareOfNum= numbers.map(num => num * num)
console.log(squareOfNum);   //[1, 4, 9, 16, 25]

//2) Reduce
const arr=[1,2,3,4,5];
const sum=arr.reduce((acc,arr)=>acc + arr, 0)
console.log(sum);   //15

//eg.
const words=['apple','banana','apple','orange','banana','apple']
console.log(words);
const wordCount=words.reduce((acc,word)=>{
    acc[word]=(acc[word] || 0)+1;
    return acc;
},{});
console.log(wordCount);

//3) Filter
const num=[1,2,3,4,5];
const evenNum=num.filter(num=> num % 2 === 0)
console.log(evenNum);
