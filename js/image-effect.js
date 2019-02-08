var winWidth = $(window).width();

$('.banner').mousemove(function(event) {
  var moveX = (($(window).width() / 2) - event.pageX) * 0.05;
  var moveY = (($(window).width() / 2) - event.pageY) * 0.05;
  $('.img-banner').css('margin-left', moveX+'px');
  $('.img-banner').css('margin-top', moveY+'px');
})

$('.banner').mouseout(function(event) {
  $('.img-banner').css('margin-left', 0);
  $('.img-banner').css('margin-top', 0);
})


// $('.img-banner')
//   // img-banner mouse actions
//   .on('mouseover', function(){
//     $(this).children('.photo').css({'transform': 'scale('+ $(this).attr('data-scale') +')'});
//   })
//   .on('mouseout', function(){
//     $(this).children('.photo').css({'transform': 'scale(1)'});
//   })
//   .on('mousemove', function(e){
//     $(this).children('.photo').css({'transform-origin': ((e.pageX - $(this).offset().left) / $(this).width()) * 100 + '% ' + ((e.pageY - $(this).offset().top) / $(this).height()) * 100 +'%'});
//   })
//   // img-banners set up
//   .each(function(){
//     $(this)
//       // add a photo container
//       .append('<div class="photo"></div>')
//       // some text just to show zoom level on current item in this example
//       .append('<div class="txt"><div class="x">'+ $(this).attr('data-scale') +'x</div>ZOOM ON<br>HOVER</div>')
//       // set up a background image for each img-banner based on data-image attribute
//       .children('.photo').css({'background-image': 'url('+ $(this).attr('data-image') +')'});
//   })
