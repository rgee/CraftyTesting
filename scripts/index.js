$(document).ready(function() {
	require(['./scene-manager',  'scenes/main-menu', 'scenes/battle'], function(SceneMgr) {
		SceneMgr.changeScene('main');

		$('.main').click(function() {
			SceneMgr.changeScene('main');
		});

		$('.battle').click(function() {
			SceneMgr.changeScene('battle');
		});
	});
	Crafty.init(1280, 720);
	Crafty.canvas.init();
});