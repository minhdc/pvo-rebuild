let express = require('express')
let router = express.Router()
let conceptExampleRelationServices = require('../services/ConceptExampleRelationServices')

router.post("/",addConceptExampleRelation)
router.get('/',listConceptExampleRelation)


module.exports = router

function addConceptExampleRelation(req,res){
    conceptExampleRelationServices.addConceptExampleRelation(req.body,(err,results)=>{
        console.log("bodee: ",req.body)
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function listConceptExampleRelation(req,res){
    conceptExampleRelationServices.listConceptExampleRelation(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}