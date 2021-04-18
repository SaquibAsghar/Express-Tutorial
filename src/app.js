const express = require("express");
const app = express();
const path = require('path')

const peopleRoute = require('../router/routes/people')
const peopleLogin = require('../router/routes/auth')

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/api/people', peopleRoute)

app.use('/login', peopleLogin)


// POST request

app.listen(3001, () => console.log("Server is up and running"));
