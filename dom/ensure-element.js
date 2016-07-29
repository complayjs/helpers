import createDomNode from './create-domnode';
import isDomNode from './is-dom-node';

export default function ensureElement(options={}) {

    let element;

    if (isDomNode(options.el)) {
        element = options.el;
    } else if (typeof options.el === 'string') {
        element = createDomNode(options.el);
    } else if (isDomNode(options.context) && options.selector) {
        element = options.context.querySelector(options.selector);
    }

    if (!element) {
        element = document.createElement('div');
    }

    return element;
}