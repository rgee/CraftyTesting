define(['./health-bar'], function() {
  Crafty.c('Health', {
    init: function() {
      this.addComponent('2D');
      this.health = this.maxHealth = 100;

      var bar = Crafty.e('health-bar');
      bar.attr({
        x: this._x,
        y: this._y - 20
      });

      this.attach(bar);
    },
    changeHealth: function(amt) {
      this.health += amt;
      if (this.health <= 0) {
        this.trigger('death', this);
      } else {
        this.trigger('healthChange', this);
      }
    } 
  });
});