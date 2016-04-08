export default function mix(Parent) {
	
	class Mixed extends Parent {}

	return {
		Mixed,
		with() {
			let mixins = Array.prototype.slice.call(arguments, 1);

			for (let mixin of mixins) {
				for (let prop in mixin) {
					Mixed.prototype[prop] = mixin[prop];
				}
			}

			return Mixed;
		}
	};
};	