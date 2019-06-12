const express = require("express");
const authRouter = require('../auth/authRouter')

const server = express();

server.use(express.json());

server.use('/api/auth', authRouter)

module.exports = server;