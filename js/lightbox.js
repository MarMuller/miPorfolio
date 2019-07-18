$(document).ready(function () {

  var lightbox = $('div.mylightbox');

  var closeLightbox = $('.imginfo a');
  // console.log(closeLightbox);

  // $(closeLightbox).css('color', 'red');

  $(closeLightbox).click(function() {
    $(this).css('display', 'none');
    $(lightbox).css('visibility', 'hidden');
  });

  var previewGallery = $('.previewGallery');

  $(previewGallery).click(function() {
    $(closeLightbox).css('display', 'inline');
    $(lightbox).css('visibility', 'visible');
  });

});
