const database = require('../config/database');


const updateUser = (request, response) => {
    // Sauvegarder en base de données les nouvelles informations concernant l'utilisateur 
    return response.status(200).json({
        result: "Tout s'est bien passé"
    })
};

module.exports = createUser;