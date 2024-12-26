console.log(typeof "hiren") //string
console.log(typeof 33); //number
console.log(typeof 3.14);   //number
console.log(typeof (33 + 66));  //number
console.log(typeof true);   //boolean
console.log(typeof 123n);   //bigint
console.log(Symbol());     //symbol
console.log(typeof undefined);  //undefined
console.log(typeof null);   //object
console.log(typeof x);  //undefined
console.log(typeof {name:'hiren'}); //object
console.log(typeof function (){});  //function
console.log(typeof [1,2,3,4]);  //object
console.log(null == undefined); //true
console.log(null === undefined);    //false

const time=new Date()
console.log(time instanceof Date);  //true

const arr=['aa','bb','cc','dd'];
console.log(arr);
console.log(arr instanceof Array);  //true

