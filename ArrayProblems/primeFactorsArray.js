let number = 315;

let factors = [];

for(let i=2;i<=number;i++){

    while(number%i===0){
        factors.push(i);
        number/=i;
    }
}

console.log("Prime Factors:");
console.log(factors);