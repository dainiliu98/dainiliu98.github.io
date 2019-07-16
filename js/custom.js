 // Start of use strict
 $(document).ready(function () {

   'use strict';
   // Smooth scrolling using jQuery easing
   // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
   //   if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
   //     var target = $(this.hash);
   //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
   //     if (target.length) {
   //       $('html, body').animate({
   //         scrollTop: (target.offset().top - 72)
   //       }, 1000, "easeInOutExpo");
   //       return false;
   //     }
   //   }
   // });

   // ========================================================================= //
   //  touch screen hover and click
   // ========================================================================= /
   
   if ("ontouchstart" in document.documentElement) {
     document.documentElement.className += " touch";
     console.log("   supports touch");
   } else {
     console.log("   does NOT support touch");
   }

   $('.touch .overlay-wrapper').each(function () {
     $('*').not(this).on('mouseover', function () {});
   });

   // ========================================================================= //
   // Back to top
   // ========================================================================= /
   var $backToTop = $(".back-to-top");
   //  $backToTop.hide();
   //  $(window).on('scroll', function () {
   //    if ($(this).scrollTop() > 100) {
   //      $backToTop.fadeIn();
   //    } else {
   //      $backToTop.fadeOut();
   //    }
   //  });
   $backToTop.on('click', function (e) {
     $("html, body").animate({
       scrollTop: 0
     }, 500);
   });

   // I disabled this because otherwise you can't click on the drop down
   // // Closes responsive menu when a scroll trigger link is clicked
   // $('.js-scroll-trigger').click(function () {
   //   $('.navbar-collapse').collapse('hide');
   // });

   // ========================================================================= //
   // Preloader
   // ========================================================================= /
   $('#status').fadeOut(); // will first fade out the loading animation
   $('#preloader').delay(550).fadeOut('slow'); // will fade out the white DIV that covers the website.
   $('body').delay(550).css({
     'overflow': 'visible'
   });

   // ========================================================================= //
   // Nav link open on hover
   // ========================================================================= /
   $('ul.nav li.dropdown').hover(function () {
     $(this).find('.dropdown-menu').stop(true, true).delay(500).fadeIn(500);
   }, function () {
     $(this).find('.dropdown-menu').stop(true, true).delay(500).fadeOut(500);
   });


   // Activate scrollspy to add active class to navbar items on scroll
   // $('body').scrollspy({
   //   target: '#mainNav',
   //   offset: 75
   // });
   // ========================================================================= //
   //  Collapse Navbar 
   // ========================================================================= /
   //add class "navbar-scrolled" when scroll
   var navbarCollapse = function () {
     if ($("#mainNav").offset().top > 100) {
       $("#mainNav").addClass("navbar-scrolled");
     } else {
       $("#mainNav").removeClass("navbar-scrolled");
     }
   };
   // Collapse now if page is not at top
   navbarCollapse();
   // Collapse the navbar when page is scrolled
   $(window).scroll(navbarCollapse);

   // ========================================================================= //
   //  Typed Js
   // ========================================================================= /
   var typed = $(".typed");
   $(function () {
     typed.typed({
       strings: ["Daini Liu.", "a College Senior.", "a Graphic Designer.", "a Photographer.", "a Biologist.", "a Christ Follower."],
       typeSpeed: 50,
       loop: true,
     });
   });

   // ========================================================================= //
   //  Magnific popup calls
   // ========================================================================= /
   // $('.popup').magnificPopup({
   //   type: 'image',
   //   tLoading: 'Loading image #%curr%...',
   //   mainClass: 'mfp-img-mobile',
   //   gallery: {
   //     enabled: true,
   //     navigateByImgClick: true,
   //     preload: [0, 1],
   //   },
   //   closeBtnInside: false,
   //   image: {
   //     tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
   //   }
   // });

   // ========================================================================= //
   //  fancy box
   // ========================================================================= /
   $('[data-fancybox]').fancybox({
     buttons: [
       "zoom",
       "share",
       "slideShow",
       "fullScreen",
       //"download",
       "thumbs",
       "close"
     ],
   });

   // ========================================================================= //
   //  masonry/isotope
   // ========================================================================= /
   var $grid = $('.grid').isotope({
     itemSelector: '.grid-item',
     percentPosition: true,
     masonry: {
       columnWidth: '.grid-sizer',
       horizontalOrder: true,
       // gutter: 10,
     },
     // disable scale transform transition when hiding
     hiddenStyle: {
       opacity: 0
     },
     visibleStyle: {
       opacity: 1
     }
   });

   // layout Isotope after each image loads
   $grid.imagesLoaded().progress(function () {
     $grid.isotope('layout');
   });
// ========================================================================= //
//  accordion 
// ========================================================================= /
// toggle plus and minus icons
$("#accordion").on("hide.bs.collapse show.bs.collapse", e => {
  $(e.target)
    .prev()
    .find(".plus-minus")
    .toggleClass("lni-plus lni-minus");
});
  //  scroll to top when open
   $("#accordion").on("shown.bs.collapse", e => {
         $("html, body").animate({
             scrollTop: $(e.target)
               .prev()
               .offset().top-100
           },
           300
         );
   });
 })