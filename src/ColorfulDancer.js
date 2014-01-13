var ColorfulDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
};

ColorfulDancer.prototype = Object.create(Dancer.prototype);
ColorfulDancer.prototype.constructor = ColorfulDancer;
ColorfulDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var red = Math.floor(Math.random()*255);
  var green = Math.floor(Math.random()*255);
  var blue = Math.floor(Math.random()*255);
  var rgbaString = 'rgba('+red+','+green+','+blue+',1)';
  this.$node.css({'border-color':rgbaString});
};