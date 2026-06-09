let choice = 1;

let feet = 10;
let inch = 120;
let meter = 5;

switch (choice) {

    case 1:
        console.log("Feet to Inch = " + (feet * 12));
        break;

    case 2:
        console.log("Feet to Meter = " + (feet * 0.3048));
        break;

    case 3:
        console.log("Inch to Feet = " + (inch / 12));
        break;

    case 4:
        console.log("Meter to Feet = " + (meter * 3.28084));
        break;

    default:
        console.log("Invalid Choice");
}