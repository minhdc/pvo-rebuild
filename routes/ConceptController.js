let express = require('express')
let router = express.Router()
let conceptServices = require('../services/ConceptServices')


router.get('/',getListConcept)
router.post('/',addConcept)
router.get('/id',getConceptById)

router.post('/relation',addConceptConceptRelation)
router.get('/relation',getConceptConceptRelationByParentAndChild)



module.exports = router

function getListConcept(req,res){
    conceptServices.getListConcept(req.query,(err,results)=>{
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
    conceptServices.getConceptById(req.query,(err,results)=>{
        if(err){
            res.send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}


function addConceptConceptRelation(req,res){
    conceptServices.addConceptRelation(req.body,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function getConceptConceptRelation(req,res){
    conceptServices.getConceptRelationById(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function getConceptConceptRelationByParentAndChild(req,res){
    conceptServices.getConceptRelationByParentAndChild(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}
