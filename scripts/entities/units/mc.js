define(['components/units/mc'], function() {
	var mc;
  return {
    create: function() {
      mc = Crafty.e('2D, Canvas, Unit, MC');
      return mc;
    },

    get: function() {
      if (!mc) {
        return this.create();
      }
      return mc;
    }
  };
});