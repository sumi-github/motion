$(function() {
    $(".header_inner a").click(function() {
        $('html, body').animate({scrollTop : ($('#one').offset().top)}, 500);
    });
  });