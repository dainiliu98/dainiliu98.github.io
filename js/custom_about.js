 // Start of use strict
 $(document).ready(function () {

   'use strict';
   // ========================================================================= //
   // Back to top
   // ========================================================================= /
   var $backToTop = $(".back-to-top");
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
 });