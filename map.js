const fruits= new Map([
    ["apple",500],
    ["banana",200],
    ["mango",700]
])
console.log(fruits);

const student= new Map();
student.set("hiren",22);
student.set("dhruv",23);
student.set("keyur",26);
console.log(student);
console.log(student.get("hiren"));
console.log(typeof(student));   //object
console.log(student instanceof Map) //true
console.log(student.size);
student.delete("dhruv") //delete one ele
console.log(student);

console.log(student.has("hiren"))   //The has() method returns true if a key exists in a map
student.clear() //The clear() method removes all the elements from a map
console.log(student);




