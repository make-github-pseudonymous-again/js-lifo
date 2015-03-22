(function(exports, undefined){

	'use strict';


/* js/src/ArrayStack.js */

/**
 * ArrayStack#peek only valid if ArrayStack#empty is false.
 * ArrayStack#pop only valid if ArrayStack#empty is false.
 */

var ArrayStack = function ( array ) {

	this.array = array ;
	this.top = -1 ;

} ;


ArrayStack.prototype.empty = function ( ) {

	return this.top === -1 ;

} ;

/**
 * Only valid if ArrayStack#empty is false.
 */

ArrayStack.prototype.peek = function ( ) {

	return this.array[this.top] ;

} ;

/**
 * Only valid if the storage array is not full.
 */

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

/* js/src/Node.js */

var Node = function ( value , next ) {

	this.value = value ;
	this.next = next ;

} ;

exports.Node = Node ;

/* js/src/NodeStack.js */

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

})(typeof exports === 'undefined' ? this['lifo'] = {} : exports);
