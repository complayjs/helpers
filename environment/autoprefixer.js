import getGlobalObject from './get-global-object.js';

let glob = getGlobalObject();

/**
 * @todo needs test
 */
export default function(methodName, obj=glob) {
	let vendors = ['ms', 'moz', 'webkit', 'o', ''];
	let vendorMethod;
	let retMethod;

	while (vendors.length) {
		
		vendorMethod = vendors.pop() + methodName;

		if (vendorMethod in obj) {
			retMethod = obj[vendorMethod];
			break;
		}
	}

	return retMethod;
}