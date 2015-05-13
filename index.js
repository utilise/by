var key = require('key')

module.exports = function by(k, v){
  return function(o){
    var d = key(k)(o)
    return d && v && d.toLowerCase && v.toLowerCase 
      ? d.toLowerCase() === v.toLowerCase()
      : d == v
  }
}