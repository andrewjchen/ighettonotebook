var express = require('express');
//var os = require('os');
var exphbs  = require('express-handlebars');
var app = express();
var bodyParser = require('body-parser')
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 

app.use(express.static('public')); //http://expressjs.com/starter/static-files.html

app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/', function (req, res) { //request from browser, 
  res.render('home');
});

app.get('/wow', function (req, res) {
  res.send('Hello World! \n Wow!');
});

app.get('/echo/:word', function (req, res) {
  var word = req.params.word;
  res.send(word);
});

app.post('/program', function (req, res) {
  // debugger;
  report = {prints : []}
  consolelog = function(strr) {
  	report.prints.push(strr);
  }
  //evalutes in javascript.
  var result = eval(req.body.program);


  //
  console.log(result);
  report.retu = result

  res.send(report);
});


var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
