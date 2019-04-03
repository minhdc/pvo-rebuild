const db = require('../db/db')

let Example = db.Example
let ConceptExample = db.ConceptExample
let ConceptExampleRelation = db.ConceptExampleRelation

module.exports = {
    addExample,
    getExampleByConceptId,
    updateExample,
    deleteExample,

    addConceptExample,
    listConceptExample,
    getConceptExampleByConceptAndExampleId,
    
    updateConceptExampleById,
    deleteConceptExampleById,
}

function addExample(params,done){
    let example = new Example({
        example: params.example,
        keywords:params.keywords,
        source:params.source,
        createdBy:params.iduser
    })
    example.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function getExampleByConceptId(params,done){
    ConceptExample.find(
        {id_concept:params.idconcept,createdBy:params.iduser},
        (err,results)=>{
            if(err){
                console.log(err)
                return done(err)
            }else{
                console.log(results)
                examples = []
                for (let each in results){
                    e = getExampleById(results[each].id_example)
                    if (e){
                        examples.push(e)
                    }
                }
                console.log("examples by conceptId: ",examples)
                return done(null,examples)
            }
        })
}

function getExampleById(id){
    Example.findById(id,(err,results)=>{
        if(err){
            console.log(err)
            return null
        }else{
            return results
        }
    })
}

function updateExample(params,done){
    
}

function deleteExample(params,done){
    
}

function addConceptExample(params,done){
    let conceptExample = new ConceptExample(
        {
            id_concept:params.idconcept,
            id_example:params.idexample,
            id_relation:params.idrelation,
            createdBy:params.userid
        }
    )
    conceptExample.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function listConceptExample(params,done){
    ConceptExample.find({createdBy:params.userid},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function getConceptExampleByConceptAndExampleId(params,done){
    ConceptExample.findOne(
        {
            id_concept:params.idconcept,
            id_example:params.idexample,
            createdBy:params.userid
        },(err,results)=>{
            if(err){
                console.log(err)
                return done(err)
            }else{
                ConceptExampleRelation.findOne(
                    {_id:results.id_relation},
                    (err,results) => {
                        if(err){
                            console.log(err)
                            return done(err)
                        }else{
                            return done(null,results.relationName)
                        }
                    }
                )
            }
        }
    )
}

function updateConceptExampleById(params,done){
    
}

function deleteConceptExampleById(params,done){
    
}