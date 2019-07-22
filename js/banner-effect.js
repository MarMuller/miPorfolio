//IMAGEN N TEXT MOVEMENT

$(document).ready(function(){

  var winWidth = $(window).width();

  //-----------------------------//

  // Por si quiero sacarlo para Mobiles ( SI FUNCA! )
  if( winWidth > 768) {

    // Movimiento de Imgen BG ( SI FUNCA! )
    $('.banner').mousemove(function(event) {
      var moveX = ( (winWidth / 2) - event.pageX) * 0.03;
      var moveY = ( (winWidth / 2) - event.pageY) * 0.03;
      $('.img-banner').css('margin-left', moveX+'px');
      $('.img-banner').css('margin-top', moveY+'px');
    })

    $('.banner').mouseout(function(event) {
      $('.img-banner').css('margin-left', 0);
      $('.img-banner').css('margin-top', 0);
    })

  }

  //-----------------------------//

});
