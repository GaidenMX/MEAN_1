'use strict'
//cargamos express
const mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./Config/config'),
    fs = require('fs'),
    express = require('express'),
    //creamos una instancia de express
    app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var normalizedPath = require('path').join(__dirname, "Backend/Routes/RoutesApp");
require('fs').readdirSync(normalizedPath).forEach(function(file) {
    var name = file.replace('.js', '');
    app.use('/api',require("./Backend/Routes/RoutesApp/" + name));
});

//middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

mongoose.Promise = global.Promise;
mongoose.connect(config.db); 

//iniciamos el servidor para que escuche peticiones en un puerto determinado
app.listen(config.port);