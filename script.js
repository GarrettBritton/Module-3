// Get a reference to the #add-employees-btn element
const addEmployeesBtn = document.querySelector('#add-employees-btn');

// Collect employee data
const collectEmployees = function() {

  const employeesArray = [];
  // TODO: Get user input to create and return an array of employee objects
  
  let newEntry = true;

  while (newEntry) {
    const firstName = window.prompt("Please Enter First Name");
    const lastName = window.prompt("Please Enter Last Name");
    const salary = parseFloat(window.prompt("Please Enter Salary"));


    const employee = {
      firstName: firstName,
      lastName: lastName,
      salary: salary
    };

    employeesArray.push(employee);

    newEntry = window.confirm("Do you want to add another employee?");
  }


  displayEmployees(employeesArray);
  return employeesArray;
};



// Display the average salary
const displayAverageSalary = function(employeesArray) {
  // TODO: Calculate and display the average salary
  let totalSalary = 0;

  // Loop through the employees and sum up the salaries
  for (const employee of employeesArray) {
    totalSalary += employee.salary;
  }

  // Calculate the average salary
  const averageSalary = totalSalary / employeesArray.length;

  const employeesLength = employeesArray.length

  // Log the average salary
  console.log(`The average employee salary between our ${employeesLength} employee(s) is ` + averageSalary.toLocaleString("en-US",{
    style:"currency",
    currency:"USD"
  }));
}

// Select a random employee
const getRandomEmployee = function(employeesArray) {
  // TODO: Select and display a random employee
  const index = Math.floor(Math.random() * employeesArray.length);
  const randomEmployee = employeesArray[index];
  console.log(`Congratulations to ${randomEmployee.firstName} ${randomEmployee.lastName}, our random drawing winner!`);
}

/*
  ====================
  STARTER CODE
  Do not modify any of the code below this line:
*/

// Display employee data in an HTML table
const displayEmployees = function(employeesArray) {
  // Get the employee table
  const employeeTable = document.querySelector('#employee-table');

  // Clear the employee table
  employeeTable.innerHTML = '';

  // Loop through the employee data and create a row for each employee
  for (let i = 0; i < employeesArray.length; i++) {
    const currentEmployee = employeesArray[i];

    const newTableRow = document.createElement("tr");

    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = currentEmployee.firstName;
    newTableRow.append(firstNameCell);

    const lastNameCell = document.createElement("td");
    lastNameCell.textContent = currentEmployee.lastName;
    newTableRow.append(lastNameCell);

    const salaryCell = document.createElement("td");
    // Format the salary as currency
    salaryCell.textContent = currentEmployee.salary.toLocaleString("en-US",{
      style:"currency",
      currency:"USD"
    });

    newTableRow.append(salaryCell);

    employeeTable.append(newTableRow);
  }
}

const trackEmployeeData = function() {
  const employees = collectEmployees();

  console.table(employees);

  displayAverageSalary(employees);

  console.log('==============================');

  getRandomEmployee(employees);

  employees.sort(function(a,b) {
    if (a.lastName < b.lastName) {
      return -1;
    } else {
      return 1;
    }
  });

  displayEmployees(employees);
}

// Add event listener to 'Add Employees' button
addEmployeesBtn.addEventListener('click', trackEmployeeData);
