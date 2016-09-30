import createDomNode from './create-domnode';
import isDomNode from './is-dom-node';

export default function ensureElement(options={}) {

    let element;
    let isDomContext = options.context &&
        (isDomNode(options.context, Node.ELEMENT_NODE) ||
        isDomNode(options.context, Node.DOCUMENT_NODE) ||
        isDomNode(options.context, Node.DOCUMENT_FRAGMENT_NODE));

    if (isDomNode(options.el)) {
        element = options.el;
    } else if (isDomContext && typeof options.el === 'string') {
        element = createDomNode(options.el);
    } else if (isDomContext && options.selector) {
        element = options.context.querySelector(options.selector);
    }

    if (!element) {
        element = document.createElement('div');
    }

    return element;
}