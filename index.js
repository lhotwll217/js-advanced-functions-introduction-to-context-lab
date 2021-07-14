// Your code here
function createEmployeeRecord(x) {

    // // firstName = x[0].split(' ')[0]
    // let firstName = x[0]
    // let familyName = x[1]
    // let title = x[2]
    // let payPerHour = x[3]

    let testEmployee = { firstName: x[0], familyName: x[1], title: x[2], payPerHour: x[3] }
    testEmployee.timeInEvents = []
    testEmployee.timeOutEvents = []

    console.log(testEmployee)

    return testEmployee
}


// function createEmployeeRecords(x) {

// //     let employeeObjects = x.forEach(createEmployeeRecord)
// //     employeeRecords = []
// //     employeeRecords.push(employeeObjects)
// //     console.log(employeeRecords)

// // }


// const employeeArray = ["Gray", "Worm", "Security", 1]







let twoRows = [
    ["moe", "sizlak", "barkeep", 2],
    ["bartholomew", "simpson", "scamp", 3]
]


createEmployeeRecords(twoRows)