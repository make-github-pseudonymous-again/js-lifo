(function(exports, undefined){

	'use strict';


/* js/src/ArrayStack.js */

/**
 * ArrayStack#peek only valid if ArrayStack#empty is false.
 * ArrayStack#pop only valid if ArrayStack#empty is false.
 * ArrayStack#push only valid if the storage array is not full.
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

/* js/src/DynamicStack.js */

/**
 * DynamicStack#peek only valid if DynamicStack#empty is false.
 * DynamicStack#pop only valid if DynamicStack#empty is false.
 */

var DynamicStack = function ( array , capacity , growthrate , realloc ) {

	this.array = array ;
	this.capacity = capacity ;
	this.length = 0 ;

	this.growthrate = growthrate ;
	this.grs = growthrate * growthrate ;
	this.realloc = realloc ;

} ;

DynamicStack.prototype.empty = function ( ) {

	return this.length === 0 ;

} ;

/**
 * Only valid if DynamicStack#empty is false.
 */

DynamicStack.prototype.peek = function ( ) {

	return this.array[this.length - 1] ;

} ;

DynamicStack.prototype.grow = function ( len ) {

	if ( this.capacity < len ) {

		this.capacity = len * this.growthrate ;

		this.array = this.realloc( this.array , this.capacity ) ;

	}

} ;

DynamicStack.prototype.shrink = function ( len ) {

	if ( this.capacity >= len * this.grs ) {

		this.capacity = len * this.growthrate ;

		this.array = this.realloc( this.array , this.capacity ) ;

	}

} ;

DynamicStack.prototype.push = function ( value ) {

	var last ;

	last = this.length ;

	++this.length ;

	this.grow( this.length ) ;

	this.array[last] = value ;

} ;

/**
 * Only valid if DynamicStack#empty is false.
 */

DynamicStack.prototype.pop = function ( ) {

	var value ;

	--this.length ;

	value = this.array[this.length] ;

	this.shrink( this.length ) ;

	return value ;

} ;



exports.DynamicStack = DynamicStack ;

/* js/src/JSArrayPrototypeStack.js */
/**
 * JSArrayPrototypeStack#peek only valid if JSArrayPrototypeStack#empty is false.
 * JSArrayPrototypeStack#pop only valid if JSArrayPrototypeStack#empty is false.
 */

var JSArrayPrototypeStack = function ( ) { } ;

JSArrayPrototypeStack.prototype = [] ;

JSArrayPrototypeStack.prototype.empty = function ( ) {

	return this.length === 0 ;

} ;

/**
 * Only valid if JSArrayPrototypeStack#empty is false.
 */

JSArrayPrototypeStack.prototype.peek = function ( ) {

	return this[this.length - 1] ;

} ;

exports.JSArrayPrototypeStack = JSArrayPrototypeStack ;

/* js/src/JSArrayWrapperStack.js */
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
