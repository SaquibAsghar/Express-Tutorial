const express = require("express");
const app = express();
const path = require('path')
let { people } = require("./data");

app.use(express.static(path.join(__dirname, '../public')))

app.get("/api/people", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

app.listen(3001, () => console.log("Server is up and running"));
