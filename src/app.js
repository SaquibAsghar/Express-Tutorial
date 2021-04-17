const express = require('express')

const app = express()

// Using Middleware
const logger = (req, res, next)=>{
 const url = req.url
    const time = new Date().getFullYear()
    const method = req.method
    console.log(url, method, time);
    next()
}

app.get('/', logger,(req, res)=>{
   
    res.status(200).send("Home page")
})
app.get('/about', logger, (req, res)=>{
    res.status(200).send("About page")
})


app.listen(3001, ()=> console.log('Server is up and running'))