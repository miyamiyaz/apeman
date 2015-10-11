/**
 * 
 * @memberof module:apeman/lib
 * @function tree
 */
"use strict";

var tree = require('apeman-tree'),
    done = require('./done'),
    signature = require('apeman-tree/signature.json'),
    pkg = require('apeman-tree/package.json');

var command = tree.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = tree.done || done;
module.exports  = command;
