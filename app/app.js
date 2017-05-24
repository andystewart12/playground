var express = require('express');
var fs = require('fs');
var http = require('http');
var handlebars = require('express-handlebars');
var path = require('path');


var app = express();

app.user = null;

app.all('/home', authFilter);
app.all('/test', authFilter);

function authFilter(req, res, next) {
    if (app.user == null) {
        res.redirect('/');
    } else {
        next();
    }
}

var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));

var hbs = handlebars.create({
    layoutsDir: 'views/layouts',
    extName: 'html',
    defaultLayout: 'global'
});

app.engine('html', hbs.engine);
app.set('view engine', 'html');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

app.use(express.static('models'));
app.use(express.static('content'));
app.use(express.static('scripts'));

fs.readdirSync('./controllers').forEach(function (file) {
    if (file.substr(-3)=='.js') {
        route = require('./controllers/' + file);
        route.controller(app);
    }
});



function normalizePort(val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

var port = normalizePort(process.env.PORT || '80');
app.set('port', port);

var server = http.createServer(app);
server.listen(port);

