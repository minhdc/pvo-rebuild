const config = require('../config/masterconfig.json')
const mongoose = require('mongoose')

mongoose.connect(config.connectionString,{useNewUrlParser:true})
mongoose.Promise = global.Promise

module.exports = {
    
}