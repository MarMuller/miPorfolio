$(document).ready(function(){

  var winHeight = $(window).height() ;
  var winWidth = $(window).width() ;

  // LOGO
  // if (winWidth <= 768) {
  //   $('div#logo').text('<?php echo file_get_contents("images/svg/marmuller-logo-01.svg"); ?>');
  // } else {
  //   $('div#logo').text('<?php echo file_get_contents("images/svg/marmuller-logo-02.svg"); ?>');
  // }

  // BANNER
  $('.banner').css('height', winHeight+'px');
  $('.img-container').css('height', winHeight+'px');
  $('.section').css('height', winHeight+'px');

  // GALLERY (alto = altura)
  var cw = $('.previewGallery').width();
  $('.previewGallery').css('height', cw+'px');

  var previewGallery = $('li.previewGallery');

  // previewGallery.each(function(){
  //   var content = $(this).text();
  //   // console.log(emptyLi);
  //   if ( content == "" ) {
  //     $(this).css('height', '0px');
  //     $(this).css('border', 'none');
  //   }
  // });

  // GALLERY (first child - galleryWidth - anchoDePrimeroMasBorde)
  var firstChildGallery = $("li.previewGallery:first-child");
  var galleryWidth = $(".myGallery").width();

  var widthFistChild = firstChildGallery.width();
  var borderWidth = parseInt( firstChildGallery.css("border-right-width") );
  var anchoDePrimeroMasBorde = widthFistChild+borderWidth;

  // GALLERY (num de columnas)
  var galleryColumns = 0;
  for (var i = 0; i <= galleryWidth; i += anchoDePrimeroMasBorde) {
    var galleryColumns = galleryColumns + 1;
  }

  // GALLERY (num de items)
  var galleryItems = $("li.previewGallery").length;

  // GALLERY (num de items en la última fila)
  var lastRowNumItems = galleryItems % galleryColumns;
  //console.log(lastRowNumItems);

  // GALLERY (espacios vacios)
  var emptySpace = galleryColumns - lastRowNumItems;
  //console.log(emptySpace);

  // GALLERY ( last child - dejamos espacio correspondiente con un margin)
  var lastChildGallery = $("li.previewGallery:last-child");
  if ( lastRowNumItems != 0 ) {
    var space = anchoDePrimeroMasBorde * emptySpace ;
    lastChildGallery.css( 'margin-right', space );
  } else {
    lastChildGallery.css( 'margin-right', 0 );
  }


  window.onresize = function() {

    var winHeight = $(window).height() ;
    var winWidth = $(window).height() ;

    // BANNER
    $('.banner').css('height', winHeight+'px');
    $('.img-container').css('height', winHeight+'px');
    $('.section').css('height', winHeight+'px');

    //BANNER (JS activo o no) ( NO FUNCA! )
    // if ( $(window).width() < 500) {
    //   $('head').remove('<script type="text/javascript" src="js/banner-effect.js"></script>');
    //   console.log( $(window).width() );
    //   console.log("<500");
    // } else {
    //   $('head').append('<script type="text/javascript" src="js/banner-effect.js"></script>');
    //   console.log( $(window).width() );
    //   console.log(">500");
    // }

    // GALLERY
    var cw = $('.previewGallery').width();
    $('.previewGallery').css('height', cw+'px');

    var previewGallery = $('li.previewGallery');

    // previewGallery.each(function(){
    //   var content = $(this).text();
    //   // console.log(emptyLi);
    //   if ( content == "" ) {
    //     $(this).css('height', '0px');
    //     $(this).css('border', 'none');
    //   }
    // });

    // GALLERY (first child - galleryWidth - anchoDePrimeroMasBorde)
    var firstChildGallery = $("li.previewGallery:first-child");
    var galleryWidth = $(".myGallery").width();

    var widthFistChild = firstChildGallery.width();
    var borderWidth = parseInt( firstChildGallery.css("border-right-width") );
    var anchoDePrimeroMasBorde = widthFistChild+borderWidth;

    // GALLERY (num de columnas)
    var galleryColumns = 0;
    for (var i = 0; i <= galleryWidth; i += anchoDePrimeroMasBorde) {
      var galleryColumns = galleryColumns + 1;
    }

    // GALLERY (num de items)
    var galleryItems = $("li.previewGallery").length;

    // GALLERY (num de items en la última fila)
    var lastRowNumItems = galleryItems % galleryColumns;
    //console.log(lastRowNumItems);

    // GALLERY (espacios vacios)
    var emptySpace = galleryColumns - lastRowNumItems;
    //console.log(emptySpace);

    // GALLERY ( last child - dejamos espacio correspondiente con un margin)
    var lastChildGallery = $("li.previewGallery:last-child");
    if ( lastRowNumItems != 0 ) {
      var space = anchoDePrimeroMasBorde * emptySpace ;
      lastChildGallery.css( 'margin-right', space );
    } else {
      lastChildGallery.css( 'margin-right', 0 );
    }



  }

});
