define(['./health'], function() {
  Crafty.c('Unit', {
    init: function() {
      this.addComponent('Health');
    }
  });
})