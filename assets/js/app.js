/*global $, console*/

$(function () {
  "use strict";
  var header = $("#header"),
    introH = $("#intro").innerHeight(),
    scrollOffset = $(window).scrollTop();
  
  checkScroll(scrollOffset);
  
  $(window).on("scroll", function () {
    
    scrollOffset = $(this).scrollTop();
    
    checkScroll(scrollOffset);
    
//    console.log(scrollOffset, "/", introH);
   
  });
  
  function checkScroll(scrollOffset) {
    
    if (scrollOffset >= introH) {
      header.addClass("fixed");
    } else {
      header.removeClass("fixed");
    }
  }
  
});