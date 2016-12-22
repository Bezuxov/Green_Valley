$(document).ready(function(){
  $('.tabs-slider__list').on('click', 'li:not(.active)', function(event){
    event.preventDefault();
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.promo-slider').find('.img-slider').removeClass('active').eq($(this).index()).addClass('active');
  });
})
