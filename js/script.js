$(document).ready(function () {
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
    

    let $body = $('body');
    let $page_2 = $('.page2');
    let $fp_nav = $('#fp-nav');
    $(window).bind("mousewheel", function (e) {
        dark();
    });

    function dark() {
        if ($page_2.hasClass('active') && $body.hasClass('dark') != true) {
            $body.addClass('dark');
            console.log('darkon');
        } else if ($page_2.hasClass('active') == false && $body.hasClass('dark')) {
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
    var page1_swiper = new Swiper(".page1-swiper", {
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
    var page3_swiper = new Swiper(".page3-swiper", {
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
    var page5_swiper = new Swiper(".page5-swiper", {
        slidesPerView:3,
        pagination: {
            el: ".page5-pg",
            clickable:true,
        },
    });
    dark();
});