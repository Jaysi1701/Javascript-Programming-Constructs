let number = 17;
let isPrime = true;

if(number <= 1) {
    isPrime = false;
}

for(let i = 2; i <= Math.sqrt(number); i++) {
    if(number % i === 0) {
        isPrime = false;
        break;
    }
}

if(isPrime)
    console.log(number + " is Prime");
else
    console.log(number + " is Not Prime");