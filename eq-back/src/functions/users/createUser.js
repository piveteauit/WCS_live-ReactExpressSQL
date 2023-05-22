const database = require('../../config/database');

const createUser = (request, response) => {
    const {firstname, lastname, email, city, language} = request.body;
    
    console.log(request.headers);

    database.query(`
        INSERT INTO users (firstname, lastname, email, city, language) 
        VALUES (?, ?, ?, ?, ?)
        `
        , [firstname, lastname, email, city, language]
    )
        .then(([results]) => {
            // result == {insertId: 12, ....}
            const {insertId} = results;


            return response.redirect(`${request.headers.referer}users/${insertId}`)
        })
        .catch((err) => {
            console.log(err)
            return response.sendStatus(500)
        })
};

module.exports = createUser;