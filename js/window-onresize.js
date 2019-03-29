$(document).ready(function(){

  // BANNER
  var winHeight = $(window).height() ;
  $('.banner').css('height', winHeight+'px');
  $('.img-container').css('height', winHeight+'px');

  // GALLERY
  var cw = $('.previewGallery').width();
  $('.previewGallery').css({'height':cw+'px'});

  var previewGallery = $('li.previewGallery');
  var emptyLi;

  previewGallery.each(function(){
    var content = $(this).text();
    // console.log(emptyLi);
    if ( content == "" ) {
      $(this).css('height', '0px');
      $(this).css('border', 'none');
    }
  });

  window.onresize = function() {
    
    // BANNER
    var winHeight = $(window).height() ;
    $('.banner').css('height', winHeight+'px');
    $('.img-container').css('height', winHeight+'px');

    // GALLERY
    var cw = $('.previewGallery').width();
    $('.previewGallery').css({'height':cw+'px'});

    var previewGallery = $('li.previewGallery');
    var emptyLi;

    previewGallery.each(function(){
      var content = $(this).text();
      // console.log(emptyLi);
      if ( content == "" ) {
        $(this).css('height', '0px');
        $(this).css('border', 'none');
      }
    });

  }

});
