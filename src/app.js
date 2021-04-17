const express = require('express')

const {products} = require('./data')

const app = express()

app.get('/', (req, res)=>{
    res.status(200).send("Welcome to Home Page.")
})
// getting products json data
app.get('/api/products', (req, res)=>{
    res.status(200).json(products)
    res.end()
})

// getting single product from products json
app.get('/api/products/1', (req, res)=>{
    const product = products.find(prod =>{
        return prod.id = 1
    })
    res.status(200).json(product)
})




app.listen(3001, ()=>console.log('Server is running'))