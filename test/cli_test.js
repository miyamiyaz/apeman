/**
 * Test case for cli.
 * Runs with nodeunit.
 */

var cli = require('../lib/cli.js'),
    execcli = require('execcli');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Cli'] = function (test) {
    var configuration = require.resolve('../doc/mocks/mock-Apemanfile.js');
    execcli('node', [configuration, 'show', {
        configuration: configuration
    }], function (err) {
        test.ifError(err);
        test.done();
    });
};

