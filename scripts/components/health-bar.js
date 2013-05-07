define(function() {
  Crafty.c('HealthBar', {
    init: function() {
      this.addComponent('2D, Canvas, Color');
    },

    attachToUnit: function(unit) {
      this._unit = unit;
      unit.attach(this);
      this._adjustColorForHealth();

      var self = this;
      unit.bind('healthChange', function(unit) {
        console.log('Unit Health is: ' + unit.health);
        self._adjustColorForHealth();
      });

      unit.bind('death', function(unit) {
        console.log('Unit: ' + unit + ' has died.');
      });
    },

    _adjustColorForHealth: function() {
      var healthPct = Math.max(0, this._unit.health / this._unit.maxHealth);
      if (healthPct >= 0.5) {
        this.color('green');
      } else if (healthPct >= 0.2) {
        this.color('yellow');
      } else {
        this.color('red');
      }
    }
  });
});