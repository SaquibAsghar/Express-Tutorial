const logger = (req, res, next)=>{
    const url = req.url
       const time = new Date().getFullYear()
       const method = req.method
       console.log(`URL = ${url}\n Method = ${method}\n Time = ${time}`);
       next()
   }

   module.exports = logger