let repeated = [];

for(let i=10;i<=100;i++){

    let first = Math.floor(i/10);
    let second = i%10;

    if(first===second){
        repeated.push(i);
    }
}

console.log(repeated);