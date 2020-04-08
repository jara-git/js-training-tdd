'use strict';

/*
 * Jaden Smith Case
 *
 * Make a `jadenCase` function that takes a string as parameter
 * and return the string with each words capitilized.
 *
 * Example : "How are you ?" -> "How Are You ?"
 *
 */

// Your code:
function jadenCase (str) {
    str = str.toLowerCase();
    str = str.split(" ");
    
        for (let i = 0, j = str.length; i < j; i++) {
            str[i] = str[i][0].toUpperCase() + str[i].substr(1);
        }
    
        return str.join(" ");
    }
    console.log(jadenCase("hola que tal"))
    

//* Begin of tests
const assert = require('assert');
assert.strictEqual(typeof jadenCase, 'function');
assert.strictEqual(jadenCase("How are you ?"), "How Are You ?");
assert.strictEqual(jadenCase('hola QuE tal?'), 'Hola Que Tal?');
assert.strictEqual(jadenCase('oneDAYwillNOtlast'), 'Onedaywillnotlast');

// End of tests */
