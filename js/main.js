$(document).ready(function () {

    const player = new Plyr('#player');

    $('.date').inputmask({
        "mask": "99 /99/ 9999",
    });
    $('.tel').inputmask({
        "mask": "+ 380 99 999 9999",
    });

    $('.menubtn').click(function () {
        $('.header__nav').addClass('show');
    });
    $('.close').click(function () {
        $('.header__nav').removeClass('show');
    });

    $("header.header nav ul li:not(.normallink)").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $('.header__nav ul li a').click(function () {
        $('.header__nav').removeClass('show');
    })

    AOS.init({
        once: true,
        duration: 1000,
        easing: "ease-in-out",
        disable: 'mobile'
    });



    if ($('header').length) {

        var prevScrollpos = window.pageYOffset;

        /* Get the header element and it's position */
        var headerDiv = document.querySelector("header");
        var headerBottom = headerDiv.offsetTop + headerDiv.offsetHeight;

        window.onscroll = function () {
            var currentScrollPos = window.pageYOffset;

            /* if we're scrolling up, or we haven't passed the header,
               show the header at the top */
            if (prevScrollpos > currentScrollPos || currentScrollPos < headerBottom) {
                headerDiv.style.top = "0";
            }
            else {
                /* otherwise we're scrolling down & have passed the header so hide it */
                headerDiv.style.top = "-7.2rem";
            }

            prevScrollpos = currentScrollPos;
        }

    }


    $('.closety, .tybox .greenbtn').click(function () {
        $('.modalwrapper.ty').removeClass('active');
    });

    $(".scrollbtn").on("click", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top - 80;
        $('body,html').animate({ scrollTop: top }, 800);
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.imitselectwrapper').length) {
            $('.imitselect__dd').hide();
        }
    });

    $('.imitselect').click(function () {
        $('.imitselect__dd').toggle();
    });






    // language
    $('.header__language span').click(function () {
        $('.header__language').toggleClass('active')
    });

    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.header__language').length) {
            $('.header__language').removeClass('active')
        }
    });

    // -------------------------------------------------
    // styled selects
    if ($('.styledselect').length) {
        $('.styledselect').select2({
            // placeholder: "Project Type*",
            minimumResultsForSearch: Infinity,
        });
    }

    $('.nextbtn .greenbtn:not(.submit-btn)').click(function (e) {
        e.preventDefault();
        $(this).parents('.formstep').next('.formstep').removeClass('hide');
    })

    // faq

    $('.faqhead').click(function () {
        $(this).toggleClass('open');
        $(this).next('.faqbody').slideToggle();
    });

    if ($('.faqpage').length > 0) {
        var headers = document.querySelectorAll('.faqpage h3');
        for (var i = 0; i < headers.length; i++) {
            headers[i].setAttribute('id', i + 1);
        }


        var headers = document.querySelectorAll('.faqpage h3');
        var list = document.querySelector('.postnav');
        var ul = document.createElement('ul');

        for (var i = 0; i < headers.length; i++) {
            var text = headers[i].textContent;
            var id = headers[i].getAttribute('id');
            var listItem = document.createElement('li');
            var link = document.createElement('a');

            link.textContent = text;
            link.setAttribute('href', '#' + id);
            listItem.appendChild(link);
            ul.appendChild(listItem);
        }

        list.appendChild(ul);


        // -----------.


        $(".postnav ul").on("click", "a", function (event) {
            console.log('sdsdsd')
            event.preventDefault();
            var id = $(this).attr('href'),
                top = $(id).offset().top;
            $('body,html').animate({ scrollTop: top - 105 }, 1500);
        });


        const links = document.querySelectorAll('.postnav li a');
        window.addEventListener('scroll', () => {
            const anchors = document.querySelectorAll('.postmiansectbody__post [id]');
            anchors.forEach(anchor => {
                if (anchor.closest('.postmiansectbody__post')) {
                    const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
                    if (window.pageYOffset >= anchorTop - 110) {
                        links.forEach(link => {
                            const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
                            if (correspondingLink) {
                                link.classList.remove('active');
                                correspondingLink.classList.add('active');
                            }
                        });
                    }
                }
            });
        });







    }



});