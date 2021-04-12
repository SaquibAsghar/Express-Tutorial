const http  = require("http")

const PORT = process.env.PORT || 5000

const server = http.createServer((req, res)=>{
    console.log(`REQUEST METHOD : ${req.method}`);
    console.log(`REQUEST URL : ${req.url}`);
    let requestURL = req.url
    switch (requestURL) {
        case '/':
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h1>Welcome</h1>')
            res.end()
            break;
        case '/about':
            res.writeHead(200, {'content-type': 'text/html'})
            res.write('<h1>This is About page</h1>')
            res.end()
            break
        default:
            res.writeHead(404, {'content-type': 'text/html'})
            res.write('<h1>Page Not Found</h1>')
            res.end()
            break;
    }
    
})


server.listen(PORT, ()=>{
    console.log(`Server is up and runing at port ${PORT}`);
})