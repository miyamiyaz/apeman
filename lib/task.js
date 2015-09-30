/**
 * Run tasks.
 * @memberof module:apeman/lib
 * @function task
 */
"use strict";

var task = require('apeman-task'),
    done = require('./done'),
    signature = require('apeman-task/signature.json'),
    pkg = require('apeman-task/package.json');

var command = task.bind(this);
command.pkg = pkg;
command.signature = signature;
command.done = task.done || done;
module.exports  = command;
