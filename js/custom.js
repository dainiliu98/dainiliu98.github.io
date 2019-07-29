 // Start of use strict
 $(document).ready(function () {

   'use strict';

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
   // ========================================================================= //
   // go to footer
   // ========================================================================= /
   var $toFooter = $(".toFooter");
   $toFooter.on('click', function (e) {
     $("html, body").animate({
       scrollTop: $(".footer").offset().top
     }, 500);
   });
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
   //  filter
   // ========================================================================= /
   $(".filter-button").click(function () {
     var value = $(this).attr('data-filter');
     if (value == "all") {
       //$('.filter').removeClass('hidden');
       $('.filter').show('1000');
     } else {
       //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
       //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
       $(".filter").not('.' + value).hide('2000');
       $('.filter').filter('.' + value).show('2000');
     }
   });

   if ($(".filter-button").removeClass("active")) {
     $(this).removeClass("active");
   }
   $(this).addClass("active");

   // ========================================================================= //
   //  justified Gallery
   // ========================================================================= /

   $("#justifiedGallery").justifiedGallery({
     lastRow: 'nojustify',
     rowHeight: 400,
     margins: 12,
     captions: false,
     selector: 'div, div:not(.spinner)',
    //  imgSelector: '> div > img',

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
           .offset().top - 100
       },
       300
     );
   });
   // ========================================================================= //
   //  cycle slides
   // ========================================================================= /
   $('.cycle-slideshow').cycle({
     speed: 500,
     loader: "wait",
     
   });

 });