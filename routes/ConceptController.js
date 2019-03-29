let express = require('express')
let router = express.Router()
let conceptServices = require('../services/ConceptServices')

router.get('/',getListConcept)
router.post('/',addConcept)
router.get('/:id',getConceptById)
module.exports = router

function getListConcept(req,res){
    conceptServices.getListConcept(req.body,(err,results)=>{
        if(err){
            res.send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function addConcept(req,res){
    conceptServices.addConcept(req.body,(err,results)=>{
        if(err){
            res.send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function getConceptById(req,res){
    conceptServices.getConceptById(req.body,(err,results)=>{
        if(err){
            res.send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}


