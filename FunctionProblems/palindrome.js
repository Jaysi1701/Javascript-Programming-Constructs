function isPalindrome(number) {

    let original = number;
    let reverse = 0;

    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }

    return original === reverse;
}

let number = 121;

if (isPalindrome(number))
    console.log(number + " is Palindrome");
else
    console.log(number + " is Not Palindrome");