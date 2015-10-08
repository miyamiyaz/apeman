/**
 * Configuration file for apeman projects.
 * @see https://github.com/apeman-labo/apeman
 */

"use strict";

module.exports = {
    /** Current working directory path */
    get $cwd() {
        return __dirname;
    },
    /** Package data. */
    get $pkg() {
        return require('../../package.json');
    },
    /**
     * apeman app configurations.
     * @see https://github.com/apeman-labo/apeman-app
     */
    get $apps() {
        return {}
    },
    /**
     * apeman tmpl configurations.
     * @see https://github.com/apeman-labo/apeman-tmpl
     */
    get $tmpls() {
        return {}
    },
    /**
     * apeman task configurations.
     * @see https://github.com/apeman-labo/apeman-task
     */
    get $tasks() {
        return {
            'mock-task-01': function (ctx, callback) {
                callback(null);
            }
        }
    }
};


if (!module.parent) {
    // Execute this file as apeman bin.
    require('../../lib/cli')(process.argv);
}
