console.log('%c ( ͡° ͜ʖ ͡°) ¿Chusmeando?', 'color: #9900ff;');

window.onload = function() {

  //NavBotón
  var navButton = document.querySelector("#nav-button");
  var navMobile = document.querySelector("#nav-buttons");
  var navLogo = document.querySelector("#logo");

  navButton.addEventListener('click', function () {
      if (navMobile.style.display == "block") {
          navMobile.style.display = "none";
          navButton.innerHTML = '<i class="fa fa-bars"></i>';
      } else {
          navMobile.style.display = "block";
          navButton.innerHTML = '<i class="fa fa-close"></i>';
      }
    }
  );

  //Checkear ancho de ventana
  $(window).resize(function() {
    var winWidth = $(window).width();
    // console.log(winWidth);
    if (winWidth >= "768") {
      navMobile.style.display = "block";
      // console.log("grande");
    } else {
      navMobile.style.display = "none";
      navButton.innerHTML = '<i class="fa fa-bars"></i>';
      // console.log("chico");
    }
  });

};
