var NineThree = function(cssSelector) {
  return new NineThree.Element(cssSelector)
}

NineThree.Element = class NineThreeElement{
  constructor(cssSelector) {
    this.element = document.querySelector(cssSelector) || null
    
    if (this.element == null) {
      throw "[NineThree] You must pass a css selector as a string to NineThreeElement"
    }
  }
  on(eventName, functionHandler) {
    return this.element.addEventListener(eventName, functionHandler, false)
  }
}



var ⅨⅢ = NineThree
