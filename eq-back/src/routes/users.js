const express = require('express');
const {getAllUsers, getUserById, createUser, updateUser, deleteUserById} = require('../functions')

const userRouter = express.Router();
// Récupère tous les users
userRouter.get('', getAllUsers);
// Récupère un user
userRouter.get('/:user_id', getUserById);
// Créer un user
userRouter.post('', createUser);
userRouter.put('/:user_id', updateUser)
userRouter.delete('/:user_id', deleteUserById)

module.exports = userRouter;