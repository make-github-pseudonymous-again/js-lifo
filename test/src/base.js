import test from 'ava' ;

import { realloc } from '@aureooms/js-array' ;

import {
	NodeStack ,
	ArrayStack ,
	JSArrayPrototypeStack ,
	JSArrayWrapperStack ,
	DynamicStack ,
} from '../../src' ;

function macro ( t , stack , n ) {

	const array = [ ] ;

	t.true( stack.empty( ) , "At the begining, stack is empty." ) ;

	for ( let i = 0 ; i < n ; ++i ) {

		const r = Math.random( ) ;

		stack.push( r ) ;
		array.push( r ) ;

		t.true( ! stack.empty( ) , i + "The stack is not empty." ) ;

		t.deepEqual( stack.peek( ) , r , i + " Peek returns the last value." ) ;

	}

	for ( let i = 0 ; i < n ; ++i ) {

		t.true( ! stack.empty( ) , i + "The stack is not empty." ) ;

		t.deepEqual( stack.pop( ) , array.pop( ) , i + " Pop works." ) ;

	}

	t.true( stack.empty( ) , "At the end, stack is empty." ) ;

}

const n = 2500 ;

test( "NodeStack" , macro , new NodeStack( ) , n ) ;
test( "ArrayStack ( Array )" , macro , new ArrayStack( new Array( n ) ) , n ) ;
test( "ArrayStack ( Float64Array )" , macro , new ArrayStack( new Float64Array( n ) ) , n ) ;
test( "JSArrayPrototypeStack" , macro , new JSArrayPrototypeStack( ) , n ) ;
test( "JSArrayWrapperStack" , macro , new JSArrayWrapperStack( [ ] ) , n ) ;
test( "DynamicStack" , macro , new DynamicStack( [ ] , 0 , 2 , realloc ) , n ) ;
