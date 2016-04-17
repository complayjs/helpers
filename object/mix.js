export default function mix(Parent) {
	
	class Mixed extends Parent {}

	return {
		Mixed,
		with(...mixins) {
			
			for (let mixin of mixins) {
				for (let prop in mixin) {
					Mixed.prototype[prop] = mixin[prop];
				}

				for (let prop in mixin.prototype) {
					Mixed.prototype[prop] = mixin.prototype[prop];
				}
			}

			return Mixed;
		}
	};
};	