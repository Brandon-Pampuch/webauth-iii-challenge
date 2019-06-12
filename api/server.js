const express = require("express");
const cors = require('cors');
const authRouter = require('../auth/authRouter')
const userRouter = require('../user/userRouter')

const server = express();

server.use(express.json());
server.use(cors( 
    {
        credentials : true,
        origin : true,
    }
));

server.use('/api/auth', authRouter)
server.use('/api/user', userRouter)

module.exports = server;