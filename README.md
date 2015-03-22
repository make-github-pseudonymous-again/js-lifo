[js-lifo](http://aureooms.github.io/js-lifo)
==

_**L**ast **I**n, **F**irst **O**ut_ abstract data types code bricks for JavaScript.

[![NPM license](http://img.shields.io/npm/l/aureooms-js-lifo.svg?style=flat)](https://raw.githubusercontent.com/aureooms/js-lifo/master/LICENSE)
[![NPM version](http://img.shields.io/npm/v/aureooms-js-lifo.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-lifo)
[![Bower version](http://img.shields.io/bower/v/aureooms-js-lifo.svg?style=flat)](http://bower.io/search/?q=aureooms-js-lifo)
[![Build Status](http://img.shields.io/travis/aureooms/js-lifo.svg?style=flat)](https://travis-ci.org/aureooms/js-lifo)
[![Coverage Status](http://img.shields.io/coveralls/aureooms/js-lifo.svg?style=flat)](https://coveralls.io/r/aureooms/js-lifo)
[![Dependencies Status](http://img.shields.io/david/aureooms/js-lifo.svg?style=flat)](https://david-dm.org/aureooms/js-lifo#info=dependencies)
[![devDependencies Status](http://img.shields.io/david/dev/aureooms/js-lifo.svg?style=flat)](https://david-dm.org/aureooms/js-lifo#info=devDependencies)
[![Code Climate](http://img.shields.io/codeclimate/github/aureooms/js-lifo.svg?style=flat)](https://codeclimate.com/github/aureooms/js-lifo)
[![NPM downloads per month](http://img.shields.io/npm/dm/aureooms-js-lifo.svg?style=flat)](https://www.npmjs.org/package/aureooms-js-lifo)
[![GitHub issues](http://img.shields.io/github/issues/aureooms/js-lifo.svg?style=flat)](https://github.com/aureooms/js-lifo/issues)

Can be managed through [bower](https://github.com/bower/bower),
[component](https://github.com/componentjs/component), or
[npm](https://github.com/npm/npm).

```js
let lifo = require( "aureooms-js-lifo" ) ;
```

All data structures implemented in this package follow the following interface,

```js
let stack = new lifo. ... ( ... ) ;

stack.empty( ) ; // returns true if stack is empty, false otherwise
stack.peek( ) ; // returns the value stored at the top of the stack*
stack.push( value ) ; // pushes a value at the top of the stack^
stack.pop( ) ; // removes and returns the value at the top of the stack*

//*Calls to the two methods #peek and #pop are valid only if calling #empty
// would return false.  Nothing is done to prevent misuse of these two methods,
// i.e. these errors must be prevented and handled by the caller.

//^Specific conditions can apply for specific implementations. For example,
// an instance of the ArrayStack class can handle at most `n` elements, where
// `n` is the size of the allocated array. In other words, calls to #push are
// valid only if the number of elements on the stack is strictly less than `n`.
// Again, the caller is responsible for preventing and handling errors.
```

Below are some examples illustrating usage of the data structures implemented
in this package,

```js
// Stack implementation based on a list of nodes.
let stack = new lifo.NodeStack( ) ;

stack.empty( ) ; // true
stack.push( 18 ) ;
stack.empty( ) ; // false
stack.peek( ) ; // 18
stack.push( 3 ) ;
stack.peek( ) ; // 3
stack.pop( ) ; // 3
stack.pop( ) ; // 18
stack.empty( ) ; // true
```

```js
// Stack implementation based on a fixed size array.
// `n` is the maximum number of elements the stack can handle.
let n = 10 ;
let array = new Float64Array( n ) ;
let stack = new lifo.ArrayStack( array ) ;

stack.empty( ) ; // true
stack.push( Math.PI ) ;
stack.empty( ) ; // false
stack.peek( ) ; // 3.141592653589793
stack.push( Math.E ) ;
stack.peek( ) ; // 2.718281828459045
stack.pop( ) ; // 2.718281828459045
stack.pop( ) ; // 3.141592653589793
stack.empty( ) ; // true
```
