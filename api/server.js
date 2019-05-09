const express = require("express");
const helmet = require("helmet");

const server = express();

server.use(helmet());
server.use(express.json());
let id = 1;

const db = [
	{QOTD: process.env.QOTD},
	{id, name: "Zach"} 
]

server.get("/", async (req, res) => {
	try {
		res.status(200).json(db);
	} catch (error) {
		res.status(500).json({error: "Cannot retrieve users."});
	}
});

module.exports = server;
