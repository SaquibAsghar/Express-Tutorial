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
    if(!singleProduct) {
        res.status(404).send("<h2>Product does not exist</h2><a href = '/api/products'>Goto Homepage")
    }else{
        res.status(200).json(singleProduct)
        res.end()
    }
    
})

app.get('/api/products/:productId/reviews/:reviewId', (req, res)=>{
    console.log(req.params)
    res.status(200).send("Reviews")
})

app.get('/api/v1/query', (req, res)=>{
    const {search, limit} = req.query
    let copyProduct = [...products]
    if(search){
        
        copyProduct = copyProduct.filter(prod=>{
            return prod.name.startsWith(search)
        })
    }
    if(limit){
        copyProduct = copyProduct.slice(0, parseInt(limit))
    }
    if (copyProduct.length) {
        return  res.status(200).json({
            success: true, 
            data: copyProduct
        }).end()
            
    }
   // res.status(200).send('<h2>No Match Found</h2>')
    return res.status(200).json({
            success: true,
            data : []
        }).end()
    
    
})




app.listen(3001, ()=>console.log('Server is running'))