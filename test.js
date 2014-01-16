var koa = require('koa');
var favicon = require('./');

var app = koa();

// use favicon middleware
app.use(favicon());

// index page
app.use(function* (next){
    this.body = "hello world";
});

// start the server
app.listen(3000);
console.log("App listen on 3000");