
/**
 * NodeStack#peek only valid if NodeStack#empty is false.
 * NodeStack#pop only valid if NodeStack#empty is false.
 */

var NodeStack = function ( ) {

	this.top = null ;

} ;

NodeStack.prototype.empty = function ( ) {

	return this.top === null ;

} ;

/**
 * Only valid if NodeStack#empty is false.
 */

NodeStack.prototype.peek = function ( ) {

	return this.top.value ;

} ;

NodeStack.prototype.push = function ( value ) {

	this.top = new Node( value , this.top ) ;

} ;

/**
 * Only valid if NodeStack#empty is false.
 */

NodeStack.prototype.pop = function ( ) {

	var value ;

	value = this.top.value ;

	this.top = this.top.next ;

	return value ;

} ;

exports.NodeStack = NodeStack ;
