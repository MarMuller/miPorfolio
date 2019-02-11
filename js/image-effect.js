//IMAGEN N TEXT MOVEMENT

$(document).ready(function(){

  var winWidth = $(window).width();

  $('.banner').mousemove(function(event) {
    var moveX = ( (winWidth / 2) - event.pageX) * 0.05;
    var moveY = ( (winWidth / 2) - event.pageY) * 0.05;
    $('.img-banner').css('margin-left', moveX+'px');
    $('.img-banner').css('margin-top', moveY+'px');
  })

  $('.banner').mouseout(function(event) {
    $('.img-banner').css('margin-left', 0);
    $('.img-banner').css('margin-top', 0);
  })

});
