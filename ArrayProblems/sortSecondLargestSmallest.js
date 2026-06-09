let numbers = [];

for(let i=0;i<10;i++){
    numbers.push(Math.floor(Math.random()*900)+100);
}

console.log("Before Sorting:");
console.log(numbers);

numbers.sort((a,b)=>a-b);

console.log("After Sorting:");
console.log(numbers);

console.log("Second Smallest = " + numbers[1]);
console.log("Second Largest = " + numbers[numbers.length-2]);