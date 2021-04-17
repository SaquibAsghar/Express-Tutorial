const express = require('express')

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send("Home page")
})

app.get('/about', (req, res)=>{
    res.status(200).send("About page")
})

app.all('*', (req, res)=>{
    res.status(404).send("Page not found")
})

app.listen(3001, ()=>console.log('Server is running'))