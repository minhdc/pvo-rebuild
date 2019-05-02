var express = require('express');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var routes = require('./routes/index');
var verify = require('./services/verify')
var users = require('./routes/UserController');
var concepts = require('./routes/ConceptController');
var conceptRelations = require("./routes/ConceptRelationController");    
var conceptExampleRelations = require("./routes/ConceptExampleRelationController");    
var examples = require('./routes/ExampleController');

var swaggerJsDoc = require('swagger-jsdoc')

var app = express();


var swaggerDef = {
    info: {
        title: 'PVO Swagger API',
        version:'0.0.1',
        description:'PVO',
    },
    host:'localhost:3333',
    basePath:'/'
}

var options = {
    swaggerDefinition: swaggerDef,
    apis:['./routes/*.js'],
}

//init swagger
var swaggerSpec = swaggerJsDoc(options)

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);
app.use('/concepts',verify.validateUser,concepts)
app.use('/conceptRelations/',verify.validateUser,conceptRelations)
app.use('/conceptExampleRelations/',verify.validateUser,conceptExampleRelations)
app.use('/examples',verify.validateUser,examples)

/// catch 404 and forwarding to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});


app.get('/swagger.json',(req,res)=>{
    //res.setHeader('Content-Type','application/json')
    res.status(200).send(swaggerSpec)
})

/// error handlers


// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
