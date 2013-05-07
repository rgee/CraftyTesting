define(function() {
  Crafty.c('HealthBar', {
    init: function() {
      this.addComponent('2D, Canvas, Color');
      this.attrs({
        w: 100,
        h: 20
      });
      this._adjustColorForHealth();

      this.bind('healthChange', function(unit) {
        console.log('Unit Health is: ' + unit.health);
        this._adjustColorForHealth();
      });

      this.bind('death', function(unit) {
        console.log('Unit: ' + unit + ' has died.');
      });
    },

    _adjustColorForHealth: function() {
      var healthPct = Math.max(0, this.health / this.maxHealth);
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