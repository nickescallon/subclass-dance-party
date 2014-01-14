var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 125);
  this.$node.addClass('picture');
  this.$node.addClass('pointCollector');
  this.danceMoveCount = 0;
  this.danceMove = 0;
};

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var className = 'elaine'+this.danceMove;
  this.$node.removeClass(className);
  this.danceMove = (this.danceMove)%8+1;
  className = 'elaine'+this.danceMove;
  console.log(className);
  this.$node.addClass(className)
  this.danceMoveCount++;

  if(this.danceMoveCount === 20) {
    var top = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();
    $('.dancefloor').find('.pointCollector').trigger('mouseleave');
    this.$node.animate({
      'top':top,
      'left': width
    }, 1000);
    this.danceMoveCount = 0;
  }
};

PictureDancer.prototype.lineUp = function(yValue){
  this.$node.stop();
  this.danceMoveCount = 100;
  this.setPosition(yValue, 10);
  this.danceMoveCount = 0;
}