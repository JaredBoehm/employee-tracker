const inquirer = require('inquirer')

const addDepartment = async (db) => {
    let { departmentName } = await inquirer.prompt([
        {
            type: 'input',
            message: 'What is the name of the new Department?',
            name: 'departmentName',
        },
    ])
    let result = await db.query('INSERT INTO departments (department_name) VALUES (?)', [departmentName])
    console.log(`Added New Department "${departmentName}"`)
}

module.exports = addDepartment