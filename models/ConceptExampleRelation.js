const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptExampleRelationSchema = new Schema({
    relationName:{type:Schema.Types.String,required:true,trim:true,unique:true},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

ConceptExampleRelation = mongoose.model('concept_example_relations',ConceptExampleRelationSchema)

module.exports = ConceptExampleRelation