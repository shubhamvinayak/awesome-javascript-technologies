/**
 * stubTrue example
 */

'use strict';
var _ = require('../../node_modules/lodash');

console.log(_.times(2, _.stubTrue));
// => [true, true]