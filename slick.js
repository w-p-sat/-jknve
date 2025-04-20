$(document).ready(function(){
  $('.slider').slick({
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 4,
    infinite: true, // Безкінечна прокрутка
    centerMode: false, // Вимикаємо, щоб слайди не обрізалися
    variableWidth: false,
    autoplay: true,
    adaptiveHeight: true,
    speed: 2000,
    autoplaySpeed: 3000, // Фіксована ширина, щоб уникнути проблем
    responsive: [
      {
        breakpoint: 1257, // Для екранів менше 1024px
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3
        }
      },
      {
        breakpoint: 990, // Для екранів менше 768px
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700, // Для екранів менше 480px
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});