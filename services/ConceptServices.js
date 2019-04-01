const db = require('../db/db')

let Concept = db.Concept

module.exports ={
    addConcept,
    getListConcept,
    getConceptById,
    getConceptByName,
    updateConceptById,
    deleteConceptById,   
    addConceptRelation,                                                                                                       
}

function addConcept(params,done) {
    let concept = new Concept({
        concept:params.concept,
        conceptDesc: params.conceptDesc,
        picURL: params.picURL,        
        createdBy:params.iduser
    })
    concept.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }
        return done(null,results)
    })
}

function getListConcept(params,done){
    Concept.find({createdBy:params.iduser},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            console.log(params.iduser)
            console.log(results)
            return done(null,results)
        }
    })
}

function getConceptById(params,done){
    Concept.findOne({createdBy:params.iduser,_id:params.idconcept},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function getConceptByName(params,name){
    Concept.find({createdBy:params.iduser,concept:params.concept},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function updateConceptById(params,done){
    Concept.update({_id:params.idconcept,createdBy:params.iduser},{
        concept:params.concept,
        definition:params.definition,
        picURL:params.picURL
    },(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function deleteConceptById(params,done){
    Concept.deleteOne({_id:params.id},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}