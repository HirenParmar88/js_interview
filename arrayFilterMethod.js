// //filter method

const arr = [
  [1, "hiren", 21],
  [2, "yash", 24],
  [3, "kishan", 25],
  [4, "Anil", 26],
  [5, "Darshn", 27],
];

// Filter
const filteredArr = arr.filter(([id, name, age]) => true);

const mappedArr = filteredArr.map(
  ([id, name, age]) => `ID: ${id}, Name: ${name}, Age: ${age}`
);

mappedArr.forEach((show) => console.log(show));

console.log(mappedArr.max)

//nested object //
const students = [
  {
    name: "aaa",
    age: "21",
  },
  {
    name: "bbb",
    age: "16",
  },
  {
    name: "ccc",
    age: "15",
  },
];
students.map((data) =>
     {
        if(parseInt(data.age)>18) 
            {console.log(data)}
    }
);

const aaa=[
    {
    name:'aaa',
    age:24
    }
]

console.log(aaa[0].age)