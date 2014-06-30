#!/usr/bin/env node

/**
 * Module dependencies
 */
var Hxpipe = require('./')
  , fs = require('fs');

// Stream
var p = new Hxpipe();

// Arguments
var argv = process.argv;

// Shift 'node' off the argv 
if (argv[0] === 'node') argv.shift();

var file = argv[1];

if (file) {
  fs.createReadStream(file).pipe(p).pipe(process.stdout);
} else {
  process.stdin.pipe(p).pipe(process.stdout);
}
