const inquirer = require('inquirer')

const addEmployee = async (db) => {
    // match role names with their ids
    let [roleRows] = await db.query('SELECT * FROM roles')
    let roleIDs = roleRows.map((item) => item.role_id)
    let roleNames = roleRows.map((item) => item.job_title)
    // match employee names with their ids, used to select a manager for the new employee 
    let [employeeRows] = await db.query('SELECT * FROM employees')
    let employeeIDs = employeeRows.map((item) => item.employee_id)
    let employeeNames = employeeRows.map((item) => `${item.first_name}  ${item.last_name}`)

    let { firstName, lastName, roleName, managerName } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the first name of the new Employee?',
            name: 'firstName',
        },
        {
            type: 'input',
            message: 'What is the last name of the new Employee?',
            name: 'lastName',
        },
        {
            type: 'list',
            message: 'What is the Role of the new Employee?',
            name: 'roleName',
            choices: [...roleNames],
        },
        {
            type: 'list',
            message: 'Who is the Manager of the new Employee?',
            name: 'managerName',
            choices: [...employeeNames, 'None'],
        },
    ])
    // default managerID to null (doesn't have a manager)
    let managerID = null
    if (managerName !== 'None') { // if they do, get their id 
        managerID = employeeIDs[employeeNames.indexOf(managerName)]
    }
    // get role id by matching index of the role name
    let roleID = roleIDs[roleNames.indexOf(roleName)]
    // departmentID comes down pretty nested, will have to index into it to get the actual value 
    let departmentID = await db.query('SELECT department_id FROM roles WHERE role_id = ?', [roleID])
    departmentID = departmentID[0][0].department_id

    await db.query('INSERT INTO employees (first_name, last_name, role_id, manager_id, department_id) VALUES (?, ?, ?, ?, ?)', [firstName, lastName, roleID, managerID, departmentID])
    console.log(`Added New Employee ${firstName} ${lastName}`)
}

module.exports = addEmployee