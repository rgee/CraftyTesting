$(document).ready(function() {
	require(['./scene-manager', 'entities/units/MC', 'scenes/battle'], function(SceneMgr, MC) {
		SceneMgr.changeScene('battle');

		$('.add_ten').click(function() {
			MC.get().changeHealth(10);
		});

		$('.subtract_ten').click(function() {
			MC.get().changeHealth(-30);
		});
	});
	Crafty.init(1280, 720);
	Crafty.canvas.init();
});