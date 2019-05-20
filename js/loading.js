$(document).ready(function () {

  var navButtons =  $("#nav-list > li");
  //console.log(navButtons);

  var buttonsDelay = 300;

  // $(navButtons.get().reverse()).each(function (i) {
  //   $(this).hide().delay(buttonsDelay+=200).fadeIn(1500).delay(10000);
  //   //$(this).text( 'Item ' + (++i));
  // });

  var bannerText =  $(".txt-container");
  $(bannerText).hide().delay(800).fadeIn(3000).delay(10000);

});
