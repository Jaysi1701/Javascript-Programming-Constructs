let n = 8;
let i = 0;

while (i <= n) {

    let power = Math.pow(2, i);

    if (power > 256)
        break;

    console.log("2^" + i + " = " + power);

    i++;
}