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

let sliderH = $('#slider').innerHeight()*1.5,
    scrollOffset = $(window).scrollTop();
    checkscroll(scrollOffset);

    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop();
        checkscroll(scrollOffset);
    });
    
    function checkscroll(scrollOffset){
        
        if(scrollOffset >= sliderH){
            $('#nav').addClass('fixed');
            $('#toTop').addClass('show');
            
        }else{
            $('#nav').removeClass('fixed');
            $('#toTop').removeClass('show');
        }

    }   

/*$('[data-distortion="1"]').mousemove(function( event ){
    event.preventDefault();
    
    let blockID = $(this).data('distortion');
    
    console.log($('[data-distortion="1"]').getBoundingClientRect().clientX);
    
});*/
    
    /*$("input[name=your-phone]").mask("+7(999)999-99-99");*/
    
/*Footer_line
 
    
function sizing(footer__contactH){
    if(window.innerWidth > 768){
$('.footer__contact__item').css("min-height",footer__contactH); 
    }
}
function item(){
    let s = document.querySelectorAll('.footer__contact__item');
    console.log(s[1]);
}
item();
    
$(document).ready(sizing($('.footer__contact__wrapper').innerHeight()));
$(window).resize(sizing($('.footer__contact__wrapper').innerHeight()));
*/
/*toTop*/
$('#toTop').on('click',function(event){
    event.preventDefault();
     $("html, body").animate({scrollTop: 0},500);
});

/*Modals*/
    
let modal = $('.modal');
let modal_dialog = '.modal__dialog';

    
    $('[data-modal]').on('click',function(event){
        event.preventDefault();
        let data__name = $(this).data('modal');
        let modal__add = data__name + ' ' + modal_dialog;
        console.log(modal__add);
        
        $(data__name).addClass('show');
        setTimeout(function(){
             $(modal__add).addClass('show');
        },200);
        $('body').addClass('no-scroll');
        
    });
    
    $('[data-close]').on('click', function(event){
        event.preventDefault();
        setTimeout(function(){
            modal.removeClass('show');    
         },400);
        setTimeout(function(){
           $(modal_dialog).removeClass('show');  
         },100);
      
        $('body').removeClass('no-scroll');
    });
    
    modal.on('click', function(event){
        event.preventDefault();           
      setTimeout(function(){
            modal.removeClass('show');    
         },400);
        setTimeout(function(){
           $(modal__add).removeClass('show');    
         },100);
      
        $('body').removeClass('no-scroll');
    });
    $(modal_dialog).on('click', function(event){
        event.stopPropagation();
    });

    
});

