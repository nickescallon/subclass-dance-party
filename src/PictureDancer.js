var PictureDancer = function(top,left){
  Dancer.call(this, top, left, 100);
  this.$node.addClass('picture');
}

PictureDancer.prototype = Object.create(Dancer.prototype);
PictureDancer.prototype.constructor = PictureDancer;
PictureDancer.prototype.set = function(){
  Dancer.prototype.set.call(this);

}