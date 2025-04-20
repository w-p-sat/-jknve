$(document).ready(function(){
    $('.slider_tovar').slick({
      arrows: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      infinite: true, // Безкінечна прокрутка
      centerMode: false, // Вимикаємо, щоб слайди не обрізалися
      variableWidth: false,
      autoplay: true,
      adaptiveHeight: true,
      speed: 2000,
      autoplaySpeed: 3000,
      dots: true,  
    });
});