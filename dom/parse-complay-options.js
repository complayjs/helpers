import matchesSelector from './matches-selector';
import dasherize from '../string/dasherize';
import isDomNode from './is-dom-node';
import arrayFrom from '../array/from';

export default function parseComplayOptions(el, item) {

    let options = el && el.dataset.jsOptions;

    if (!options) {

        let jsonScriptBlock = Array.from(el.childNodes).filter(child => {
            return isDomNode(child) && matchesSelector(child, 'script[data-js-options]');
        });

        if (jsonScriptBlock.length) {
            options = jsonScriptBlock[0].innerText;
        }
    }

    if (options && typeof options === 'string') {

        let name = item.name || item.es5name;

        // if <div data-js-options="{'show': true}"> is used,
        // instead of <div data-js-options='{"show": true}'>
        // convert to valid json string and parse to JSON
        options = options
            .replace(/\\'/g, '\'')
            .replace(/'/g, '"');

        options = JSON.parse(options);
        options = options[dasherize(name)] || options[name] || options;
    }

    return options || {};
}