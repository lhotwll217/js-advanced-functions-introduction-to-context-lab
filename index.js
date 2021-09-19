let createEmployeeRecord = function (employeeArray) {
  return {
    firstName: employeeArray[0],
    familyName: employeeArray[1],
    title: employeeArray[2],
    payPerHour: employeeArray[3],
    timeInEvents: [],
    timeOutEvents: [],
  };
};

let createEmployeeRecords = function (employees) {
  let employeeRecords = employees.map((employee) =>
    createEmployeeRecord(employee)
  );

  return employeeRecords;
};

let createTimeInEvent = function (employee, dateStamp) {
  let splitDateStamp = dateStamp.split(" ");

  let newEvent = {
    type: "TimeIn",
    hour: parseInt(splitDateStamp[1], 10),
    date: splitDateStamp[0],
  };

  employee.timeInEvents.unshift(newEvent);

  return employee;
};

let createTimeOutEvent = function (employee, dateStamp) {
  let splitDateStamp = dateStamp.split(" ");

  let newEvent = {
    type: "TimeOut",
    hour: parseInt(splitDateStamp[1], 10),
    date: splitDateStamp[0],
  };

  employee.timeOutEvents.unshift(newEvent);

  return employee;
};

let hoursWorkedOnDate = function (employee, date) {
  let timeIn = employee.timeInEvents.filter(
    (timeInEvent) => timeInEvent.date === date
  )[0];

  let timeOut = employee.timeOutEvents.filter(
    (timeOutEvent) => timeOutEvent.date === date
  )[0];

  let hoursWorked = (timeOut.hour - timeIn.hour) / 100;
  return hoursWorked;
};

let wagesEarnedOnDate = function (employee, date) {
  return employee.payPerHour * hoursWorkedOnDate(employee, date);
};

let allWagesFor = function (employee) {
  let dates = [];

  employee.timeInEvents.map((event) => dates.push(event.date));

  console.log(dates);

  let reducer = (x, y) => x + y;

  return dates.map((date) => wagesEarnedOnDate(employee, date)).reduce(reducer);
};

let findEmployeeByFirstName = (employees, firstName) => {
  let employee = employees.filter(
    (employee) => employee.firstName === firstName
  );

  return employee[0];
};

let src = [
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
];
let emps = createEmployeeRecords(src);
let loki = findEmployeeByFirstName(emps, "Loki");

console.log(loki);

let calculatePayroll = (employees) => {
  let reducer = (x, y) => x + y;

  return employees.map((employee) => allWagesFor(employee)).reduce(reducer);
};

// let cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27]);
// // Earns 324
// let updatedBpRecord1 = createTimeInEvent(cRecord, "0044-03-14 0900");
// let updatedBpRecord2 = createTimeOutEvent(updatedBpRecord1, "0044-03-14 2100");
// // Earns 54
// let updatedBpRecord3 = createTimeInEvent(updatedBpRecord2, "0044-03-15 0900");
// let updatedBpRecord4 = createTimeOutEvent(updatedBpRecord3, "0044-03-15 1100");

// console.log(allWagesFor(updatedBpRecord4));
