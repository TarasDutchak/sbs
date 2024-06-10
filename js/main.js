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

    AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-in-out",
        disable: 'mobile'
    });

    var prevScrollpos = window.pageYOffset;

    /* Get the header element and it's position */
    var headerDiv = document.querySelector("header");
    var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;
    
    window.onscroll = function() {
      var currentScrollPos = window.pageYOffset;
    
      /* if we're scrolling up, or we haven't passed the header,
         show the header at the top */
      if (prevScrollpos > currentScrollPos  || currentScrollPos < headerBottom){  
          headerDiv.style.top = "0";
      }
      else{
          /* otherwise we're scrolling down & have passed the header so hide it */
          headerDiv.style.top = "-7.2rem";
      } 
    
      prevScrollpos = currentScrollPos;
    }
});