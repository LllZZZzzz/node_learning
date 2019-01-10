var express=require('express');
var bodyParser = require('body-parser');
var path=require('path');
var app=express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var session=require('express-session')
app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}))
var router=require('./router.js');
app.use(router);
app.engine('html',require('express-art-template'));
app.set("views","../views");
app.use('/public/',express.static(path.join(__dirname,'../public/')));
app.use('/node_modules/',express.static(path.join(__dirname,'../node_modules/')));
app.listen(5000,function() {
	console.log("开启");
});