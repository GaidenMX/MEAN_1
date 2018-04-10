'use strict'
//cargamos express
const mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    config = require('./Config/config'),
    express = require('express'),
    middleware = require('./Backend/Middleware/Middleware'),
    //creamos una instancia de express
    app = express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/sesion', require("./Backend/Routes/PublicRoutes/SessionRoute"));

var normalizedPath = require('path').join(__dirname, "Backend/Routes/PrivateRoutes");
require('fs').readdirSync(normalizedPath).forEach(function(file) {
    var name = file.replace('.js', '');
    app.use('/private', middleware.ensureAuthenticated, require("./Backend/Routes/PrivateRoutes/" + name));
});

//middleware
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'});
});

mongoose.Promise = global.Promise;
mongoose.connect(config.DB); 

//iniciamos el servidor para que escuche peticiones en un puerto determinado
app.listen(config.PORT);