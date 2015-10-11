/**
 * Run an apeman app.
 * @memberof module:apeman/lib
 * @function app
 */
"use strict";

var app = require('apeman-app'),
    done = require('./done'),
    signature = require('apeman-app/signature.json'),
    pkg = require('apeman-app/package.json');

var command = app.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = app.done || done;
module.exports  = command;
