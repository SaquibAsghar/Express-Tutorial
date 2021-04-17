const logger = (req, res, next)=>{
    const url = req.url
       const time = new Date().getFullYear()
       const method = req.method
       console.log(url, method, time);
       next()
   }

   module.exports = logger