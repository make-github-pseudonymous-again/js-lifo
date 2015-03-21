
var NodeStack = function ( ) {

	this.bottom = new Node( undefined , null ) ;

	this.top = this.bottom ;

} ;

NodeStack.prototype.empty = function ( ) {

	return this.top === this.bottom ;

} ;

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
