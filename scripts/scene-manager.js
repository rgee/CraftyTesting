define(['./state'], function(State) {
	function SceneMgr() {
		this._states = new State.Stack();
	}

	SceneMgr.prototype = {
		changeScene: function(name) {
			Crafty.e("2D, Canvas, Tween, Color")
		        .attr({alpha:0.0, x:0, y:0, w:800, h:600, z: 100000})
		        .color("#000000")
		        .tween({alpha: 1.0}, 30)
		        .bind("TweenEnd", function() {
		            Crafty.scene(name);
		            Crafty.e("2D, Canvas, Tween, Color")
		                .attr({alpha:1.0, x:0, y:0, w:800, h:600, z: 1000000})
		                .color("#000000")
		                .tween({alpha: 0.0}, 30);
		        });
		}
	};

	return {
		SceneManager: SceneMgr
	}
})