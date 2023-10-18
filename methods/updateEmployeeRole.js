const inquirer = require('inquirer')

const updateEmployeeRole = async (db) => {
    // match employee names with their ids, used to select employee to update
    let [employeeRows] = await db.query('SELECT * FROM employees')
    let employeeIDs = employeeRows.map((item) => item.employee_id)
    let employeeNames = employeeRows.map((item) => `${item.first_name}  ${item.last_name}`)
    // match role names with their ids
    let [roleRows] = await db.query('SELECT * FROM roles')
    let roleIDs = roleRows.map((item) => item.role_id)
    let roleNames = roleRows.map((item) => item.job_title)

    let { selectedEmployee, roleName } = await inquirer.prompt([
        {
            type: 'list',
            message: 'What Employee would you like to update?',
            name: 'selectedEmployee',
            choices: [...employeeNames],
        },
        {
            type: 'list',
            message: 'What Role would you like to give them?',
            name: 'roleName',
            choices: [...roleNames],
        }
    ])
    let employeeID = employeeIDs[employeeNames.indexOf(selectedEmployee)]
    // get role id by matching index of the role name
    let roleID = roleIDs[roleNames.indexOf(roleName)]
    // departmentID comes down pretty nested, will have to index into it to get the actual value 
    let departmentID = await db.query('SELECT department_id FROM roles WHERE role_id = ?', [roleID])
    departmentID = departmentID[0][0].department_id

    await db.query('UPDATE employees SET role_id = ?, department_id = ? WHERE employee_id = ?', [roleID, departmentID, employeeID])
    console.log(`Updated Employee`)
}

module.exports = updateEmployeeRole