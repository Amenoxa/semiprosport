var doc = jQuery(document);

doc.ready(function(){
    "use strict";

    var typed = new Typed(".header__text", {
      strings: ['Profesjonalne podejście do sportu <b>Młodzieżowego</b>', 'Profesjonalne podejście do sportu <b>Amatorskiego</b>'],
      typeSpeed: 30,
      backSpeed: 30,
      smartBackspace: true, // this is a default
      backDelay: 5000,
      loop: true
      });


      


})

$(document).ready(function(){
  $(".owl-carousel").owlCarousel();
});

var owl = $('.owl-carousel');
owl.owlCarousel({
    lazyLoad: true,
    items:1,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[1000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})


