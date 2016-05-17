var should = require('should');
var util = require('../lib/util');

describe('mixin', function() {
    var testFunc = function() {};

    var source = {
        name: 'admin',
        age: 20,
    };

    var extendA = {
        name: 'root',
        address: 'china'
    };

    var extendB = {
        name: 'root2',
        address: 'usa'
    };

    it('should be a object', function() {
        var result = util.mix({}, source, extendA, extendB);
        result.should.be.Object();
    });

    it('single param', function() {
        util.mix({
            testFunc: testFunc
        });

        util.testFunc.should.be.equal(testFunc);
    });

    it('test not override', function() {
        var result = util.mix({}, source, extendA, extendB, false);
        result.should.be.deepEqual({
            name: 'admin',
            address: 'china',
            age: 20
        });
    });

    it('test value', function() {
        var result = util.mix({}, source, extendA, extendB);
        result.should.be.deepEqual({
            name: 'root2',
            address: 'usa',
            age: 20
        });
    });
});
