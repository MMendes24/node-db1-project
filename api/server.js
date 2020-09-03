const express = require("express");

const accountsRouter = require("../accounts/accountsRouter")

const server = express();

server.use(express.json());

server.use("/api/accounts", accountsRouter)

server.get("/", (req, res) => {
    res.status(200).send("Server online.")
})

module.exports = server;
