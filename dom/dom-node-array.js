import from from '../array/from';

export default function domNodeArray(item, ctx) {

	let retArray = [];

	ctx = ctx || document;

	// checks for type of given context
	if (item === ctx) {
		// context is item case
		retArray = [item];
	} else if (item && item.nodeType === Node.ELEMENT_NODE) {
		// dom node case
		retArray = [item];
	} else if (typeof item === 'string') {
		// selector case
		retArray = Array.from(ctx.querySelectorAll(item));
	} else if (item && 
		item.length && 
		Array.from(item).length > 0) {
		// nodelist case
		retArray = Array.from(item);
	}

	return retArray;
}