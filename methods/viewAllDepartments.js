const viewAllDepartments = async (db) => {
    let [ rows ] = await db.query('SELECT * FROM departments')
    console.table(rows)
}

module.exports = viewAllDepartments