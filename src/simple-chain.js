const CustomError = require("../extensions/custom-error");

const chainMaker = {
	
	getLength() {
		return this.value.length;
	},
	addLink(value) {
		if (this.value === undefined) {
			this.value = [];
		}
		let item = String(value);
		this.value.push(`( ${item} )`)
		
		return this;
	},
	removeLink(position) {

		if ((typeof position === 'number') && (this.value.length >= position)) {
			this.value.splice(position - 1, 1);
			return this;
		}
		else {
			delete this.value;
			throw new Error();
		}
		
	},
	reverseChain() {
		if (this.value === undefined) {
			this.value = [];
		}
		this.value.reverse();
		return this;
	},
	finishChain() {
		let chain = this.value;
		delete this.value
		return chain.join('~~');
	
	}
};

module.exports = chainMaker;
