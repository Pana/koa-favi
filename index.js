/*
* dependencies
*/
var crypto = require('crypto');
var fs = require('fs');
var DEFAULT = __dirname + '/favicon.ico';

/**
* Bounce favicon requests.
*
* @param {String} path
* @param {Object} options
* @api public
*
*/
module.exports = function (path, options) {
    var options = options || {}
    , path = path || DEFAULT
    , maxAge = options.maxAge || 86400000
    , icon; // favicon cache

    return function *favicon(next){
        if ('/favicon.ico' == this.path) {
            if (icon) {
                this.set(icon.headers);
                this.body = icon.body;
            } else {
                try{
                    var buf = yield readFile(path);    
                }catch(e){
                    var buf = yield readFile(DEFAULT);
                }
                icon = {
                    headers: {
                        'Content-Type': 'image/png'
                        , 'Content-Length': buf.length
                        , 'ETag': '"' + md5(buf) + '"'
                        , 'Cache-Control': 'public, max-age=' + (maxAge / 1000)
                    },
                    body: buf
                };
                this.set(icon.headers);
                this.body = icon.body;
            }
        }else{
            // if not favicon.ico request yield downstream middleware
            yield next;
        }
    };
};

/**
* thunk like readFile
*
* @param {String} file
* @return {Function} 
* @api private
*
*/
function readFile (file) {
    return function (fn) {
        return fs.readFile(file, fn);
    }
}

/**
* md5 helper
*
* @param {String} str
* @param {String} encoding (optional)
* @api private
*
*/
function md5(str, encoding){
  return crypto
    .createHash('md5')
    .update(str, 'utf8')
    .digest(encoding || 'hex');
};