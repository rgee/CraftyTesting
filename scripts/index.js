$(document).ready(function() {
	require(['./scene-manager', 'scenes/main-menu', 'scenes/battle'], function(Mgr) {
		var mgr = new Mgr.SceneManager();
		mgr.changeScene('main');

		$('.main').click(function() {
			mgr.changeScene('main');
		});

		$('.battle').click(function() {
			mgr.changeScene('battle');
		});
	});
	Crafty.init(1280, 720);
	Crafty.canvas.init();
});