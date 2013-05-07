define(['entities/units/mc'], function( MC) {
  Crafty.scene('battle', function() {
    var mc =  MC.get();

    mc.attr({
      y: 50
    });
  });
});