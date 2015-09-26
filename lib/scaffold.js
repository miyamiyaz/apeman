/**
 * Generate project scaffold.
 * @memberof module:apeman/lib
 * @function scaffold
 */
"use strict";

var scaffold = require('apeman-scaffold'),
    signature = require('apeman-scaffold/signature.json'),
    pkg = require('apeman-scaffold/package.json');

var command = scaffold.bind(this);
command.pkg = pkg;
command.signature = signature;
module.exports  = command;
