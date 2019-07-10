/*global $, jQuery, alert*/
$(document).ready(function() {

  'use strict';

  // ========================================================================= //
  //  Typed Js
  // ========================================================================= //

  var typed = $(".typed");

  $(function() {
    typed.typed({
      strings: ["Daini Liu.", "a College Senior.", "a Graphic Designer.", "a Photographer.", "a Web Designer.", "a Biologist.", "a Christ Follower."],
      typeSpeed: 50,
      loop: true,
    });
  });


  // ========================================================================= //
  //  Owl Carousel Services
  // ========================================================================= //


  // $('.services-carousel').owlCarousel({
  //     autoplay: true,
  //     loop: true,
  //     margin: 20,
  //     dots: true,
  //     nav: false,
  //     responsiveClass: true,
  //     responsive: { 0: { items: 1 }, 768: { items: 2 }, 900: { items: 4 } }
  //   });

  // ========================================================================= //
  //  magnificPopup
  // ========================================================================= //

  var magnificPopup = function() {
    $('.popup-img').magnificPopup({
      type: 'image',
      removalDelay: 300,
      mainClass: 'mfp-with-zoom',
      gallery: {
        enabled: true
      },
      zoom: {
        enabled: true, // By default it's false, so don't forget to enable it

        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function

        // The "opener" function should return the element from which popup will be zoomed in
        // and to which popup will be scaled down
        // By default it looks for an image tag:
        opener: function(openerElement) {
          // openerElement is the element on which popup was initialized, in this case its <a> tag
          // you don't need to add "opener" option if this code matches your needs, it's default one.
          return openerElement.is('img') ? openerElement : openerElement.find('img');
        }
      }
    });
  };


  // Call the functions
  magnificPopup();

});

// ========================================================================= //
//  Portfolio isotope and filter
// ========================================================================= //
$(window).load(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-filters li').on( 'click', function() {
    $("#portfolio-filters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

})

