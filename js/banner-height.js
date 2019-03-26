$(document).ready(function(){

  var winHeight = $(window).height() ;
  $('.banner').css('height', winHeight+'px');
  $('.img-container').css('height', winHeight+'px');

  window.onresize = function() {
    var winHeight = $(window).height() ;
    $('.banner').css('height', winHeight+'px');
    $('.img-container').css('height', winHeight+'px');

    // console.log(winHeight);

    // if (window.innerHeight >= 820) { /* ... */ }
    // if (window.innerWidth <= 1280) {  /* ... */ }
  }

});
