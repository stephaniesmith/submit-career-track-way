const assert = require('assert');
const calc = require('../lib/calc');

// "suite" feature for test. `it` will be outlined under this label
describe('calculator', () => {
    // `it` is mocha's way of "registering" a test function
    it('add', () => {
        // exercising the code we want to test
        // (in TDD also the code we want to write)
        const sum = calc.add(1, 2);
        // make an assertion about what is "pass"
        // paramerters: actual, expected
        assert.equal(sum, 3);
    });
});