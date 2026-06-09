class EmployeePayrollData {

    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }

    toString() {
        return `
Employee Id    : ${this.id}
Employee Name  : ${this.name}
Employee Salary: ${this.salary}
`;
    }
}

let employee = new EmployeePayrollData(
    1,
    "Jaysi",
    50000
);

console.log(employee.toString());