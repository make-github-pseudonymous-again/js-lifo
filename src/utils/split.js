
/**
 * Splits a stack into 2 according to some predicate function.
 *
 * @param {function} predicate function which tells in which output stack each
 * element must go.
 * @param {object} stack The input stack.
 * @param {int} hi An empty stack.
 * @param {int} lo An empty stack.
 *
 */

export default function split ( predicate , stack , hi , lo ) {

	while ( !stack.empty( ) ) {

		const key = stack.pop( ) ;

		if ( predicate( key ) ) hi.push( key ) ;

		else lo.push( key ) ;

	}

}
