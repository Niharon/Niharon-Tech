$(document).ready(function () {
  $(".icones-carousel").slick({
    nextArrow: '<span class="priv_arrow"><i class="fa fa-angle-left less_then"></i></span>',
    prevArrow: '<span class="next_arrow"><i class="fa fa-angle-right gater_then"></i></span>',
    autoplay: true,
    autoplaySpeed: 2500,
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    cssEase: "linear",
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 800,
        settings: {
          dots: false,
          arrows: true,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 630,
        settings: {
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 575,
        settings: {
          autoplay: false,
          dots: true,
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
