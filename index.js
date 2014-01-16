/**
 * Bounce favicon requests.
 */
module.exports = function(path){
  return function *favicon(next){
    if ('/favicon.ico' == this.path) this.throw(404);
    yield next;
  }
}