var express = require('express');
var router = express.Router();
let userServices = require('../services/UserServices')
/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
});

router.post('/register',(req,res)=>{
  userServices.addUser(req.body,(err,results)=>{
    if(err){      
      res.status(401).send(err)
    }else{
      res.status(200).send(results)
    }
  })
})

router.post('/authenticate',(req,res)=>{
  userServices.authenticate(req.body,(err,results)=>{
    if(err){
      res.status(401).send(err)
    }else{
      res.status(200).send(results)
    }
  })
})

module.exports = router;
