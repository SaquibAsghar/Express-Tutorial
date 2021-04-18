const express = require("express");
const app = express();
const path = require('path')

const peopleRoute = require('../router/routes/people')

app.use(express.static(path.join(__dirname, '../public')))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/api/people', peopleRoute)


// POST request
app.post('/login', (req, res)=>{
    const {name} = req.body
    if(name){
        return res.status(200).send(`<h1>Welcome, ${name}</h1>`).end()
    }
    return res.status(401).send('Please provide credential').end()
})
app.listen(3001, () => console.log("Server is up and running"));
