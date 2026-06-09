const dailyWageArray = [160, 80, 160, 0, 80, 160];

let totalWage =
    dailyWageArray.reduce(
        (total, wage) => total + wage,
        0
    );

console.log("Total Wage = " + totalWage);

let dayMap = dailyWageArray.map(
    (wage,index) =>
    "Day " + (index+1) +
    " = " + wage
);

console.log(dayMap);

let fullTimeDays =
    dailyWageArray.filter(
        wage => wage === 160
    );

console.log(fullTimeDays);

console.log(
    "First Full Time Day = " +
    (dailyWageArray.findIndex(
        wage => wage === 160
    ) + 1)
);

console.log(
    dailyWageArray.every(
        wage => wage === 160
    )
);

console.log(
    dailyWageArray.some(
        wage => wage === 80
    )
);

console.log(
    "Days Worked = " +
    dailyWageArray.filter(
        wage => wage > 0
    ).length
);class EmployeePayrollData {

    constructor(id,name,salary){

        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    toString(){

        return `
        ID=${this.id}
        Name=${this.name}
        Salary=${this.salary}
        `;
    }
}

let employee =
new EmployeePayrollData(
    1,
    "Jaysi",
    50000
);

console.log(
    employee.toString()
);