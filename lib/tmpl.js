/**
 * Render template files.
 * @memberof module:apeman/lib
 * @function tmpl
 */
"use strict";

var tmpl = require('apeman-tmpl'),
    done = require('./done'),
    signature = require('apeman-tmpl/signature.json'),
    pkg = require('apeman-tmpl/package.json');

var command = tmpl.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = tmpl.done || done;
module.exports  = command;
