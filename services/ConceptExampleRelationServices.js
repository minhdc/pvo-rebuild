const db = require('../db/db')

let ConceptExampleRelation = db.ConceptExampleRelation

module.exports = {
    addConceptExampleRelation,
    listConceptExampleRelation,
    updateConceptExampleRelation,
    deleteConceptExampleRelation,
}

function addConceptExampleRelation(params,done){
    let conceptExampleRelation = new ConceptExampleRelation({
        relationName: params.relationname,
        createdBy: params.userid
    })
    conceptExampleRelation.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function listConceptExampleRelation(params,done){
    ConceptExampleRelation.find((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function updateConceptExampleRelation(params,done){
    ConceptExampleRelation.update(
        {_id:params.idconceptexample},
        {
            relationName:params.relationname
        },
        (err,results)=>{
            if(err){
                console.log(err)
                return done(err)
            }else{
                return done(null,results)
            }
        }
    )
}

function deleteConceptExampleRelation(params,done){
    ConceptExampleRelation.deleteOne({_id:params.idconceptexample},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}