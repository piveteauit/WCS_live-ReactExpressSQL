const express = require('express');
const userRouter = require('./src/routes/users');
/*
const getAllUsers = require('./src/functions/getAllUsers');
const getUserById = require('./src/functions/getUserById');
const createUser = require('./src/functions/createUser');
const updateUser = require('./src/functions/updateUser');
*/

const cors = require('cors');

const EXPRESS_PORT = 3030;

const app = express();

const corsOptions = {
    origin: ['http://localhost:3002'],
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
app.use(cors(corsOptions))
app.use(express.json());



app.use('/api/users', userRouter)
app.listen(EXPRESS_PORT, () => console.log('Server is running on: %s', EXPRESS_PORT))
