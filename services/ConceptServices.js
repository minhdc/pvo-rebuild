const db = require('../db/db')

let Concept = db.Concept
let ConceptConceptRelation = db.ConceptConcept
let ConceptRelation = db.ConceptRelation

module.exports ={
    addConcept,
    getListConcept,
    getConceptById,
    getConceptByName,
    updateConceptById,
    deleteConceptById,   

    addConceptRelation,       
    getConceptRelationById,
    getConceptRelationByParentAndChild,
    
    updateConceptRelationById,
    deleteConceptRelationById,

}

function addConcept(params,done) {
    let concept = new Concept({
        concept:params.concept,
        conceptDesc: params.conceptDesc,
        picURL: params.picURL,        
        createdBy:params.idUser
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

///////////////////////////////////////////////
///////////////////////////////////////////////
function addConceptRelation(params,done){
    let conceptConceptRelation = new ConceptConceptRelation({
        id_parent: params.idparent,
        id_child: params.idchild,
        id_relation: params.idrelation,
        createdBy: params.userid
    })
    conceptConceptRelation.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}

function getConceptRelationById(params,done){
    ConceptConceptRelation.findOne({_id:params.idconceptrelation},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}



function getConceptRelationByParentAndChild(params,done){        
        ConceptConceptRelation.findOne(
            {
                id_parent:params.idparent,
                id_child:params.idchild
            },
            (err,results)=>{
                if(err){
                    return done(err)
                }else if(results != null){
                    ConceptRelation.findOne(
                        {
                            _id:results.id_relation
                        },
                        (err,results)=>{
                            console.log(results)
                            if(err){
                                console.log(err)
                                return done(err)
                            }else{
                                return done(results.relationName)
                            }
                    })
                }else{
                    return done(null,"No relation")
                }
            }
        )    
}


function updateConceptRelationById(params,done){
    ConceptConceptRelation.update(
        {_id:params.idconceptrelation, createdBy:params.iduser},
        {
            id_parent: params.idparent,
            id_child: params.idchild,
            id_relation:params.idrelation
        },(err,results)=>{
            if(err){
                console.log(err)
                return done(err)
            }else{
                return done(null,results)
            }
        })
}

function deleteConceptRelationById(params,done){
    ConceptConceptRelation.deleteOne({_id:params.idconceptrelation},(err,results)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            return done(null,results)
        }
    })
}