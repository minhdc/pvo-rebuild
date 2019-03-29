let jwt = require('jsonwebtoken')
let config = require('../config/masterconfig.json')
module.exports = {
    validateUser
}

function validateUser(req,res,next){
    console.log(req.headers)
    jwt.verify(req.headers['authorization'].split(" ")[1],config.secret,(err,decoded)=>{
        if(err){
            console.log(err)
            res.json({error:err.message})
        }else{
            req.body.userId=decoded.id
            next()
        }
    })
}