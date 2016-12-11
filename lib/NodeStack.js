'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = NodeStack;

var _Node = require('./Node');

var _Node2 = _interopRequireDefault(_Node);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * NodeStack#peek only valid if NodeStack#empty is false.
 * NodeStack#pop only valid if NodeStack#empty is false.
 */

function NodeStack() {

  this.top = null;
}

NodeStack.prototype.empty = function () {

  return this.top === null;
};

/**
 * Only valid if NodeStack#empty is false.
 */

NodeStack.prototype.peek = function () {

  return this.top.value;
};

NodeStack.prototype.push = function (value) {

  this.top = new _Node2.default(value, this.top);
};

/**
 * Only valid if NodeStack#empty is false.
 */

NodeStack.prototype.pop = function () {

  var value = this.top.value;

  this.top = this.top.next;

  return value;
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9Ob2RlU3RhY2suanMiXSwibmFtZXMiOlsiTm9kZVN0YWNrIiwidG9wIiwicHJvdG90eXBlIiwiZW1wdHkiLCJwZWVrIiwidmFsdWUiLCJwdXNoIiwicG9wIiwibmV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7a0JBT3dCQSxTOztBQVB4Qjs7Ozs7O0FBRUE7Ozs7O0FBS2UsU0FBU0EsU0FBVCxHQUF1Qjs7QUFFckMsT0FBS0MsR0FBTCxHQUFXLElBQVg7QUFFQTs7QUFFREQsVUFBVUUsU0FBVixDQUFvQkMsS0FBcEIsR0FBNEIsWUFBYTs7QUFFeEMsU0FBTyxLQUFLRixHQUFMLEtBQWEsSUFBcEI7QUFFQSxDQUpEOztBQU1BOzs7O0FBSUFELFVBQVVFLFNBQVYsQ0FBb0JFLElBQXBCLEdBQTJCLFlBQWE7O0FBRXZDLFNBQU8sS0FBS0gsR0FBTCxDQUFTSSxLQUFoQjtBQUVBLENBSkQ7O0FBTUFMLFVBQVVFLFNBQVYsQ0FBb0JJLElBQXBCLEdBQTJCLFVBQVdELEtBQVgsRUFBbUI7O0FBRTdDLE9BQUtKLEdBQUwsR0FBVyxtQkFBVUksS0FBVixFQUFrQixLQUFLSixHQUF2QixDQUFYO0FBRUEsQ0FKRDs7QUFNQTs7OztBQUlBRCxVQUFVRSxTQUFWLENBQW9CSyxHQUFwQixHQUEwQixZQUFhOztBQUV0QyxNQUFNRixRQUFRLEtBQUtKLEdBQUwsQ0FBU0ksS0FBdkI7O0FBRUEsT0FBS0osR0FBTCxHQUFXLEtBQUtBLEdBQUwsQ0FBU08sSUFBcEI7O0FBRUEsU0FBT0gsS0FBUDtBQUVBLENBUkQiLCJmaWxlIjoiTm9kZVN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5vZGUgZnJvbSAnLi9Ob2RlJyA7XG5cbi8qKlxuICogTm9kZVN0YWNrI3BlZWsgb25seSB2YWxpZCBpZiBOb2RlU3RhY2sjZW1wdHkgaXMgZmFsc2UuXG4gKiBOb2RlU3RhY2sjcG9wIG9ubHkgdmFsaWQgaWYgTm9kZVN0YWNrI2VtcHR5IGlzIGZhbHNlLlxuICovXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vZGVTdGFjayAoICkge1xuXG5cdHRoaXMudG9wID0gbnVsbCA7XG5cbn1cblxuTm9kZVN0YWNrLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uICggKSB7XG5cblx0cmV0dXJuIHRoaXMudG9wID09PSBudWxsIDtcblxufSA7XG5cbi8qKlxuICogT25seSB2YWxpZCBpZiBOb2RlU3RhY2sjZW1wdHkgaXMgZmFsc2UuXG4gKi9cblxuTm9kZVN0YWNrLnByb3RvdHlwZS5wZWVrID0gZnVuY3Rpb24gKCApIHtcblxuXHRyZXR1cm4gdGhpcy50b3AudmFsdWUgO1xuXG59IDtcblxuTm9kZVN0YWNrLnByb3RvdHlwZS5wdXNoID0gZnVuY3Rpb24gKCB2YWx1ZSApIHtcblxuXHR0aGlzLnRvcCA9IG5ldyBOb2RlKCB2YWx1ZSAsIHRoaXMudG9wICkgO1xuXG59IDtcblxuLyoqXG4gKiBPbmx5IHZhbGlkIGlmIE5vZGVTdGFjayNlbXB0eSBpcyBmYWxzZS5cbiAqL1xuXG5Ob2RlU3RhY2sucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uICggKSB7XG5cblx0Y29uc3QgdmFsdWUgPSB0aGlzLnRvcC52YWx1ZSA7XG5cblx0dGhpcy50b3AgPSB0aGlzLnRvcC5uZXh0IDtcblxuXHRyZXR1cm4gdmFsdWUgO1xuXG59IDtcbiJdfQ==