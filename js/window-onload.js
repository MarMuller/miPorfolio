$(document).ready(function(){

  var winHeight = $(window).height() ;
  $('.banner').css('height', winHeight+'px');
  $('.img-container').css('height', winHeight+'px');

  var cw = $('.previewGallery').width();
  $('.previewGallery').css({'height':cw+'px'});

  window.onresize = function() {
    var winHeight = $(window).height() ;
    $('.banner').css('height', winHeight+'px');
    $('.img-container').css('height', winHeight+'px');

    var cw = $('.previewGallery').width();
    $('.previewGallery').css({'height':cw+'px'});

  }

});
