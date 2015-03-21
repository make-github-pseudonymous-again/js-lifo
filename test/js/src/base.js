

var t = function ( name , stack , n ) {

	test( name , function ( ) {

		var array , i ;

		array = [ ] ;

		ok( stack.empty( ) , "At the begining, stack is empty." ) ;

		for ( i = 0 ; i < n ; ++i ) {

			r = Math.random( ) ;

			stack.push( r ) ;
			array.push( r ) ;

			ok( ! stack.empty( ) , i + "The stack is not empty." ) ;

			deepEqual( stack.peek( ) , r , i + " Peek returns the last value." ) ;

		}

		for ( i = 0 ; i < n ; ++i ) {

			ok( ! stack.empty( ) , i + "The stack is not empty." ) ;

			deepEqual( stack.pop( ) , array.pop( ) , i + " Pop works." ) ;

		}

		ok( stack.empty( ) , "At the end, stack is empty." ) ;

	} ) ;

} ;

var n = 10000 ;

t( "NodeStack" , new lifo.NodeStack( ) , n ) ;
t( "ArrayStack" , new lifo.ArrayStack( new Array( n ) ) , n ) ;
