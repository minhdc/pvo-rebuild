const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const saltRounds = require('../config/masterconfig.json')

let Schema = mongoose.Schema

const UserSchema = new Schema({
    username:{type:Schema.Types.String,  required:true,trim:true,unique:true},
    password:{type:Schema.Types.String,required:true,trim:true},
    email:{type:Schema.Types.String,required:true,trim:true,unique:true},
    createdAt:{type:Schema.Types.Date,default:new Date()}
})
/* cannot use pre() ??
UserSchema.pre('save',(next)=>{
    console.log(saltRounds.saltRounds)
    
    this.password = bcrypt.hashSync(this.password,saltRounds.saltRounds)
    next()
})

*/
let User = mongoose.model('user',UserSchema)

module.exports = User