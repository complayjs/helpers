export default function ensureComplayElementAttributes(options) {
    let element = options.el;

    if (!element.dataset.jsComponent) {
        element.dataset.jsComponent = options.dataAttributeName;
    } else if (element.dataset.jsComponent.indexOf(options.dataAttributeName) === -1) {
        element.dataset.jsComponent = element.dataset.jsComponent.length > 0 ?
            `${element.dataset.jsComponent} ${options.dataAttributeName}` :
            `${options.dataAttributeName}`;
    }

    if (!element.componentUid) {
        element.componentUid = [options.uid];
    } else if (element.componentUid.indexOf(options.uid) === -1) {
        element.componentUid.push(options.uid);
    }
}