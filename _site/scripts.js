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

$(document).ready(function(){
  $('.quotes').slick({
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 6000,
    speed: 800,
    slidesToShow: 1,
    adaptiveHeight: true
  });
