const express = require('express');
const getAllUsers = require('./src/functions/getAllUsers');
const getUserById = require('./src/functions/getUserById');
const createUser = require('./src/functions/createUser');
const EXPRESS_PORT = 3030;

const app = express();

const userRouter = express.Router();
// Récupère tous les users
userRouter.get('', getAllUsers);
// Récupère un user
userRouter.get('/:user_id', getUserById);
// Créer un user
userRouter.post('', createUser);


app.use('/users', userRouter)

app.use(express.json());




app.listen(EXPRESS_PORT, () => console.log('Server is running on: %s', EXPRESS_PORT))
