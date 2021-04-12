const http  = require("http")

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    res.end("Welcome")
})


server.listen(PORT, ()=>{
    console.log(`Server is up and runing at port ${PORT}`);
})