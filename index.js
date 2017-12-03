'use strict';

var enumOwnKeys = require('@fav/prop.enum-own-keys');

function assign(dest /* , src, ... */) {
  dest = new Object(dest);

  for (var i = 1, n = arguments.length; i < n; i++) {
    assignEach(dest, arguments[i]);
  }

  return dest;
}

/* istanbul ignore next */
function assignEach(dest, src) {
  var keys = enumOwnKeys(src);
  for (var i2 = 0, n2 = keys.length; i2 < n2; i2++) {
    var key = keys[i2];
    try {
      dest[key] = src[key];
    } catch (e) {
      // If a property is read only, TypeError is thrown,
      // but this funciton ignores it.
    }
  }

  if (typeof Symbol === 'function') {
    var symbols = Object.getOwnPropertySymbols(new Object(src));
    for (var i3 = 0, n3 = symbols.length; i3 < n3; i3++) {
      var symbol = symbols[i3];
      try {
        dest[symbol] = src[symbol];
      } catch (e) {
        // If a property is read only, TypeError is thrown,
        // but this funciton ignores it.
      }
    }
  }
}

module.exports = assign;
