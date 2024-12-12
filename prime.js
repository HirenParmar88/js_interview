// check the num is prime or not !!
function Prime(num) {
    if (num <= 1) {
        return false; 
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {

        if (num % i === 0) {
            return false; 
        }
    }
    return true; // prime num
}

let num = 30;
if (Prime(num)) {
    console.log(num + " Prime Number");
} else {
    console.log(num + " Not a Prime Number !!");
}
