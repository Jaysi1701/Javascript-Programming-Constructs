function isPrime(number) {

    if (number <= 1)
        return false;

    for (let i = 2; i <= Math.sqrt(number); i++) {

        if (number % i === 0)
            return false;
    }

    return true;
}

function getPalindrome(number) {

    let reverse = 0;

    while (number > 0) {
        let digit = number % 10;
        reverse = reverse * 10 + digit;
        number = Math.floor(number / 10);
    }

    return reverse;
}

let number = 13;

if (isPrime(number)) {

    console.log(number + " is Prime");

    let palindrome = getPalindrome(number);

    console.log("Palindrome = " + palindrome);

    if (isPrime(palindrome))
        console.log("Palindrome is also Prime");
    else
        console.log("Palindrome is Not Prime");
}
else {
    console.log(number + " is Not Prime");
}