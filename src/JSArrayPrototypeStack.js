/**
 * JSArrayPrototypeStack#peek only valid if JSArrayPrototypeStack#empty is false.
 * JSArrayPrototypeStack#pop only valid if JSArrayPrototypeStack#empty is false.
 */

export default function JSArrayPrototypeStack ( ) { }

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


