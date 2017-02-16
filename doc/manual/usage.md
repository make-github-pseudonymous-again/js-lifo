The code needs a ES2015+ polyfill to work, for example
[babel-polyfill](https://babeljs.io/docs/usage/polyfill).
```js
require( 'babel-polyfill' ) ;
// or
import 'babel-polyfill' ;
```

Then
```js
const lifo = require( '@aureooms/js-lifo' ) ;
// or
import lifo from '@aureooms/js-lifo' ;
```
