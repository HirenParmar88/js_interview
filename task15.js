//return longest string using array

/*
let arr=["a","hiren","raj","yash","ravi"];
function maxString(arr){
    return arr.toString;
}

let maxArray=maxString(arr);
console.log(maxArray);
console.log(arr);
*/

let arr=["a","hiren","raj","yash","ravi"];

function MaxLengthOfString() {

    for (let i=0; i<arr.length; i++) {
        if(typeof arr[i]==="string" && arr[i].length > MaxLengthOfString.length)
        {
            MaxLengthOfString = arr[i];
        }
    }
    return MaxLengthOfString;
}
console.log(MaxLengthOfString());

//console.log(stringArray[1]);    //access by array element


