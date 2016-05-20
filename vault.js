'use strict';
module.exports = function () {
  var vault = {};
  return {
    setValue: setValue,
    getValue: getValue
  };
  function setValue (key, value) {
    vault[key] = value;
  }
  function getValue (key) {
    for (var prop in vault) {
      if (prop === key) {
        return vault[key];
      }
    }
    return null;
  }
};