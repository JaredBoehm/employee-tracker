const inquirer = require('inquirer')
const mysql = require('mysql2/promise')
const { password } = require('./secret')
const { addDepartment, addEmployee, addRole, updateEmployeeRole, viewAllDepartments, viewAllEmployees, viewAllRoles } = require('./methods')

async function main() {
    const db = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: password,
        database: 'employee_db'
    });
    
    const showMenu = () => {
        inquirer.prompt([
            {
                type: 'list',
                message: 'What would you like to do?',
                name: 'options',
                choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
            },
        ])
        .then(async (answers) => {
            switch (answers.options) {
                case 'View All Employees':
                    await viewAllEmployees(db)
                    break
                case 'Add Employee':
                    await addEmployee(db)
                    break
                case 'Update Employee Role':
                    await updateEmployeeRole(db)
                    break
                case 'View All Roles':
                    await viewAllRoles(db)
                    break
                case 'Add Role':
                    await addRole(db)
                    break
                case 'View All Departments':
                    await viewAllDepartments(db)
                    break
                case 'Add Department':
                    await addDepartment(db)
                    break
                default:
                    console.log('Error: Invalid Option Selected')
            }
            showMenu()
        })
    }
    showMenu()
}
main()