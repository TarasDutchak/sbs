$(document).ready(function(){

    const player = new Plyr('#player');

    $('.date').inputmask({
        "mask": "99 /99/ 9999",
    });
    $('.tel').inputmask({
        "mask": "+ 380 99 999 9999",
    });

    $('.menubtn').click(function(){
        $('.header__nav').addClass('show');
    });
    $('.close').click(function(){
        $('.header__nav').removeClass('show');
    });
    
    $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $('.header__nav ul li a').click(function(){
        $('.header__nav').removeClass('show');
    })

});