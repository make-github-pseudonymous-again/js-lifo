"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = split;

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

function split(predicate, stack, hi, lo) {

  while (!stack.empty()) {

    var key = stack.pop();

    if (predicate(key)) hi.push(key);else lo.push(key);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9zcGxpdC5qcyJdLCJuYW1lcyI6WyJzcGxpdCIsInByZWRpY2F0ZSIsInN0YWNrIiwiaGkiLCJsbyIsImVtcHR5Iiwia2V5IiwicG9wIiwicHVzaCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBWXdCQSxLOztBQVh4Qjs7Ozs7Ozs7Ozs7QUFXZSxTQUFTQSxLQUFULENBQWlCQyxTQUFqQixFQUE2QkMsS0FBN0IsRUFBcUNDLEVBQXJDLEVBQTBDQyxFQUExQyxFQUErQzs7QUFFN0QsU0FBUSxDQUFDRixNQUFNRyxLQUFOLEVBQVQsRUFBMEI7O0FBRXpCLFFBQU1DLE1BQU1KLE1BQU1LLEdBQU4sRUFBWjs7QUFFQSxRQUFLTixVQUFXSyxHQUFYLENBQUwsRUFBd0JILEdBQUdLLElBQUgsQ0FBU0YsR0FBVCxFQUF4QixLQUVLRixHQUFHSSxJQUFILENBQVNGLEdBQVQ7QUFFTDtBQUVEIiwiZmlsZSI6InNwbGl0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFNwbGl0cyBhIHN0YWNrIGludG8gMiBhY2NvcmRpbmcgdG8gc29tZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKlxuICogQHBhcmFtIHtmdW5jdGlvbn0gcHJlZGljYXRlIGZ1bmN0aW9uIHdoaWNoIHRlbGxzIGluIHdoaWNoIG91dHB1dCBzdGFjayBlYWNoXG4gKiBlbGVtZW50IG11c3QgZ28uXG4gKiBAcGFyYW0ge29iamVjdH0gc3RhY2sgVGhlIGlucHV0IHN0YWNrLlxuICogQHBhcmFtIHtpbnR9IGhpIEFuIGVtcHR5IHN0YWNrLlxuICogQHBhcmFtIHtpbnR9IGxvIEFuIGVtcHR5IHN0YWNrLlxuICpcbiAqL1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzcGxpdCAoIHByZWRpY2F0ZSAsIHN0YWNrICwgaGkgLCBsbyApIHtcblxuXHR3aGlsZSAoICFzdGFjay5lbXB0eSggKSApIHtcblxuXHRcdGNvbnN0IGtleSA9IHN0YWNrLnBvcCggKSA7XG5cblx0XHRpZiAoIHByZWRpY2F0ZSgga2V5ICkgKSBoaS5wdXNoKCBrZXkgKSA7XG5cblx0XHRlbHNlIGxvLnB1c2goIGtleSApIDtcblxuXHR9XG5cbn1cbiJdfQ==