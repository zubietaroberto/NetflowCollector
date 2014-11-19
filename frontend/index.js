var express = require('express')
var app = express()
var morgan = require('morgan');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var minify = require('express-minify')


    //Import Routers
var apiRouter = require('./apiRouter');
var frontendRouter = require('./frontendRouter');

    //Logging middleware
app.use(morgan('dev'));

//Auto Minify
app.use(minify(
{
    js_match: /javascript/,
    css_match: /css/,
    sass_match: /scss/,
    less_match: /less/,
    stylus_match: /stylus/,
    coffee_match: /coffeescript/,
    cache: false
}))

// Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

    //Jade Configuration
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.static(path.join(__dirname, 'public')));

    //LESS configuration
app.use(require('less-middleware')(path.join(__dirname, 'public')));

    //Root route
app.get('/', frontendRouter);

    //Router for the API
app.use('/api', apiRouter);


//Reroute to the router
module.exports = app