koa-favi
==
favicon middleware for koa. Serve the file you specify by the path parameter as favicon.
If not specify or the file is not exist use the default Koa logo.


## Install 
```
$ npm install koa-favi
```

## Example
```
var koa = require('koa');
var favicon = require('./');

var app = koa();

// use favicon middleware
app.use(favicon());
// or app.use(favicon('/favicon/path'));

// index page
app.use(function* (next){
    this.body = "hello world";
});

// start the server
app.listen(3000);
console.log("App listen on 3000");
```

## API
`favi(path, options)`

supported options

* maxAge  cache time in milliseconds


## TODO

* Design a beautiful favicon.ico

## License
MIT

