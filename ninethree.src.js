"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NineThree = function NineThree(cssSelector) {
  return new NineThree.Element(cssSelector);
};

NineThree.Element = function () {
  function NineThreeElement(cssSelector) {
    _classCallCheck(this, NineThreeElement);

    this.element = document.querySelector(cssSelector) || null;

    if (this.element == null) {
      throw "[NineThree] You must pass a css selector as a string to NineThreeElement";
    }
  }

  NineThreeElement.prototype.on = function on(eventName, functionHandler) {
    return this.element.addEventListener(eventName, functionHandler, false);
  };

  return NineThreeElement;
}();

var ⅨⅢ = NineThree;
