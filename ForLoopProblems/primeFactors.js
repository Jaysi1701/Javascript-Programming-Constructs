let number = 315;

console.log("Prime Factors:");

for(let i = 2; i <= number; i++) {

    while(number % i === 0) {
        console.log(i);
        number /= i;
    }
}