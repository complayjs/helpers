const crossBrowserMatchesSelector = Element.prototype.matches ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.mozMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.oMatchesSelector;

export default function matchesSelector(el, selector) {

    if (arguments.length === 1) {
        selector = el;
        el = this.el;
    }

    return crossBrowserMatchesSelector.call(el, selector)
}