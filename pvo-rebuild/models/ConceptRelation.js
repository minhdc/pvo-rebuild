const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptRelationSchema = new Schema({
    relationName:{type:Schema.Types.String,required:true,trim:true},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

module.exports = ConceptRelationSchema