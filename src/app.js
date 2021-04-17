const express = require("express");
const logger = require("./loggerMiddleware");

const app = express();

// Using Middleware
app.use('/api',logger)
// this middleware only work in path containg api/anypath

app.get("/", logger, (req, res) => {
	res.status(200).send("Home page");
});
app.get("/about", logger, (req, res) => {
	res.status(200).send("About page");
});
app.get("/api/products", logger, (req, res) => {
	res.status(200).send("Product page");
});
app.get("/api/items", logger, (req, res) => {
	res.status(200).send("Items page");
});

app.listen(3001, () => console.log("Server is up and running"));
