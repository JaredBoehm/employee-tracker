const inquirer = require('inquirer')
const mysql = require('mysql2')
const { password } = require('./secret.js')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: password,
    database: 'employee_db'
});

db.query('SELECT * FROM departments', (err, results) => {
    console.log(results);
});


// inquirer
//     .prompt([
//         {
//             type: 'list',
//             message: 'What would you like to do?',
//             name: 'options',
//             choices: ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'View All Departments', 'Add Department'],
//         },

//     ])
//     .then((answers) => {

//     })