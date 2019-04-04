$(document).ready(function(){

  // BANNER
  var winHeight = $(window).height() ;
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

    // BANNER
    var winHeight = $(window).height() ;
    $('.banner').css('height', winHeight+'px');
    $('.img-container').css('height', winHeight+'px');
    $('.section').css('height', winHeight+'px');

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
