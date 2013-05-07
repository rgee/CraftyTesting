define(['entities/units/mc'], function( MC) {
  Crafty.scene('battle', function() {
    window.MC = MC.get();
  });
});