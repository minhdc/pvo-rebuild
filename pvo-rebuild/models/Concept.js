const mongoose = require('mongoose')

let Schema = mongoose.Schema

let ConceptSchema = new Schema({
    concept:{type:Schema.Types.String,required:true,trim:true,unique:true},
    conceptDesc:{type:Schema.Types.String,required:false,trim:true},
    picURL:{type:Schema.Types.Url,required:false},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

module.exports = ConceptSchema