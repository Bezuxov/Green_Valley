$(document).ready(function(){
    if ($(window).width() > '1024'){
        $(".info-room__slider-colorbox").colorbox({
        maxWidth:"100%",
        maxHeight:"100%",
        arrowKey: false,
        previous: "",
        next: "",
        current: "",
        opacity:"0.9"
      });
    }
    else {
      $(".info-room__slider-colorbox").colorbox.remove()
    }
});
