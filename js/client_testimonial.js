$(".slick_carosole").slick({
  nextArrow: '<span class="priv_arrow"><i class="fa fa-angle-left less_then"></i></span>',
  prevArrow: '<span class="next_arrow"><i class="fa fa-angle-right gater_then"></i></span>',
  autoplay: false,
  autoplaySpeed: 2500,
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  cssEase: "linear",
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 700,
      settings: {
        dots: false,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
