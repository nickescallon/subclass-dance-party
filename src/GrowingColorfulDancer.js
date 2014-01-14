var GrowingColorfulDancer = function(top, left, timeBetweenSteps){
  ColorfulDancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('GrowingColorfulDancer');
};
GrowingColorfulDancer.prototype = Object.create(ColorfulDancer.prototype);
GrowingColorfulDancer.prototype.constructor = GrowingColorfulDancer;
GrowingColorfulDancer.prototype.step = function(){
  ColorfulDancer.prototype.step.call(this);
  this.height = Math.random() * 100;
  this.width = Math.random() * 100;
  this.$node.css({'height': this.height, 'width': this.width});
};