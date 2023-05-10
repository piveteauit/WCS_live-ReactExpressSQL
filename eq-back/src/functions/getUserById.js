const database = require('../config/database');

const getUserById = (request, response) => {
    database.query('SELECT city, email, firstname, id, language, lastname FROM users WHERE id = ?', [request.params.user_id])
        .then(([results]) => {
            return response.json(results[0])
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
}

module.exports = getUserById;