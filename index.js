'use strict';

var enumOwnKeys = require('@fav/prop.enum-own-keys');

function assign(dest /* , src, ... */) {
  /* istanbul ignore if */
  if (typeof Object.assign !== 'function') {
    dest = new Object(dest);
    for (var i = 1, n = arguments.length; i < n; i++) {
      assignEach(dest, arguments[i]);
    }
    return dest;
  }


  if (arguments[0] == null) {
    arguments[0] = {};
  }
  return Object.assign.apply(this, arguments);
}

/* istanbul ignore next */
function assignEach(dest, src) {
  var keys = enumOwnKeys(src);
  for (var i2 = 0, n2 = keys.length; i2 < n2; i2++) {
    var key = keys[i2];
    dest[key] = src[key];
  }

  if (typeof Symbol === 'function') {
    var symbols = Object.getOwnPropertySymbols(new Object(src));
    for (var i3 = 0, n3 = symbols.length; i3 < n3; i3++) {
      var symbol = symbols[i3];
      dest[symbol] = src[symbol];
    }
  }
}

module.exports = assign;
