const db = require('../db/db')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const secretKey = require('../config/masterconfig.json')
const saltRounds = require('../config/masterconfig.json')
let User = db.User

module.exports = {
    addUser,
    authenticate,
    addToken,
    getUserById,
}

function addUser(params,done){
    let password = bcrypt.hashSync(params.password,saltRounds.saltRounds)
    let user = new User({
        username:params.username,
        password:password,
        email:params.email,
    })

    user.save((err,results)=>{
        if(err){
            console.log(err)
            return done(err)    //duplicated == 11000
        }
        return done(null,{insertedId:results._id})
    })
}

function authenticate(params,done){
    User.findOne({username:params.username},(err,userInfo)=>{
        if(err){
            console.log(err)
            return done(err)
        }else{
            if(bcrypt.compareSync(params.password,userInfo.password)){
                const token = jwt.sign({id:userInfo.iduser},secretKey.secret,{expiresIn:'1h'})
                results = {
                    status:"success",
                    message:"user found",
                    token:token
                }
                return done(null,results)            
            }else{
                console.log({error:"incorrect username / password"})                
                return done({error:"incorrect username / password"})
            }          
        }

    })
}

function addToken(){

}

function getUserById(){
    
}