const express = require('express')
let { people } = require("../../src/data");
const router = express.Router()

router.get("/", (req, res) => {
	res.status(200).json({ success: true, data: people });
});

router.post("/", (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(201).json({ success: true, person: name }).end();
    }
    return res.status(401).json({status: false, msg:'Please provide name value'}).end()
	
});

module.exports = router