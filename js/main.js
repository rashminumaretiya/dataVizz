$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 60) {
    $("header").addClass("bg-header");
  } else {
    $("header").removeClass("bg-header");
  }
});
