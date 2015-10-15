/**
 * Meta application framework.
 * @module apeman
 */

"use strict";

module.exports = {
    get app() { return require('./app'); },
    get cli() { return require('./cli'); },
    get doc() { return require('./doc'); },
    get done() { return require('./done'); },
    get init() { return require('./init'); },
    get scaffold() { return require('./scaffold'); },
    get show() { return require('./show'); },
    get task() { return require('./task'); },
    get tmpl() { return require('./tmpl'); },
    get tree() { return require('./tree'); },
    get watch() { return require('./watch'); }
};