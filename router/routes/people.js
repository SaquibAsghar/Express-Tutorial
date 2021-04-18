const express = require('express')
const {getPeople, postPeople} = require('../../controllers/peopleController')

const router = express.Router()

router.get("/", getPeople);

router.post("/", postPeople);

module.exports = router