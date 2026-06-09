let low = 1;
let high = 100;

while (low <= high) {

    let mid = Math.floor((low + high) / 2);

    console.log("Is your number " + mid + "?");

    // Assume secret number = 67

    if (mid === 67) {
        console.log("Magic Number Found = " + mid);
        break;
    }
    else if (mid < 67) {
        low = mid + 1;
    }
    else {
        high = mid - 1;
    }
}