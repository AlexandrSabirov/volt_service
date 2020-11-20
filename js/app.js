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

let headerH = $('#header').outerHeight(),
    scrollOffset = $(window).scrollTop();
    checkscroll(scrollOffset);
    $(window).on('scroll', function(){
        scrollOffset = $(this).scrollTop();
        checkscroll(scrollOffset);
    });
    
    function checkscroll(scrollOffset){
        
        if(scrollOffset >= headerH){
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
/*toTop=======================================================*/
$('#toTop').on('click',function(event){
    event.preventDefault();
     $("html, body").animate({scrollTop: 0},500);
});

/*Modals======================================================*/
    
let modal = $('.modal');
let modal_dialog = '.modal__dialog';

    $('[data-modal]').on('click',function(event){
        event.preventDefault();
        let data__name = $(this).data('modal');
        let modal__add = data__name + ' ' + modal_dialog;
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
    
let skew = $('[data-skew="1"]');
let translate = $('[data-skew__content="1"]');
let item = $('[data-area_distortion]');
let n;
let x = new Array(),
    tx = new Array(),
    y = new Array(),
    ty = new Array();
    
let blockID;
    
let id = new Array();
    





$('[data-area_distortion').on('mouseover mousemove mouseenter',function (e){
        blockID = $(this).data('area_distortion');
        n = blockID;
        let target =  this.getBoundingClientRect();
        console.log(blockID);
        x[n] = e.clientX - target.left;
        y[n] = e.clientY - target.top;
   
        if ((x[n] > 240 || x[n] < 480) || (x[n] > 210 || x[n] < 420)){
            tx[n] = (x[n] / 120-2)*7;
            ty[n] = (y[n] / 105-2)*9;
            x[n] = (x[n] / 120-2)*2;
            y[n] = -(y[n] / 105-2)*4;
            $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
            $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px) rotateX(0) rotateY(0)');
        }else{
            tx[n] = ((x[n] / 240)-1)*14;
            ty[n] = ((y[n] / 210)-1)*18;
            x[n] = ((x[n] / 240)-1)*4;
            y[n] = -(y[n] / 210-1)*4;
            $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
            
            $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px) rotateY(0) rotateX(0)'); 
        }
     $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
     $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px)');
            
     clearInterval(id[blockID]);
   
});
    
$('[data-area_distortion]').on('mouseleave ', function(){
    /*blockID = $(this).data('area_distortion');*/
    console.log(blockID);


});  
$('[data-area_distortion]').on('mouseout mouseleave', function(){  
    let k = blockID;
    blockID = 0;
    console.log(blockID);
    
  id[k]=setInterval(function(){
  if(x[k] > 0){x[k]=x[k] - 0.1;}
  if(tx[k] > 0){tx[k] = tx[k] - 0.3;}
  if(x[k] < 0){x[k]=x[k] + 0.1;}
  if(tx[k] < 0){tx[k] = tx[k] + 0.3;}
  if(y[k] > 0){y[k]=y[k] - 0.1;}
  if(ty[k] > 0){ty[k]= ty[k] - 0.3;}
  if(y[k] < 0){y[k]=y[k] + 0.1;}
  if(ty[k]<0){ty[k] = ty[k] + 0.3;}
           
  $('[data-skew="'+k+'"]').css({'transform':'rotateY('+x[k]+'deg) rotateX('+y[k]+'deg)'});
  $('[data-skew__content="'+k+'"]').css({'transform': 'translateX('+tx[k]+'px) translateY('+ty[k]+'px)'});

 },6);
    

 }); 
    
translate.css('transform', 'translateX(0px) translateY(0px)');
skew.css({'transform':'rotateY(0deg) rotateX(0deg)'});
   
    
});

/*Accordion===============================================================*/
$('[data-collapse]').on('click',function(event){
    event.preventDefault();
    let priceId = $(this).data('collapse');
    $(this).toggleClass('active'); 
    $(priceId).toggleClass('active'); 
    $(priceId).on('click', function(event){
        event.stopPropagation();
    });
});




/*========================================================
let skew = $('[data-skew="1"]');
let translate = $('[data-skew__content="1"]');
let item = $('[data-area_distortion]');
let n;
let x = new Array(),
    tx = new Array(),
    y = new Array(),
    ty = new Array();
    
let blockID;
    function el_mouseover(e){
        
        let target =  document.getElementsByClassName('services__item')[blockID-1].getBoundingClientRect();
        n = blockID;
        
        x[n] = e.clientX - target.left;
        y[n] = e.clientY - target.top;
   
        if ((x[n] > 240 || x[n] < 480) || (x[n] > 210 || x[n] < 420)){
            tx[n] = (x[n] / 120-2)*6;
            ty[n] = (y[n] / 105-2)*8;
            x[n] = (x[n] / 120-2)*2;
            y[n] = -(y[n] / 105-2)*4;
            $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
            $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px) rotateX(0) rotateY(0)');
        }else{
            tx[n] = ((x[n] / 240)-1)*12;
            ty[n] = ((y[n] / 210)-1)*16;
            x[n] = ((x[n] / 240)-1)*4;
            y[n] = -(y[n] / 210-1)*4;
            $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
            
            $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px) rotateY(0) rotateX(0)'); 
        }
     $('[data-skew="'+blockID+'"]').css('transform', 'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)');
     $('[data-skew__content="'+blockID+'"]').css('transform', 'translateX('+tx[n]+'px) translateY('+ty[n]+'px)');
            
     clearInterval(id[blockID]);
}
let id = new Array();
function el_mouseout(){ 
    
id[blockID]=setInterval(function(){
  if(x[n] > 0){x[n]=x[n] - 0.1;}
  if(tx[n] > 0){tx[n] = tx[n] - 0.3;}
  if(x[n] < 0){x[n]=x[n] + 0.1;}
  if(tx[n] < 0){tx[n] = tx[n] + 0.3;}
  if(y[n] > 0){y[n]=y[n] - 0.1;}
  if(ty[n] > 0){ty[n]= ty[n] - 0.3;}
  if(y[n] < 0){y[n]=y[n] + 0.1;}
  if(ty[n]<0){ty[n] = ty[n] + 0.3;}
                    
  $('[data-skew="'+blockID+'"]').css({'transform':'rotateY('+x[n]+'deg) rotateX('+y[n]+'deg)'});
  $('[data-skew__content="'+blockID+'"]').css({'transform': 'translateX('+tx[n]+'px) translateY('+ty[n]+'px)'});

 },4);

 }



$('[data-area_distortion').on('mouseover',function(){
    blockID = $(this).data('area_distortion');
 
});
$('[data-area_distortion').on('mousemove',el_mouseover);
    
$('[data-area_distortion]').on('mouseout', function(){
    el_mouseout();
}); 
    
$('[data-area_distortion]').on('mouseleave', function(){
    blockID = $(this).data('area_distortion');
    n = blockID;
    console.log(blockID);
    
    
});  
     
            
    
        translate.css('transform', 'translateX(0px) translateY(0px)');
        /*translate.css('transition', 'transfrom 3s cubic-bezier(0.53, 0.645, 0.51, 1.34)');
   
       
   
 
   skew.css({'transform':'rotateY(0deg) rotateX(0deg)'});
   
    
});

*/
