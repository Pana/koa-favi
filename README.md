koa-favi
==
The official [favicon middleware](https://github.com/koajs/favicon) writen by TJ simply bounce annoying favicon requests with a 404.

`koa-favi` act like `connect.favicon`. Serve the file you specify by the path parameter as favicon.
If not specify or the file is not exist use the default Koa logo.


## Install 
```
$ npm install koa-favi
```

## Example
```
var koa = require('koa');
var favicon = require('koa-favi');

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

* Design a beautiful Koa favicon.ico

## License
MIT

