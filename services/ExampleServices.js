const db = require("../db/db")

let Example = db.Example
let ConceptExampleRelation = db.ConceptExampleRelation

module.exports = {
    addExample,
    listExample,
    getConceptExampleRelation,
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
                ConceptExampleRelation.findOne(
                    {_id:results.idRelation},
                    (err,results)=>{
                        if(err){
                            console.log(err)
                            return done(err)
                        }else if (results != null) {
                            return done(null,results.relationName)
                        }
                    }
                )
            }
        }
    )
}

function listExample(params,done){
    Example.find({
        createdBy:params.userid
    },(err,results)=>{
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
