export default function isDomNode(el, nodeType=Node.ELEMENT_NODE) {
    return el && el.nodeType && el.nodeType === nodeType;
}