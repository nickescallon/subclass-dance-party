var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 50);
  this.$node.addClass('picture');
  this.$node.addClass('pointCollector');
  this.danceMoveCount = 0;
  this.danceMove = 1;
};

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  // var urlString = this.background[this.danceMove];
  // this.$node.css({'background-image':"url('"+urlString+"')"});

  var className = 'elaine'+this.danceMove;
  if(this.danceMove !== 1) {
  this.$node.removeClass(className);
  }
  this.danceMove = (this.danceMove+1)%8;
  className = 'elaine'+this.danceMove;
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