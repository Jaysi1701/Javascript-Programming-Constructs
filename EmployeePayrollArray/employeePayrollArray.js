let employeeArray = [];

employeeArray.push({
    id: 1,
    name: "Jaysi",
    salary: 50000
});

employeeArray.push({
    id: 2,
    name: "Alex",
    salary: 60000
});

employeeArray.push({
    id: 3,
    name: "John",
    salary: 55000
});

console.log(employeeArray);

let totalSalary = employeeArray.reduce(
    (sum, employee) => sum + employee.salary,
    0
);

console.log(
    "Total Salary = " +
    totalSalary
);

let averageSalary =
    totalSalary /
    employeeArray.length;

console.log(
    "Average Salary = " +
    averageSalary
);