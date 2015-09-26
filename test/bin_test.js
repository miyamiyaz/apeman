/**
 * Test case for bin.
 * Runs with nodeunit.
 */

var bin = require.resolve('../bin/apeman'),
    execcli = require('execcli');

exports.setUp = function (done) {
    done();
};

exports.tearDown = function (done) {
    done();
};

exports['Initialize a project.'] = function (test) {
    execcli(bin, [
        'init',
        {
            dirname: __dirname + '/../tmp/testing-init',
            force: true
        }], function (err) {
        test.ifError(err);
        test.done();
    });
};

exports['Show project config.'] = function (test) {
    execcli(bin, [
        'show',
        'tasks',
        {
            configuration: require.resolve('../doc/mocks/mock-Apemanfile.js')
        }], function (err) {
        test.ifError(err);
        test.done();
    });
};


exports['Generate scaffold.'] = function (test) {
    execcli(bin, [
        'scaffold',
        'plain',
        __dirname + '/tmp/testing-scaffold',
        {
            straight: true,
            force: true
        }
    ], function (err) {
        test.ifError(err);
        test.done();
    });
};


exports['Run tmpl.'] = function (test) {
    execcli(bin, [
        'tmpl',
        {
            list: true,
            configuration: require.resolve('../doc/mocks/mock-Apemanfile.js')
        }], function (err) {
        test.ifError(err);
        test.done();
    });
};
