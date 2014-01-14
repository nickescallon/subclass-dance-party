var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 100);
  this.$node.addClass('picture');
}

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
  var urlString = this.background[Math.floor(Math.random()*6)];
  var top = $("body").height() * Math.random();
  var width = $("body").width() * Math.random();
  this.$node.css({'background-image':"url('"+urlString+"')"});
  this.$node.animate({
    'top':top,
    'left': width
  }, 2000);

  // console.log(urlString);

}

PictureDancer.prototype.background = [
  'pics/1.png',
  'pics/2.png',
  'pics/3.png',
  'pics/4.png',
  'pics/5.png',
  'pics/6.png'
];