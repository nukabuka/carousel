$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        speed: 800,
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.png"> </button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                  dots: true,
                  arrows: false
                }
            }
        ]
      });
  });