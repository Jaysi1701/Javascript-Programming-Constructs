let day = 15;
let month = 5;

let result = false;

if (
    (month === 3 && day >= 20) ||
    (month === 4) ||
    (month === 5) ||
    (month === 6 && day <= 20)
) {
    result = true;
}

console.log(result);