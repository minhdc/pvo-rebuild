const db = require('../db/db')

let Example = db.Example
let ConceptExample = db.ConceptExample

module.exports = {
    addExample,
    getExampleByConceptId,
    updateExample,
    deleteExample,
    addConceptExample,
    getConceptExampleByConceptId,
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
    
}

function getConceptExampleByConceptId(params,done){
    
}

function updateConceptExampleById(params,done){
    
}

function deleteConceptExampleById(params,done){
    
}