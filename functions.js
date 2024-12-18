console.log("-------- js functions ---------")
//1
function myFunction(p1,p2){
    return p1*p2;
}
let result= myFunction(10,5)
console.log(result)

//2
let carname="volvo"
var myname="Hiren"
const j=66
function check(){
    let carname
    var myname="Hiren Parmar"
    const j=77
    console.log(carname)
    console.log(myname)
    console.log(j)
}
check()

//3. object 
let car="fortuner"  //var
console.log(car);

const myCar={
    type:"Mahindra",
    model: "XUV700",
    price: 2000000
}
console.log(myCar)
console.log(myCar.model)

// create an object :-
// Type - 1 
const person={
    roll: 206,
    name: "hiren",
    city: "Bhavnagar"
}
console.log(person);

// Type - 2
const person2 = {};
// add properties
person2.roll=111
person2.name="ravi"
person2.city="Mhv"
console.log(person2)
console.log(person2.city)

// Type - 3 using new keywork
const person3 = new Object()
person3.roll=201
person3.name="kishan"
person3.age=24
console.log(person3)

// Type - 4 JS object methods 
const student={
    firstname:"Hiren",
    lastname:"Parmar",
    id: 206,
    fullname: function(){
        return this.firstname +" "+ this.lastname
    }
}
console.log(student.fullname());

// Type-5 JS object are mutable
const student1={    //create an object
    roll: 103,
    name: "anil",
    email: "anil123@gmail.com",
    age: 24
}
const stud= student1;   //create a copy

stud.age=30;    //change age in both
console.log(stud)

//[1] let var and const difference
console.log('----------let var and const difference -----------');

//var
console.log(x);
var x=10;
console.log(x); //10
{
    var x=11;   //override
    console.log(x); //11  
}
console.log(x); //11

// let
let y=30
console.log(y); //30
{
    let y=31;   //override
    console.log(y); //31 
}
console.log(y); //30

// const
const z=40;
console.log(z); //40
{
    const z=41; 
    console.log(z); //41  
}
console.log(z); //40

//[2] = == and === difference
console.log('------- = === and === difference ----------');

let aa=101;
console.log(aa);

console.log(5 == "5") //true    only check value

console.log(5 === "5")  //false     check type
console.log(5 === 5)