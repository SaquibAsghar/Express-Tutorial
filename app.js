const http  = require("http")

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    console.log(`REQUEST METHOD : ${req.method}`);
    console.log(`REQUEST URL : ${req.url}`);
    res.writeHead(200,{'content-type':'text/html'})
    res.write('<h1>Welcome</h1>')
    res.end()
})


server.listen(PORT, ()=>{
    console.log(`Server is up and runing at port ${PORT}`);
})