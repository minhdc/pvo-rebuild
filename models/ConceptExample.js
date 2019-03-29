const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ConceptExampleSchema = new Schema({    
    id_concept:{type:Schema.Types.ObjectId},
    id_example:{type:Schema.Types.ObjectId},
    id_relation:{type:Schema.Types.ObjectId},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

module.exports = ConceptExampleSchema