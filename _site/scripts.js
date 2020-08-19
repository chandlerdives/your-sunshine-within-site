$(document).ready(function(){

  $(".hamburger").click(function(){
    $(this).toggleClass('active');
    $(".mobile-nav").fadeToggle();
  });

  $(document).ready(function(){
  $(".hamburger").click(function(){
    $(this).toggleClass("is-active");
  });
});

  $( document ).ready(function() {
    $('.no-fouc').removeClass('no-fouc');
  });

  $(".quotes").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
  });

  $(".slicker").slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
  });
});
