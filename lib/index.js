/**
 * Meta application framework.
 * @module apeman
 */

"use strict";

module.exports = {
    get cli() { return require('./cli'); },
    get done() { return require('./done'); },
    get init() { return require('./init'); },
    get scaffold() { return require('./scaffold'); },
    get show() { return require('./show'); },
    get task() { return require('./task'); },
    get tmpl() { return require('./tmpl'); },
    get watch() { return require('./watch'); }
};