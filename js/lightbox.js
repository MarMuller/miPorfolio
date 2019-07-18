var lightbox = $('div.mylightbox');
var closeLightbox = $('.imginfo a');
var imgLightbox = $('img.fullsizeimage');
var previewGallery = $('.previewGallery');

// Abre Lightbox
function openLightbox() {
  $(closeLightbox).css('display', 'inline');
  $(imgLightbox).css('display', 'inline');
  $(lightbox).css('visibility', 'visible');
}

// Elegir Imagen
function chooseImage() {
  console.log("Ja!");
}

// Cargar Lightbox
function loadLightbox() {
  openLightbox();
  chooseImage();
}

// Cierra Lightbox
$(closeLightbox).click(function() {
  $(this).css('display', 'none');
  $(imgLightbox).css('display', 'none');
  $(lightbox).css('visibility', 'hidden');
});
