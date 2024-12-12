// factorial program

let num=5;
function factorial(num){
    let res=1;
    for(let i=1; i<=num; i++){
        res *=i;
    }
    return res;
}
console.log("factorial of "+num+" is : "+ factorial(num));
