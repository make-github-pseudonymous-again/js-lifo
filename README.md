[js-lifo](http://aureooms.github.io/js-lifo)
==

Last In First Out abstract data types code bricks for JavaScript

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
