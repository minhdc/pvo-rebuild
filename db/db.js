const config = require('../config/masterconfig.json')
const mongoose = require('mongoose')

mongoose.connect(config.connectionString,{useNewUrlParser:true}) //autoIndex = false -> for production
mongoose.Promise = global.Promise



module.exports = {
    User: require('../models/User'),
    Concept: require('../models/Concept'),
    Example: require('../models/Example'),
    ConceptRelation: require("../models/ConceptRelation"),
    ConceptConcept: require('../models/ConceptConcept'),
    ConceptExampleRelation: require("../models/ConceptExampleRelation"),
    ConceptExample: require('../models/ConceptExample')
}