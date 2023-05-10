const database = require('../config/database');


const updateUser = (request, response) => {
    // Sauvegarder en base de données les nouvelles informations concernant l'utilisateur 
    const {user_id} = request.params;
    const {password} = request.body;
    console.log(user_id)
    // === const user_id = request.params.id;
    
    const sqlQuery = 'UPDATE users SET password = ? WHERE id = ?';

    database.query(sqlQuery, [password, user_id])
    .then(() => {
        return response.status(200).json({success: true})
    })
    .catch((err) => {
        console.log(err)
        return response.status(404).json({success: false})
    });
};

module.exports = updateUser;