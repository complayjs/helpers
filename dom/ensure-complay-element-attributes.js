export default function ensureComplayElementAttributes(options, dataAttributeKey = 'jsComponent') {

    let element = options.el || options.context;

    if (document && element === document) {
        element = document.documentElement;
    }

    if (!element.dataset[dataAttributeKey]) {
        element.dataset[dataAttributeKey] = options.dataAttributeName;
    } else if (element.dataset[dataAttributeKey].indexOf(options.dataAttributeName) === -1) {
        element.dataset[dataAttributeKey] = element.dataset[dataAttributeKey].length > 0 ?
            `${element.dataset[dataAttributeKey]} ${options.dataAttributeName}` :
            `${options.dataAttributeName}`;
    }

    if (!element.componentUid) {
        element.componentUid = [options.uid];
    } else if (element.componentUid.indexOf(options.uid) === -1) {
        element.componentUid.push(options.uid);
    }
}