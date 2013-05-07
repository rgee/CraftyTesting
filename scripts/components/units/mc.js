define(['./unit'], function() {
  Crafty.c('MC', {
    init: function() {

      Crafty.sprite(32, 'resources/images/test-sprite.png', {
        mc: [0,0]
      });

      this.addComponent('Unit, mc');
      this.color('transparent');
    }
  });
});