try {

    let employeeId = 101;
    let salary = 50000;
    let gender = "M";

    let startDate =
        new Date("2025-01-01");

    if (employeeId <= 0)
        throw "Invalid Employee ID";

    if (salary <= 0)
        throw "Invalid Salary";

    if (!/^[MF]$/.test(gender))
        throw "Invalid Gender";

    if (startDate > new Date())
        throw "Future Date Not Allowed";

    console.log(
        "Employee Details Valid"
    );

}
catch (error) {

    console.log(
        "Error : " + error
    );
}