/**
 * 
 * @memberof module:apeman/lib
 * @function doc
 */
"use strict";

var doc = require('apeman-doc'),
    done = require('./done'),
    signature = require('apeman-doc/signature.json'),
    pkg = require('apeman-doc/package.json');

var command = doc.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = doc.done || done;
module.exports  = command;
