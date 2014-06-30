/**
 * Module dependencies
 */
var should = require('should');

/**
 * Unit under test
 */
var Hxpipe = require('../');

describe('hxpipe', function () {
  beforeEach(function () {
    this.pipe = new Hxpipe();
  });

  it('should emit the correct symbols', function (done) {
    this.pipe.write('<h1> headline </h1>');
    this.pipe.once('data', function (data) {
      var lines = data.toString().split('\n');

      lines[0].should.equal('(h1');
      lines[1].should.equal('-headline');
      lines[2].should.equal(')h1');

      done();
    });
  });
});
