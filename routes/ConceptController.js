let express = require('express')
let router = express.Router()
let conceptServices = require('../services/ConceptServices')

router.get('/',(req,res)=>{
    conceptServices.getListConcept(req,res)
})

module.exports = router