const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptExampleSchema = new Schema({    
    id_concept:{type:Schema.Types.ObjectId},
    id_example:{type:Schema.Types.ObjectId},
    id_relation:{type:Schema.Types.ObjectId},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})
ConceptExampleSchema.index({id_concept:1,id_example:1},{unique:true})
let ConceptExample = mongoose.model('concept_examples',ConceptExampleSchema)

module.exports = ConceptExample