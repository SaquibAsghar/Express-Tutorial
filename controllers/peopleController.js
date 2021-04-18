let { people } = require('../src/data');
const getPeople = (req, res) => {
	res.status(200).json({ success: true, data: people });
}

const postPeople = (req, res) => {
    const {name} = req.body
    if(name){
        return res.status(201).json({ success: true, person: name }).end();
    }
    return res.status(401).json({status: false, msg:'Please provide name value'}).end()
	
}

module.exports ={ getPeople, postPeople}