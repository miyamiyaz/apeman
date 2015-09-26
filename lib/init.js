/**
 * Initialize a directory as an apeman project.
 * @memberof module:apeman/lib
 * @function init
 */
"use strict";

var init = require('apeman-init'),
    signature = require('apeman-init/signature.json'),
    pkg = require('apeman-init/package.json');

var command = init.bind(this);
command.pkg = pkg;
command.signature = signature;
module.exports  = command;
