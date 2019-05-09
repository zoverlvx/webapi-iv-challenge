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

server.post("/", async (req, res) => {
// a question about the use of async when await is not needed
// question about errorHandler vs responseHandler from yesterday
// when to use "error" and when to use "message"?
	try {
		const {name} = req.body;
		if (typeof name === "string") {
			id+=1
			db.push({id, name})
			res.status(201).json(db)
		}
		if (typeof name !== "string") {
			res.status(400).json({error: "Please, submit name"})
		}
	} catch (error) {
		res.status(500).json({error: "Error posting user"})
	}
})

module.exports = server;
