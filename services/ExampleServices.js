const db = require("../db/db")

let Example = db.Example
let ConceptExampleRelation = db.ConceptExampleRelation

module.exports = {
    addExample,
    listExample,
    
    deleteExample
}

function addExample(params,done){
    let example = new Example({
        example:params.example,
        keywords:params.keywords,
        source:params.source,
        relatedConcept:params.idconcept,
        idRelation:params.idrelation,
        createdBy:params.userid
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

function getConceptExampleRelation(params,done){
    Example.findOne(
        {
            _id:params.idexample
        },(err,results)=>{
            if(err){
                console.log(err)
                return done(err)
            }else{
                
            }
        }
    )
}

function listExample(params,done){
    Example.find((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function deleteExample(params,done){
    Example.deleteOne({_id:params.id},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}
