const database = require('../config/database');

const fields = [
    "email", "firstname", "id", "lastname"
]

const getAllUsers = (request, response) => {
    

    /**
     * city, email, firstname, id, language, lastname, password
     */

    database.query(`SELECT ${fields} FROM users`)
        .then(([results]) => {
            return response.json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getAllUsers;