let express = require('express')
let router = express.Router()
let conceptRelationServices = require('../services/ConceptRelationServices')

router.post("/",addConceptRelation)
router.get('/',listConceptRelation)


module.exports = router

function addConceptRelation(req,res){
    conceptRelationServices.addRelation(req.body,(err,results)=>{
        console.log("bodee: ",req.body)
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function listConceptRelation(req,res){
    conceptRelationServices.listRelation(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}