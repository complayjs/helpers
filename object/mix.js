export default function mix(Parent) {

	class Mixed extends Parent {}
	/**
	 * @todo keepings and overrides needs test
	 */
	return {
		keepings: ['constructor'],
		overrides: [],
		keep(...args) {
			this.keepings.concat(args);
			return this;
		},
		override(...args) {
			this.overrides.concat(args);
			return this;
		},
		Mixed,
		with(...mixins) {
			
			for (let mixin of mixins) {
				for (let prop in mixin) {
					// not included in keepings or included in overrides
					if (!~this.keepings.indexOf(prop) || ~this.overrides.indexOf(prop)) {
						Mixed.prototype[prop] = mixin[prop];	
					}
				}

				let protoProps = Object.getOwnPropertyNames(mixin.prototype);

				for (let prop in protoProps) {
					if ((!~this.keepings.indexOf(prop) || ~this.overrides.indexOf(prop)) && mixin.prototype[protoProps[prop]]) {
						Mixed.prototype[protoProps[prop]] = mixin.prototype[protoProps[prop]];
					}
				}
			}

			return Mixed;
		}
	};
};	