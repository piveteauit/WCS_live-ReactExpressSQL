const express = require('express');
const getAllUsers = require('./src/functions/getAllUsers');
const getUserById = require('./src/functions/getUserById');
const createUser = require('./src/functions/createUser');
const updateUser = require('./src/functions/updateUser');
const cors = require('cors');

const EXPRESS_PORT = 3030;

const app = express();

const userRouter = express.Router();
// Récupère tous les users
userRouter.get('', getAllUsers);
// Récupère un user
userRouter.get('/:user_id', getUserById);
// Créer un user
userRouter.post('', createUser);

const corsOptions = {
    origin: ['http://localhost:3000'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))


app.use('/users', userRouter)

app.use(express.json());





app.listen(EXPRESS_PORT, () => console.log('Server is running on: %s', EXPRESS_PORT))
