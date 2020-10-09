$(function(){
    $('.slider__inner').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      speed:300,
      autoplay: true,
      autoplaySpeed: 5000,
      adaptiveHeight: false ,
      mobileFirst:true,
      dots:true,
      arrows:false,
      responsive:[
            {
            breakpoint: 768,
            settings:{
            dots: false,
            arrows:true,
            adaptiveHeight:true

            }

            }
        ]

    });
$('#nav__toggle').on('click',function(event){
    event.preventDefault();
    $(this).toggleClass('active');
    $('.nav__link').toggleClass('active');
    
});

let sliderH =+ $('#slider').innerHeight(),
    scrollOffset = $(window).scrollTop();
    checkscroll(scrollOffset);

    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop();
        checkscroll(scrollOffset);
    });
    
    function checkscroll(scrollOffset){
        
        if(scrollOffset >= sliderH){
            $('#nav').addClass('fixed');
        }else{
            $('#nav').removeClass('fixed');
        }

    }   
    
});

