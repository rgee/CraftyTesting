$(document).ready(function() {
	require(['./scene-manager', 'scenes/main-menu', 'scenes/battle'], function(Mgr) {
		var mgr = new Mgr.SceneManager();
		mgr.changeScene('main');

		window.mgr = mgr;
	});
	Crafty.init(700, 400);
	Crafty.canvas.init();
});