define(function() {
	function StateStack() {
		this._states = [];
	};

	StateStack.prototype = {
		push: function(state) {
			this._states.push(state);
		},
		
		pop: function() {
			return this._states.pop();
		},

		peek: function() {
			return this._states[0];
		}
	};

	return {
		Stack: StateStack
	};
})