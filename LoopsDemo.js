// Create on May 28, 2015 Thu.
// See http://coffeescript.org/

var arrvalue, countdown, countdown11, num, str;

// In coffeescript : countdown = (num for num in [10..1])
countdown = (function() {
  var _i, _results;
  _results = [];
  for (num = _i = 10; _i >= 1; num = --_i) {
    _results.push(num);
  }
  return _results;
})();


arrvalue = ["one", "two", "three", "four", "five"];

//  In coffeescript : countdown11 = (str for str in arrvalue)
countdown11 = (function() {
  var _i, _len, _results;
  _results = [];
  for (_i = 0, _len = arrvalue.length; _i < _len; _i++) {
    str = arrvalue[_i];
    _results.push(str);
  }
  return _results;
})();

console.log(countdown);
console.log(countdown11);