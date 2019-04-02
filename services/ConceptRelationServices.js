const db = require('../db/db')

let ConceptRelation = db.ConceptRelation

module.exports = {
    addRelation,
    listRelation,
    updateRelation
}

function addRelation(params,done){
    let conceptRelation = new ConceptRelation({
        relationName:params.relationname,
        createdBy:params.userid
    })

    conceptRelation.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function updateRelation(params,done){
    
    ConceptRelation.update({_id:params.idrealtion,createdBy:params.iduser},{
        relationName:params.relationName
    },(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function listRelation(params,done){
    ConceptRelation.find((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}