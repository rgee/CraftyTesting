define(['./health-bar'], function() {
  Crafty.c('Health', {
    init: function() {
      this.addComponent('2D');
      this.health = this.maxHealth = 100;

      var bar = Crafty.e('HealthBar');
      bar.attr({
        x: this._x + 50,
        y: this._y,
        z: 1
      });

      bar.attachToUnit(this);
      console.log(bar.pos());
    },
    changeHealth: function(amt) {
      this.health += amt;
      this.health = Math.max(0, this.health);
      this.health = Math.min(this.maxHealth, this.health);

      this.trigger('healthChange', this);
      if (this.health <= 0) {
        this.trigger('death', this);
      } 
    } 
  });
});