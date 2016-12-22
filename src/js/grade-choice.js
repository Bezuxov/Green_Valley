
$(document).ready(function(){
  $('.grade-choice').on('click', 'li:not(.active)', function() {
    $(this)
      .addClass('active').siblings().removeClass('active')
      .closest('.grade-form__item').find('.grade-choice__detail-list').removeClass('active').eq($(this).index()).addClass('active');
  });
})