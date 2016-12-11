
/**
 * DynamicStack#peek only valid if DynamicStack#empty is false.
 * DynamicStack#pop only valid if DynamicStack#empty is false.
 */

export default function DynamicStack ( array , capacity , growthrate , realloc ) {

	this.array = array ;
	this.capacity = capacity ;
	this.length = 0 ;

	this.growthrate = growthrate ;
	this.grs = growthrate * growthrate ;
	this.realloc = realloc ;

}

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

	const last = this.length ;

	++this.length ;

	this.grow( this.length ) ;

	this.array[last] = value ;

} ;

/**
 * Only valid if DynamicStack#empty is false.
 */

DynamicStack.prototype.pop = function ( ) {

	--this.length ;

	const value = this.array[this.length] ;

	this.shrink( this.length ) ;

	return value ;

} ;
