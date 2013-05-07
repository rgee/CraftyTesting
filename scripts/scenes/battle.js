define(['entities/unit'], function(Unit) {
  Crafty.scene('battle', function() {
    window.unit = Crafty.e('2D, Canvas, Color, Unit')
      .color('green')
      .attr({ x: 0, y: 0, z: 1, w: 42, h: 42});
  });
});