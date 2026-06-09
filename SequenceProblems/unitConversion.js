const FEET_TO_METER = 0.3048;
const ONE_ACRE = 43560;

// 42 inches to feet
let inches = 42;
let feet = inches / 12;

console.log("42 inches = " + feet + " feet");

// Rectangular Plot
let lengthFeet = 60;
let widthFeet = 40;

let lengthMeter = lengthFeet * FEET_TO_METER;
let widthMeter = widthFeet * FEET_TO_METER;

console.log("Length in Meter = " + lengthMeter);
console.log("Width in Meter = " + widthMeter);

// Area of 25 plots in acres
let areaOnePlot = lengthFeet * widthFeet;
let totalArea = areaOnePlot * 25;

let acres = totalArea / ONE_ACRE;

console.log("Area of 25 plots in Acres = " + acres);