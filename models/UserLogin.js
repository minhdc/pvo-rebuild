const mongoose = require('mongoose')

let Schema = mongoose.Schema

let UserLoginSchema = new Schema({
    iduser:{type:Schema.Types.ObjectId,  required:true,unique:true},
    token:{type:Schema.Types.String,required:true,trim:true},    
})