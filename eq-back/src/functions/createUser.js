const database = require('../config/database');

const createUser = (request, response) => {
    const {firstname, lastname, email, city, language} = request.body;
    

    database.query(`
        INSERT INTO users (firstname, lastname, email, city, language) 
        VALUES (?, ?, ?, ?, ?) 
        `
        , [firstname, lastname, email, city, language]
    )
        .then(([results]) => {
            return response.status(201).json(results)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
};

module.exports = createUser;