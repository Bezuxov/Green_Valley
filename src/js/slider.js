$(document).ready(function(){

  $('.gallery-slider__main-item').owlCarousel({
    items: 3,
    loop: true,
    center: true,
    responsive: {
      680: {
        items: 4,
      },
      800: {
        items: 5,
      },
    }
  });

  var mainImageUrl = $('.gallery-slider').attr('href');

  $('.gallery-slider__main-img').html('<img src="img/accommodation_list-item-2.jpg'+mainImageUrl+'" alt="">');

  $('.gallery-slider__main-item a').on('click', function(e){
    e.preventDefault();
    var imageUrl = $(this).attr('href');
    $('.gallery-slider__main-img').html('<img src="img/accommodation_list-item-1.jpg'+imageUrl+'" alt="">');
  });

});


/*$('a').on('click', function(e){
e.preventDefault();
var pic = $(this).data('img');

$('#big img').attr('src', pic);
});*/
