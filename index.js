'use strict';

var enumOwnProps = require('@fav/prop.enum-own-props');

function assign(dest /* , src, ... */) {
  dest = new Object(dest);

  for (var i = 1, n = arguments.length; i < n; i++) {
    assignEach(dest, arguments[i]);
  }

  return dest;
}

/* istanbul ignore next */
function assignEach(dest, src) {
  var props = enumOwnProps(src);
  for (var i2 = 0, n2 = props.length; i2 < n2; i2++) {
    var prop = props[i2];
    try {
      dest[prop] = src[prop];
    } catch (e) {
      // If a property is read only, TypeError is thrown,
      // but this funciton ignores it.
    }
  }
}

module.exports = assign;
