/**
 * JSArrayWrapperStack#peek only valid if JSArrayWrapperStack#empty is false.
 * JSArrayWrapperStack#pop only valid if JSArrayWrapperStack#empty is false.
 */

var JSArrayWrapperStack = function ( array ) {

	this.array = array ;

} ;


JSArrayWrapperStack.prototype.empty = function ( ) {

	return this.array.length === 0 ;

} ;

/**
 * Only valid if JSArrayWrapperStack#empty is false.
 */

JSArrayWrapperStack.prototype.peek = function ( ) {

	return this.array[this.array.length - 1] ;

} ;

JSArrayWrapperStack.prototype.push = function ( value ) {

	return this.array.push( value ) ;

} ;

/**
 * Only valid if JSArrayWrapperStack#empty is false.
 */

JSArrayWrapperStack.prototype.pop = function ( ) {

	return this.array.pop( ) ;

} ;

exports.JSArrayWrapperStack = JSArrayWrapperStack ;
