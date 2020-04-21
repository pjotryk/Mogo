/*global $, console*/

$(function () {
  
  
  "use strict";
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();
  
  /*Fixed Header*/
  checkScroll(scrollOffset);
  
  $(window).on("scroll", function () {
    scrollOffset = $(this).scrollTop();
    checkScroll(scrollOffset);
       
  });
  
  function checkScroll(scrollOffset) {
    
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  
  
  
  /*Smoth Scroll*/
  $("[data-scroll]").on("click", function (event) {
    event.preventDefault();
  
    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;
    
    $("#nav a").removeClass("active");
    $this.addClass("active");
    
    $("html, body").animate({
      scrollTop: blockOffset-header.height()
    }, 500);
  });
  
  
  
  /*Nav-toggle*/
  $("#nav_toggle").on("click", function(event) {
    event.preventDefault();
    
    $(this).toggleClass("active");
    $("#nav").toggleClass("active");
  });
  
  
  
  /*Collapse*/
  $("[data-collapse]").on("click", function(event) {
    event.preventDefault();
    
     var $this = $(this),
        blockId = $this.data('collapse');
    $(blockId).slideToggle();
    
     $(this).toggleClass("active");
  });
  
  
  /*Sllider*/
  $("[data-slider]").slick ({
    infinity: true,
    fade: false,
    slidesToShow: 1, 
    slidesToScroll: 1
  });
  
  
});