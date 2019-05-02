let express = require('express')
let router = express.Router()

let conceptExampleServices = require("../services/ConceptExampleServices")
let exampleServices = require("../services/ExampleServices")

router.get("/",listExample)
router.post("/",addExample)
router.get("/relation",getConceptExampleRelation)

module.exports = router

function listExample(req,res){
    exampleServices.listExample(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function addExample(req,res){
    exampleServices.addExample(req.body,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function getConceptExampleRelation(req,res){
    exampleServices.getConceptExampleRelation(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function listConceptExample(req,res){
    conceptExampleServices.listConceptExample(req.query,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}

function addConceptExample(req,res){
    conceptExampleServices.addConceptExample(req.body,(err,results)=>{
        if(err){
            res.status(400).send({error:err.errmsg})
        }else{
            res.status(200).send(results)
        }
    })
}