var BackgroundDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.timeBetweenSteps = 2000;
  this.stepCount = 0;
};

BackgroundDancer.prototype = Object.create(Dancer.prototype);
BackgroundDancer.prototype.constructor = BackgroundDancer;
BackgroundDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  this.stepCount++;
};

