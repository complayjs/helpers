export default function mix(Parent) {
	
	class Mixed extends Parent {}

	return {
		Mixed,
		with(...mixins) {
			
			for (let mixin of mixins) {
				for (let prop in mixin) {
					Mixed.prototype[prop] = mixin[prop];
				}

				let protoProps = Object.getOwnPropertyNames(mixin.prototype);

				for (let prop in protoProps) {
					if (protoProps[prop] !== 'constructor' && mixin.prototype[protoProps[prop]]) {
						Mixed.prototype[protoProps[prop]] = mixin.prototype[protoProps[prop]];
					}
				}
			}

			return Mixed;
		}
	};
};	