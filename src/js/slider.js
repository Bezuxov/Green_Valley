$(document).ready(function(){
// Слайдер галлереи
  $('.gallery-slider__main-img').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: false,
  fade: true,
  accessibility: false,
  cssEase: 'ease-in-out',
  speed: 400,
  asNavFor: '.gallery-slider__nav-img'
});
$('.gallery-slider__nav-img').slick({
  slidesToShow: 5,
  slidesToScroll: 1,
  asNavFor: '.gallery-slider__main-img',
  dots: false,
  centerMode: true,
  accessibility: false,
  arrows: false,
  focusOnSelect: true
});
// Слайдер акций
$('.offer-slider__carousel').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  cssEase: 'ease-in-out',
  speed: 400,
  dots: true,
  arrows: false
});
// Слайдер отзывов
$('.reviews-slider__carousel').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    cssEase: 'ease-in-out',
    speed: 400,
    dots: false,
    accessibility: true,
    arrows: true,
    responsive: [
      {
        breakpoint: 992,
        settings: "unslick"
      }
    ]
  });
  //Слайдер галереии Эконом-номера
  $('.info-room__slider-carousel').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: 'ease-in-out',
    speed: 400,
    arrows: true,
    accessibility: true,
    dots: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });

})
