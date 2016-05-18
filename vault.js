'use strict';
module.exports = function() {
  var vault = null;
  return {
    setValue: function (key, value) {
      vault = value;
    },
    getValue: function (key) {
      return vault;
    }
  };
};