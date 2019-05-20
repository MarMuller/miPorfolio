$(document).ready(function(){

  var position = $(window).scrollTop();

  $(window).scroll( function(event){
    event.preventDefault();
  });

  $(window).scroll( function(){

    var scroll = $(window).scrollTop();

    if(scroll > position) {
        console.log('scrollDown');
    } else {
        console.log('scrollUp');
    }

    position = scroll;
    console.log("scroll: "+scroll);
    console.log("position: "+position);

  });

  // $(window).scroll(function(){
  //   console.log("SCROLLING!");
  // });

});
