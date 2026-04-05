/** @license Apache-2.0 */

'use strict';

/**
* Fill a one-dimensional double-precision floating-point ndarray with linearly spaced numeric elements which increment by `1` starting from one.
*
* @module @stdlib/blas-ext-base-ndarray-done-to
*
* @example
* var Float64Array = require( '@stdlib/array-float64' );
* var ndarray = require( '@stdlib/ndarray-base-ctor' );
* var doneTo = require( '@stdlib/blas-ext-base-ndarray-done-to' );
*
* var xbuf = new Float64Array( [ 0.0, 0.0, 0.0, 0.0 ] );
* var x = new ndarray( 'float64', xbuf, [ 4 ], [ 1 ], 0, 'row-major' );
* // returns <ndarray>[ 0.0, 0.0, 0.0, 0.0 ]
*
* var out = doneTo( [ x ] );
* // returns <ndarray>[ 1.0, 2.0, 3.0, 4.0 ]
*/

// MODULES //

var main = require( './main.js' );


// EXPORTS //

module.exports = main;
