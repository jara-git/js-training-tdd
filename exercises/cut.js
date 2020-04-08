'use strict';

/*
 * Create the `cutFirst` function that takes a string and remove the 2 first characters
 * Create the `cutLast` function that takes a string and remove the 2 last characters
 * Create the `cutFirstLast` function that takes a string as parameter
 * and remove the 2 first characters and 2 last characters
 *
 * @notions String methods
 * https://github.com/nan-academy/refs/blob/master/js-training/methods.md#string---transform
 */

// Your code:
function cutFirst(str){
    return str.substring(2);
}

function cutLast(str){
    return str.slice(0, -2);
}

// function cutFirstLast(str){
//     let strLength = str.Length
//     return str.substring(2, strLength -2)
// }
function cutFirstLast(str) {
    str = str.substring(2);
    str = str.slice(0, -2);
    return str;
};

//* Begin of tests
const assert = require('assert');

assert.strictEqual(typeof cutFirst, 'function');
assert.strictEqual(cutFirst.length, 1);
assert.deepStrictEqual(cutFirst('hoooOla'), ('ooOla'));

assert.strictEqual(typeof cutLast, 'function');
assert.strictEqual(cutLast.length, 1);
assert.deepStrictEqual(cutLast('abc'), ('a'));

assert.strictEqual(typeof cutFirstLast, 'function');
assert.strictEqual(cutFirstLast.length, 1);
assert.deepStrictEqual(cutFirstLast('hierbabuena'), ('erbabue'));


// End of tests */
