// JS Object Properties:-

// 1) object deleting properties
const student={
    roll : 206,
    name: "Hiren",
    surname: "Parmar",
    age:22
}
delete student.age
console.log(student)

// 2) Nested Object
const exam={
    enroll: 202300719010206,
    name: "Hiren Parmar",
    college: "GLS University",
    exam: "MCA Sem 3",
    sub:{
        bigdata: 60,
        HCI: 85,
        Java: 70,
        ES: 60
    }
}
console.log(exam.sub.Java)  //70
console.log(exam.sub["ES"]) //60
console.log(exam["sub"]["HCI"]);    //85

// JS Object methods
const bio={
    roll:1,
    fname: "hiren",
    lname: "parmar",
    age: 22,
    fullname: function(){
        return this.fname +" "+this.lname;
    }
}
console.log(bio.fullname());

const college={
    fname:"GLS",
    lname:"University"
}
college.fullname=function(){
    return (this.fname+" "+this.lname).toUpperCase()
}
console.log(college.fullname());

// JS Object Display

//using JSON.Stringify()
const obj1={
    roll: 10,
    name: "alex",
    city: "New york"
}
let myStr=JSON.stringify(obj1)
console.log((myStr));

// JS Object constructors:-

// Built in js constructors
//new Object()   // A new Object object
//new Array()    // A new Array object
//new Map()      // A new Map object
//new Set()      // A new Set object
//new Date()     // A new Date object
//new RegExp()   // A new RegExp object
//new Function() // A new Function object

function MyConstructor(first,last,age){
    this.firstname=first,
    this.lastname=last,
    this.age=age
}
const myFather= new MyConstructor("dineshbhai","parmar",48)
const myMother= new MyConstructor("sangitaben","parmar",44)

console.log("My father is "+myFather.age+". My mother is "+myMother.age+".")

