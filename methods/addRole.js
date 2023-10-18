const inquirer = require('inquirer')

const addRole = async (db) => {
    // match department names with their ids
    let [ departmentRows ] = await db.query('SELECT * FROM departments')
    let departmentIDs = departmentRows.map((item) => item.department_id)
    let departmentNames = departmentRows.map((item) => item.department_name)

    let { roleName, salary, departmentName } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new Role?',
            name: 'roleName',
        },
        {
            type: 'input',
            message: 'What is salary of the new Role?',
            name: 'salary',
        },
        {
            type: 'list',
            message: 'What Department does this Role belong to?',
            name: 'departmentName',
            choices: [...departmentNames],
        },
    ])
    let departmentID = departmentIDs[departmentNames.indexOf(departmentName)]
    await db.query('INSERT INTO roles (department_id, job_title, salary) VALUES (?, ?, ?)', [departmentID, roleName, salary])
    console.log(`Added New Role "${roleName}" to ${departmentName} with a salary of ${salary}`)
}

module.exports = addRole