const viewAllEmployees = async (db) => {
    let [ rows ] = await db.query('SELECT * FROM employees LEFT JOIN departments ON employees.department_id = departments.department_id LEFT JOIN roles ON employees.role_id = roles.role_id')
    console.table(rows)
}

module.exports = viewAllEmployees