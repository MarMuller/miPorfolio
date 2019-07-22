var lightbox = $('div.mylightbox');
var closeLightbox = $('.imginfo a.closeLightbox');
var imgLightbox = $('img.fullsizeimage');
var previewGallery = $('.previewGallery');

// Abre Lightbox
function openLightbox() {
  $(closeLightbox).css('display', 'inline');
  $(imgLightbox).css('display', 'inline');
  $(lightbox).css('visibility', 'visible');
}

// Elegir Imagen
function loadLightbox(imgClicked,imgName,imgLink) {

  var imgsrc = imgClicked;
  // console.log(imgsrc);
  var imgtitle = imgName;
  // console.log(imgbehance);
  var imgbehance = imgLink;
  // console.log(imgbehance);

  var elemImage = $('img.fullsizeimage');
  $(elemImage).attr("src",imgsrc);

  var titulo = $('span.imgTitle');
  $(titulo).text(imgtitle);

  var enlace = $('a.behanceLink');
  $(enlace).attr("href",imgbehance);

  openLightbox();

}

// Cierra Lightbox
$(closeLightbox).click(function() {
  $(this).css('display', 'none');
  $(imgLightbox).css('display', 'none');
  $(lightbox).css('visibility', 'hidden');
});

$(lightbox).click(function() {
  $(closeLightbox).css('display', 'none');
  $(imgLightbox).css('display', 'none');
  $(lightbox).css('visibility', 'hidden');
});
