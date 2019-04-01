const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptRelationSchema = new Schema({
    relationName:{type:Schema.Types.String,required:true,trim:true},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

let ConceptRelation = mongoose.model('concept_relations',ConceptRelationSchema)

module.exports = ConceptRelation