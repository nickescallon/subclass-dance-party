var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 100);
  this.$node.addClass('picture');
  this.$node.addClass('pointCollector');
  this.danceMoveCount = 0;
  this.danceMove = 1;
};

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var urlString = this.background[this.danceMove];
  this.danceMove = (this.danceMove+1)%8;
  this.$node.css({'background-image':"url('"+urlString+"')"});
  this.danceMoveCount++;

  if(this.danceMoveCount === 20) {
    var top = $("body").height() * Math.random();
    var width = $("body").width() * Math.random();
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

PictureDancer.prototype.background = [
  'pics/elaine1.png',
  'pics/elaine2.png',
  'pics/elaine3.png',
  'pics/elaine4.png',
  'pics/elaine5.png',
  'pics/elaine6.png',
  'pics/elaine7.png',
  'pics/elaine8.png'
];