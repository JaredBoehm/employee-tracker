const viewAllRoles = async (db) => {
    let [ rows ] = await db.query('SELECT * FROM roles LEFT JOIN departments ON roles.department_id = departments.department_id')
    console.table(rows)
}

module.exports = viewAllRoles