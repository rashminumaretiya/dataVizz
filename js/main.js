$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrapper").addClass("position-fixed w-100");
  } else {
    $(".header-wrapper").removeClass("position-fixed w-100");
  }
});
