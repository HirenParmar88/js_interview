// two numbers input and return greatest common divisor using a loop.

let a=45;
let b=30;

function gcd(a,b){
 let res=Math.min(a,b);
 while(res > 0){
    if(a % res == 0 && b % res == 0){
        break;
    }
    res --;
 }
 return res;
}
console.log("GCD of A and B is :",gcd(a,b));
//15*3=45 and 15*2=30 so 15 is common number