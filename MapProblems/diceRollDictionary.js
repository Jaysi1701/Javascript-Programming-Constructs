let diceMap = new Map();

for(let i=1;i<=6;i++){
    diceMap.set(i,0);
}

let maxReached = false;

while(!maxReached){

    let dice = Math.floor(Math.random()*6)+1;

    diceMap.set(
        dice,
        diceMap.get(dice)+1
    );

    if(diceMap.get(dice)===10){
        maxReached = true;
    }
}

console.log("Dice Roll Counts:");

for(let [key,value] of diceMap){
    console.log(
        "Dice " + key +
        " = " + value
    );
}

let maxKey;
let maxValue = -Infinity;

let minKey;
let minValue = Infinity;

for(let [key,value] of diceMap){

    if(value > maxValue){
        maxValue = value;
        maxKey = key;
    }

    if(value < minValue){
        minValue = value;
        minKey = key;
    }
}

console.log(
    "Maximum Times = Dice "
    + maxKey
);

console.log(
    "Minimum Times = Dice "
    + minKey
);