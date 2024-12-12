// check the string is palindrome or not 

//let str="MADAM"

function strPalindrome(str) {
    let newStr = str.toLowerCase().replace();
    let revStr = '';

    for (let i = newStr.length - 1; i >= 0; i--) {
        revStr += newStr[i];
    }
    if (newStr === revStr) {
        return true;
    } else {
        return false;
    }
}

let input_str = "MADAM";
if (strPalindrome(input_str)) {
    console.log("Palindrome");
} else {
    console.log("Not Palindrome !!");
}
