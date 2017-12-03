(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.fav||(g.fav = {}));g=(g.prop||(g.prop = {}));g.assign = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var enumOwnKeys = require('@fav/prop.enum-own-keys');

function assign(dest /* , src, ... */) {
  dest = new Object(dest);

  var fn;
  /* istanbul ignore if */
  if (typeof Object.assign !== 'function') {
    fn = assignEach;
  } else {
    fn = Object.assign;
  }


  for (var i = 1, n = arguments.length; i < n; i++) {
    try {
      fn.call(this, dest, arguments[i]);
    } catch (e) {
      // If a property is read only, TypeError is thrown,
      // but this funciton ignores it.
    }
  }

  return dest;
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

},{"@fav/prop.enum-own-keys":2}],2:[function(require,module,exports){
'use strict';

function enumOwnKeys(obj) {
  switch (typeof obj) {
    case 'object': {
      return Object.keys(obj || {});
    }
    case 'function': {
      return Object.keys(obj);
    }

    // Cause TypeError on Node.js v0.12 or earlier.
    case 'string': {
      return Object.keys(new String(obj));
    }
    default: {
      return [];
    }
  }
}

module.exports = enumOwnKeys;

},{}]},{},[1])(1)
});