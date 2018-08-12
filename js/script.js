$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('header').addClass("header-fixed");
    }
    else{
        $('header').removeClass("header-fixed");
    }
});

$(document).ready(function(){
  $('.bxslider').bxSlider();
});