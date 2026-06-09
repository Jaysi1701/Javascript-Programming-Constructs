let pinCodeRegex =
    /^[1-9][0-9]{2}\s?[0-9]{3}$/;

let pinCodes = [

    "400088",
    "400 088",
    "A400088",
    "400088B",
    "400 08A"

];

pinCodes.forEach(pin => {

    console.log(
        pin +
        " => " +
        pinCodeRegex.test(pin)
    );

});