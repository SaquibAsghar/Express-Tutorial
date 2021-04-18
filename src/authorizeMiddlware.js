const authorize = (req, res, next)=>{
    const {userName} = req.query
    if (userName){
        req.user={
            name: "John",
            id: 201
        }
        next()
    }
    else{
        return res.status(401).send('<h2>Unauthorize</h2>').end()
    }
}

module.exports = authorize