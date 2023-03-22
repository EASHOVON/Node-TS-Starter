import * as dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config();
import express from "express";
import cors from "cors";
import router from "./Routes/Users/index.js";
import admin from "firebase-admin";
import { users } from "./Utils/firebase.js";

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.port || 5000;

app.get("/", async (req, res) => {
	const allUsers = (await users.get()).docs;

	res.json(allUsers);
});

app.use("/users", router);

app.listen(port, () => {
	console.log(`your app is on 🔥 on port ${port}`);
});
