/**
 * Module dependencies
 */
var expat = require('node-expat')
  , stream = require('stream')
  , util = require('util');

var Hxpipe = module.exports = function Hxpipe (opts) {
  var parser = this.parser = new expat.Parser('UTF-8')
    , that = this;

  parser.on('startElement', function (name, attrs) {
    for (var k in attrs) {
      var v = attrs[k];
      that.push('A' + k.trim() + ' CDATA ' + v.trim() + '\n');
    }
    that.push('(' + name + '\n');
  });

  parser.on('endElement', function (name) {
    that.push(')' + name.trim() + '\n');
  });

  parser.on('text', function (text) {
    that.push('-' + text.trim() + '\n');
  });

  parser.on('error', function (err) {
    throw err;
  });

  stream.Duplex.call(this, opts);
};
util.inherits(Hxpipe, stream.Duplex);

Hxpipe.prototype._write = function (chunk, encoding, done) {
  this.parser.write(chunk);
  done();
};

Hxpipe.prototype._read = function (size) {
  return;
};
