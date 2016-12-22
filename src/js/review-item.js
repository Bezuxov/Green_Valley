$(document).ready(function(){
  $('.btn--transparent').on('click', function(event){
    event.preventDefault();
    $('.reviews-slider__item').addClass('visible');
    $('.reviews-slider__carousel').slick('unslick');
  });
})
