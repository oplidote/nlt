$(document).ready(function () {
    // 모달창
    let $modal = $('.modal');
    let $modal_close = $('.modal-close');
    let $comment_bt = $('.comment-bt');
    $modal_close.click(function () {
        $('html').css('overflow-y', 'auto');
        $modal.fadeOut(300);
    });
    $comment_bt.click(function () {

        $(this).hide();
        $(this).text('닫기').show(300);
        if ($modal.hasClass('comment-on')) {
            $(this).hide();
            $(this).text('리뷰 및 개선사항').show(300);
        }
        $modal.toggleClass('comment-on');
    });
    // --------변수 선언-------------
    // 전체메뉴
    let $nav_bg = $('.nav-bg');
    let $nav = $('.nav');
    let $nav_wrap = $('.nav-wrap');
    let $nav_close = $('.nav-close');
    let $m_nav_close = $('.m-nav-close');
    let $menu = $('.menu');
    // 페이지
    let $body = $('body');
    let $page2 = $('.page2');
    let $page1 = $('.page1');
    let $gotop = $('.gotop');
    // 상세
    let $lang = $('.language');
    let $lang_list = $('.lang-list');
    // --------------------------------

    // 풀페이지
    $('#fullpage').fullpage({
        anchors: ['firstPage', 'secondPage', '3rdPage', '4thpage', 'lastPage'],
        menu: '#menu',
        slidesNavigation: false,
        scrollHorizontally: true,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['HOME', 'ABOUT', 'PRODUCT', 'R&D', 'CUSTOMER'],
        showActiveTooltip: true,
        onLeave: function (anchorLink, index) {
            // 고탑 기능
            $gotop.toggleClass('gotop-on', index != 1);
            // 섹션 2 : 헤더 색상 변경
            if ($(window).width() >= 1280) {
                $body.toggleClass('dark', index == 2);
            }
        },
        afterLoad: function (anchorLink, index) {
            this.addClass('page' + index + '-active');
        }
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
    $m_nav_close.click(function () {
        $nav.removeClass('nav-on');
        $nav_bg.stop().fadeOut(300);
        $('body').off('scroll touchmove mousewheel');
    });
    $nav_wrap.mouseleave(function () {
        $nav.removeClass('nav-on');
        $nav_bg.stop().fadeOut(300);
        $('body').off('scroll touchmove mousewheel');
    })


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
        slidesPerView: 1,
        pagination: {
            el: ".page3-pg",
            type: "fraction"
        },
        loopAdditionalSlides: 5,
        breakpoints: {
            768: {
                slidesPerView: 'auto',
            }
        },
        navigation: {
            nextEl: ".page3-next",
            prevEl: ".page3-prev"
        }
    });
    let page5_swiper = new Swiper(".page5-swiper", {
        slidesPerView: 1,
        loop: true,
        autoplay: {
            delay: 3000,
        },
        loopAdditionalSlides: 5,
        pagination: {
            el: ".page5-pg",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
            }
        }
    });
    var page6_swiper = new Swiper(".page6-swiper", {
        slidesPerView: 4,
        navigation: {
            nextEl: ".page6-slide-next",
            prevEl: ".page6-slide-prev",
        },
        loop: true,
        breakpoints: {
            768: {
                slidesPerView: 7,
            }
        }
    });
});