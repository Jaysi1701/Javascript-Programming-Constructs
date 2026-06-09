function celsiusToFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function fahrenheitToCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

let choice = 1;

switch (choice) {

    case 1:
        let celsius = 37;
        if (celsius >= 0 && celsius <= 100) {
            console.log(celsius + "°C = " +
                celsiusToFahrenheit(celsius) + "°F");
        }
        break;

    case 2:
        let fahrenheit = 98;
        if (fahrenheit >= 32 && fahrenheit <= 212) {
            console.log(fahrenheit + "°F = " +
                fahrenheitToCelsius(fahrenheit).toFixed(2) + "°C");
        }
        break;

    default:
        console.log("Invalid Choice");
}