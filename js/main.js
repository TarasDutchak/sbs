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
    

});