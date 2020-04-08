'use strict';

/*
 * Create a `yell` function that takes a string
 * and return the same string in upper case
 *
 */

// Your code:
function yell(str) {
    return str.toUpperCase();
}

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof yell, 'function');
assert.strictEqual(yell.length, 1);
assert.deepStrictEqual(yell('abc'), ('ABC'));
assert.deepStrictEqual(yell('cdEfG'), ('CDEFG'));
assert.deepStrictEqual(yell('HIJK'), 'HIJK');

//assert.fail('You must write your own tests');
// End of tests */
