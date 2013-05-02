$(document).ready(function() {
	require(['./state'], function(State) {
		console.log(new State.Stack());
	});
	Crafty.init(700, 400);
	Crafty.canvas.init();

	Crafty.scene("main", function() {


	});

	Crafty.scene("main");
});