const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptConceptSchema = new Schema({
    id_parent:{type:Schema.Types.ObjectId},
    id_child:{type:Schema.Types.ObjectId},
    id_relation:{type:Schema.Types.ObjectId},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

module.exports = ConceptConceptSchema