/**
 * Execute commands.
 * @memberof module:apeman/lib
 * @function cli
 * @example
 *    cli(process.argv);
 */

"use strict";

var execcli = require('execcli'),
    bin = require.resolve('../bin/apeman');

/** @lends cli */
function cli(argv, callback) {
    var cwd = _cwd(argv[1]);
    var args = [].concat(argv).slice(2);
    execcli(bin, args, {
        cwd: cwd
    }, callback);
}

function _cwd(filename) {
    try {
        return require(filename)['$cwd'];
    } catch (e) {
        return null;
    }
}

module.exports = cli;
