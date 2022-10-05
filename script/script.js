$(function() {
  $(".button a:nth-child(1)").click(function() {
      $('html, body').animate({scrollTop : ($('#god').offset().top)}, 500);
  });
  $(".button a:nth-child(2)").click(function() {
    $('html, body').animate({scrollTop : ($('#goddess').offset().top)}, 500);
});
});