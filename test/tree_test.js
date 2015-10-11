/**
 * Test case for tree.
 * Runs with nodeunit.
 */

var tree = require('../lib/tree.js');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Tree'] = function (test) {
    tree({
        configuration: require.resolve('../doc/mocks/mock-Apemanfile.js')
    }, function (err) {
        test.ifError(err);
        test.done();
    });
};

