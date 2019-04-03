let express = require('express')
let router = express.Router()

let conceptExampleServices = require('../services/ConceptExampleServices')
let exampleServices = require("../services/ExampleServices")

router.get("/",getConceptExampleByConceptAndExample)
router.post('/',addConceptExample)

module.exports = router

function getConceptExampleByConceptAndExample(req,res){
    conceptExampleServices.getConceptExampleByConceptAndExampleId(req.query,(err,results)=>{
        if(err){
            res.status(400).send(err)
        }else{
            res.status(200).send(results)
        }
    })
}

function addConceptExample(req,res){
    exampleServices.addExample(req.body,(err,results)=>{
        if(err){
            res.status(400).send(err)
        }else{
            conceptExampleServices.addConceptExample(req.body,(err,results)=>{
                if(err){
                    res.status(400).send(err)
                }else{
                    res.status(200).send(results)
                }
            })
        }
    })
    
}