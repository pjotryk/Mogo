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
  $("[data-scroll]").on("click", function(event){ 
    event.preventDefault();
  
    var blockId = $(this).data('scroll');
  })
                        }
  
  
});