//Array Length
const fruits=["Banana","Orange","Apple","Mango"];
let size= fruits.length;
console.log(size);

//toString()
const array=["my","name","is","hiren"];
console.log(array.toString());

//at()
const hiren=["MCA","GLS","Ahmedabad","Sem 4"]
let hp=hiren.at(2)
let hp1=hiren[2]
console.log(hp);
console.log(hp1);

//join()
const gls=["MCA","IMCA","MSCIT","IMSCIT"]
console.log(gls.join("*"));

//pop()
const sub=["java","bigdata","embedded systems","network security"]
console.log(sub);
console.log(sub.pop()); //remove last ele
console.log(sub);

//push()
const ravi=["10th","12th","bca","mca"]
console.log(ravi);
ravi.push("phd")    //add ele to last 
console.log(ravi);

//shift()
const aa=["A","B","C","D","E"]
console.log(aa);
aa.shift()      //to remove first ele
console.log(aa);

//unshift()
const bb=["F","G","H","I","J"]
console.log(bb);
bb.unshift("E")     //add to first
console.log(bb);

//delete()
const mca=["sem1","sem2","sem3","sem4"]
delete mca[0]
console.log(mca);

//concat()
const arr1=["html","css","js","python"]
const arr2=["php","node js","react js","express js"]
const mergedArr=arr1.concat(arr2)
console.log(mergedArr);

//copyWithin()
const arr3=["prisma","axios","middleware","secret key","AES"]
console.log(arr3);
arr3.copyWithin(2,0)
console.log(arr3);

//flat()
const sem3=[[1,2],[3,4],[5,6]]
console.log(sem3);
let newSem=sem3.flat()
console.log(newSem);

//flatMap()
const ttt=["ttt","yyy","uuu","iii","ppp"]
const newttt=ttt.flatMap(x => [x, x * 10])
console.log(newttt);

//splice()
const arrSplice=["appale","mango","banana","cherry","graps"]
arrSplice.splice(2,0,"Leman","Kiwi")
console.log(arrSplice);
arrSplice.splice(0,1)
console.log(arrSplice);

//toSpliced()
const months = ["Jan", "Feb", "Mar", "Apr"];
console.log(months);
const spliced = months.toSpliced(0, 1);
console.log(spliced);

//slice()
const hh=["fff","eee","hhhh","kkkk","lll"]
console.log(hh);
let check=hh.slice(1)
console.log(check);

