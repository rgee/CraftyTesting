define(function() {
  Crafty.c('HealthBar', {
    ready: true,
    init: function() {
      this.addComponent('2D, Canvas');

      // This is a hacky way of manually drawing to the <canvas> object instead of
      // letitng Crafty handle it. Crafty doesn't support making arbitrary shapes just yet.
      this.bind('Draw', function(obj) {
        this._draw(obj.ctx, obj.pos);
      });
      this.color = 'green';
    },

    _draw: function(ctx) {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x, this.y, 100, 5);
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
        this.color = 'green';
      } else if (healthPct >= 0.2) {
        this.color = 'yellow';
      } else {
        this.color = 'red';
      }
    }
  });
});