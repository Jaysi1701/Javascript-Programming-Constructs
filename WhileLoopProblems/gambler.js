let money = 100;
let goal = 200;

let bets = 0;
let wins = 0;

while (money > 0 && money < goal) {

    bets++;

    let result = Math.floor(Math.random() * 2);

    if (result === 1) {
        money++;
        wins++;
    } else {
        money--;
    }
}

console.log("Final Money = " + money);
console.log("Total Bets = " + bets);
console.log("Wins = " + wins);

if (money === goal)
    console.log("Goal Reached");
else
    console.log("Gambler Broke");