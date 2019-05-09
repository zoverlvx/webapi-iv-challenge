import dotenv from "dotenv";
import server from "./api/server.mjs";
dotenv.config();

server.listen(process.env.PORT, () => {
	console.log(`Server Running on ${process.env.PORT}`);
});
