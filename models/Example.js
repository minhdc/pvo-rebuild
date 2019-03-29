const mongoose = require('mongoose')
let Schema = mongoose.Schema

let ExampleSchema = new Schema({
    example:{type:Schema.Types.String,required:true,trim:true},
    keywords:{type:Schema.Types.Array,default:["uncategorized"]},
    source:{type:Schema.Types.String,trim:true},
    createdAt:{type:Schema.Types.Date,default:new Date()},
    createdBy:{type:Schema.Types.ObjectId,required:true}
})

module.exports = ExampleSchema