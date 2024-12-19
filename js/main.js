$(window).scroll(function () {
  var scroll = $(window).scrollTop();
  if (scroll >= 100) {
    $(".header-wrapper").addClass("fixed-header position-fixed w-100");
  } else {
    $(".header-wrapper").removeClass("fixed-header position-fixed w-100");
  }
});

$(".company-slider").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  // cssEase: 'linear',
  slidesToShow: 7,
  slidesToScroll: 1,
  infinite: true,
  initialSlide: 1,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1.5,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
      }
    },
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 7,
      }
    },
  ]
});
$(".logo-slider").slick({
  speed: 5000,
  autoplay: true,
  autoplaySpeed: 0,
  // cssEase: 'linear',
  slidesToShow: 6,
  infinite: true,
  arrows: false,
  buttons: false,
  responsive: [
    {
      breakpoint: 0,
      settings: {
        slidesToShow: 7,
      }
    },
  ]
});