/**
 * Watch files to trigger action.
 * @memberof module:apeman/lib
 * @function watch
 */
"use strict";

var watch = require('apeman-watch'),
    signature = require('apeman-watch/signature.json'),
    pkg = require('apeman-watch/package.json');

var command = watch.bind(this);
command.pkg = pkg;
command.signature = signature;
module.exports  = command;
