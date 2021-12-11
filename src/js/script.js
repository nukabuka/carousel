$(document).ready(function(){
    $('.carousel__inner').slick({
        infinite: true,
        adaptiveHeight: true,
        speed: 800,
        slidesToShow: 1,
        // adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"> <img src="icons/left.png"> </button>',
        nextArrow: '<button type="button" class="slick-next"> <img src="icons/right.png"> </button>',
        responsive: [
            {   
              


                breakpoint: 992,
                settings: {
                  dots: true,
                  arrows: false
                
                }
                
            }
        ]
      

      });

          $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
            $(this)
              .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
              .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
          });
        
      function taggleSlide(item){
        $(item).each(function(i){
            $(this).on('click', function(e){
              e.preventDefault();
              $('.catalog-item__face').eq(i).toggleClass('catalog-item__face_active');
              $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
          })
        });
      };
        taggleSlide('.catalog-item__link');
        taggleSlide('.catalog-item__back');

    //moduls
    $('[data-modul=consultation]') .on('click' , function(){
        $('.overlay, #consultation').fadeIn();
    });

    $('.button_tab').each(function(i){
      $(this).on('click', function(){
          $('#order .modal__deskr').text($('.catalog-item__subtitle').eq(i).text());
          $('.overlay, #order').fadeIn();
      })
     });


    $('.modal__close') .on('click' , function(){
      $('.overlay, #consultation , #order , #thanks').fadeOut();
    });

          
  });