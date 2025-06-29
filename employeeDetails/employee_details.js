const employees = [
    { id: 1, fullname: 'John Doe', age: 30, department: 'IT', salary: 50000 },
    { id: 2, fullname: 'Alice Smith', age: 28, department: 'HR', salary: 45000 },
    { id: 3, fullname: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000 },
];

function displayEmployees() {
    const totalEmployees = employees.map((employee,index) => `<p> ${employee.id}: ${employee.fullname}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML = totalEmployees;
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc,employee) => acc=acc+employee.salary,0);
    alert(`Total Salaries: $${totalSalaries}`);
}

function displayHREmployees() {
    const hrEmployees= employees.filter(employee => employee.department== 'HR');
    const hrEmployeesDisplay = hrEmployees.map((employee,index) => `<p>${employee.id}: ${employee.fullname}: ${employee.age} - ${employee.department} - $${employee.salary}</p>`).join('');
    document.getElementById('employeeDetails').innerHTML =hrEmployeesDisplay;
}

function findEmployeeById(employeeid) {
    const foundEmployee = employees.find(employee => employee.id === employeeid);
    if (foundEmployee) {
        document.getElementById('employeeDetails').innerHTML =`<p>${foundEmployee.id}: ${foundEmployee.fullname}: ${foundEmployee.age} - ${foundEmployee.department} - $${foundEmployee.salary}</p>`;
    }
    else{
        document.getElementById('employeeDetails').innerHTML = 'no employee has been found with this ID';
       }
}