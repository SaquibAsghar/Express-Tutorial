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
app.get('/api/products/:product_ID', (req, res)=>{
    // here product_ID is use as placeholder to get specifed product
    // console.log("param: ", req.params);
    const {product_ID} = req.params
    // console.log(product_ID);
    const singleProduct = products.find(prod =>{
        return prod.id === parseInt(product_ID)
    })
    res.status(200).json(singleProduct)
})




app.listen(3001, ()=>console.log('Server is running'))