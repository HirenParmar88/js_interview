// take 3 i/p numbers and print to ASC order.

function sortNum(a, b, c) {
    if (a > b) {
        let temp = a;
        a = b;
        b = temp;
    }
    if (a > c) {
        let temp = a;
        a = c;
        c = temp;
    }
    if (b > c) {
        let temp = b;
        b = c;
        c = temp;
    }
    console.log("ASC order : " + a + ", " + b + ", " + c);
}

let x = 15, y = 30, z = 80;
sortNum(x, y, z);
