/**
 * Render template files.
 * @memberof module:apeman/lib
 * @function tmpl
 */
"use strict";

var tmpl = require('apeman-tmpl'),
    signature = require('apeman-tmpl/signature.json'),
    pkg = require('apeman-tmpl/package.json');

var command = tmpl.bind(this);
command.pkg = pkg;
command.signature = signature;
module.exports  = command;
