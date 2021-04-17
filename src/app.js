const express = require("express");
const logger = require("./loggerMiddleware");
const authorize = require('./authorizeMiddlware')

const app = express();

// Using Middleware
app.use([logger, authorize])
// this middleware only work in path containg api/anypath

app.get("/", (req, res) => {
	res.status(200).send("Home page").end();
});
app.get("/about", (req, res) => {
	res.status(200).send("About page").end();
});
app.get("/api/products", (req, res) => {
	res.status(200).send("Product page").end();
});
app.get("/api/items", (req, res) => {
	res.status(200).send("Items page").end();
});

app.listen(3001, () => console.log("Server is up and running"));
