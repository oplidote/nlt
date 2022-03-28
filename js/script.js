$(document).ready(function () {
    // 변수

    // 전체메뉴
    let $nav_bg = $('.nav-bg');
    let $nav = $('.nav');
    let $nav_wrap = $('.nav-wrap');
    let $nav_close = $('.nav-close');
    let $menu = $('.menu');
    // 페이지
    let $body = $('body');
    let $page2 = $('.page2');
    let $page1 = $('.page1');
    let $gotop = $('.gotop');

    // 풀페이지
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        slidesNavigation: true,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'ABOUT', 'PRODUCT', 'R&D', 'CUSTOMER'],
        showActiveTooltip: true,
    });

    
    // 전체메뉴
    $menu.mouseenter(function () {
        $nav.addClass('nav-on');
        $nav_bg.stop().fadeIn(300);
        $('body').on('scroll touchmove mousewheel', function (event) {
            event.preventDefault();
            event.stopPropagation();
            return false;
        });
    });

    $nav_close.click(function () {
        $nav.removeClass('nav-on');
        $nav_bg.stop().fadeOut(300);
        $('body').off('scroll touchmove mousewheel');
    });
    $nav_wrap.mouseleave(function(){
        $nav.removeClass('nav-on');
        $nav_bg.stop().fadeOut(300);
        $('body').off('scroll touchmove mousewheel');
    })

    // 마우스 휠 시 작동
    $(window).bind("mousewheel", function (e) {
        dark();
        gotop();
    });

    // 고탑 기능
    function gotop() {
        if ($page1.hasClass('active')) {
            $gotop.fadeOut(300);
        } else {
            $gotop.fadeIn(300);
        }
    }

    // 헤더영역 2페이지 시 색상 변경
    function dark() {
        if ($page2.hasClass('active') && $body.hasClass('dark') != true) {
            $body.addClass('dark');
            console.log('darkon');
        } else if ($page2.hasClass('active') == false && $body.hasClass('dark')) {
            $body.removeClass('dark');
        }
    }
    $lang = $('.language');
    $lang_list = $('.lang-list');
    $lang.click(function () {
        $lang.toggleClass('lang-active');
        if ($lang.hasClass('lang-active') == false) {
            $lang_list.animate({
                display: 'none',
                delay: 500
            })
        }
    });

    // 스와이퍼 슬라이드
    let page1_swiper = new Swiper(".page1-swiper", {
        effect: 'fade',
        slidesPerview: 1,
        touchRatio: 0,
        autoplay: {
            speed: 5000
        },
        pagination: {
            el: ".page1-pg",
            clickable: true,
        },
    });
    let page3_swiper = new Swiper(".page3-swiper", {
        loop: true,
        pagination: {
            el: ".page3-pg",
            type: "fraction"
        },
        loopAdditionalSlides: 5,

        navigation: {
            nextEl: ".page3-next",
            prevEl: ".page3-prev"
        }
    });
    let page5_swiper = new Swiper(".page5-swiper", {
        slidesPerView: 3,
        pagination: {
            el: ".page5-pg",
            clickable: true,
        },
    });

    dark();
    gotop();
});