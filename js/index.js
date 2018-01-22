$(document).ready(function() {
    $('.login .auto-button').click(function() {
        $(this).css('display', 'none');
        $('.sign-in-sm').css('display', 'block');
    });

    $('header .main-menu .auto-button').click(function() {
        $('header .main-menu .menu').slideToggle();
    });

    $('footer .main-menu .auto-button').click(function() {
        $('footer .main-menu .menu').slideToggle();
        $();
    });

    $('#callback_login').submit(function() {
        $.ajax({
            type: 'GET',
            url: 'SERVER',                   /*адрес сервера*/
            data: $('#callback_login').serialize(),
            success: setTimeout(function() {
                    $.fancybox.close();
                }, 1000),
            error: alert('Our server is down. Please try again later :)')
        });

        return false;
    });

    $('#callback_sign_up').submit(function() {
        $.ajax({
            type: 'GET',
            url: 'SERVER',                   /*адрес сервера*/
            data: $('#callback_sign_up').serialize(),
            success: setTimeout(function() {
                $.fancybox.close();
            }, 1000),
            error: alert('Our server is down. Please try again later :)')
        });

        return false;
    });

    $('#callback_forgot').submit(function() {
        $.ajax({
            type: 'GET',
            url: 'SERVER',                   /*адрес сервера*/
            data: $('#callback_forgot').serialize(),
            success: setTimeout(function() {
                $.fancybox.close();
            }, 1000),
            error: alert('Our server is down. Please try again later :)')
        });

        return false;
    });

    $('.sign_up').click(function() {
        $.fancybox.close(true);
    });

    $('.sign_in').click(function() {
        $.fancybox.close(true);
    });

    $('.none_password').click(function() {
        $.fancybox.close(true);
    });

    var owl = $(".owl-carousel");

    owl.owlCarousel({
        items: 1,
        mouseDrag: false
    });

    $('.features-slide .prev').click(function() {
        owl.trigger('prev.owl.carousel');
    });

    $('.features-slide .next').click(function() {
        owl.trigger('next.owl.carousel');
    });

    $(".top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, "slow");
    });

    window.onscroll = function() {
        var top = document.querySelector(".top");
        (window.pageYOffset > document.documentElement.clientHeight) ? top.style.display='block' : top.style.display='none';
    };

    /*функция setEqualHeight растягивает блок sider-container до нужного уровня, но работает только после перезагрузки страницы*/

    setInterval(function() {
        if ($(window).width() <= 768) {
            $('.sider-container img').height('100%');
        } else {
            var featuresHeight = $('.features .owl-carousel').height() + $('.features .features-slide').height();
            $('.sider-container img').height(featuresHeight);
        }
    }, 100);
});