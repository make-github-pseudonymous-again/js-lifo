
var ArrayStack = function ( array ) {

	this.array = array ;
	this.top = -1 ;

} ;


ArrayStack.prototype.empty = function ( ) {

	return this.top === -1 ;

} ;

ArrayStack.prototype.peek = function ( ) {

	return this.array[this.top] ;

} ;

ArrayStack.prototype.push = function ( value ) {

	++this.top ;
	this.array[this.top] = value ;

} ;

/**
 * Only valid if ArrayStack#empty is false.
 */

ArrayStack.prototype.pop = function ( ) {

	var value ;

	value = this.array[this.top] ;

	// clean up for gc
	// 0 is for support of typed arrays
	this.array[this.top] = 0 ;

	--this.top ;

	return value ;

} ;

exports.ArrayStack = ArrayStack ;
