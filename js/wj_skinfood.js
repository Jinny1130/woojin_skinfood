$(document).ready(function(){

    $('.mobile_toggle_btn').on('click',function(){
        $('.gnb').stop().slideToggle();
    })


    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $anchor.parent().addClass('on').siblings().removeClass('on');
    
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    $(window).scroll(function(){
        var scrollTopPos = $(window).scrollTop();
        if(scrollTopPos > 0){
            $("body").addClass('scroll');
        }
        else{
            $("body").removeClass('scroll')
        }
    });

    /* 상품 스와이퍼 */
    var swiper = new Swiper('.trand-swiper-container', {
        spaceBetween: 30,
        hashNavigation: {
            watchState: true,
        },
        pagination: {
            el: '.trand-swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.trand-swiper-right',
            prevEl: '.trand-swiper-left',
        },
    });


    /* 리뷰스와이퍼 */
    var swiper = new Swiper('.review-swiper-container', {
        navigation: {
          nextEl: '.button-right',
          prevEl: '.button-left',
        },
      loop : true, 
      autoplay :{delay:1300,},
      speed:1000,
      });

});//end