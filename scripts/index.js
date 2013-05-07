$(document).ready(function() {
	require(['./scene-manager',  'scenes/main-menu', 'scenes/battle'], function(SceneMgr) {
		SceneMgr.changeScene('battle');

		$('.add_ten').click(function() {
			unit.changeHealth(10);
		});

		$('.subtract_ten').click(function() {
			unit.changeHealth(-30);
		});
	});
	Crafty.init(1280, 720);
	Crafty.canvas.init();
});