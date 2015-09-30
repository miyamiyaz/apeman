/**
 * Show apemanfile configuration.
 * @memberof module:apeman/lib
 * @function show
 */
"use strict";

var show = require('apeman-show'),
    done = require('./done'),
    signature = require('apeman-show/signature.json'),
    pkg = require('apeman-show/package.json');

var command = show.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = show.done || done;
module.exports  = command;
