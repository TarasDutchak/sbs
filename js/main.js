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

    $("header.header nav ul").on("click", "a:not(.normallink)", function (event) {
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

    // form checkboxes
    $(document).click(function (event) {
        let $target = $(event.target);
        if (!$target.closest('.imitselectwrapper').length) {
            $('.imitselect__dd').hide();
        }
    });

    $('.imitselect').click(function(){
        $('.imitselect__dd').toggle();
    });

    const checkboxes = document.querySelectorAll('.imitselect__dd input[type="checkbox"]');
    const countBlock = document.querySelector('.count');
    const chooseText = document.querySelector('.choosetext');
    const countSpan = countBlock.querySelector('span');
    const ul = document.querySelector('.imitselect__dd ul');
    const otherCheckbox = document.getElementById('sp10');
    const otherInputBlock = document.querySelector('.otherinp');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            const checkedCount = document.querySelectorAll('.imitselect__dd input[type="checkbox"]:checked').length;

            if (checkedCount > 0) {
                countBlock.style.display = 'block';
                chooseText.classList.add('hidden');
                countSpan.textContent = checkedCount;
            } else {
                countBlock.style.display = 'none';
                chooseText.classList.remove('hidden');
            }

            if (this.checked) {
                ul.prepend(this.closest('li'));
            } else {
                const uncheckedItems = Array.from(ul.querySelectorAll('li')).filter(item => !item.querySelector('input').checked);
                uncheckedItems.forEach(item => ul.append(item));
            }

            if (otherCheckbox.checked) {
                otherInputBlock.style.display = 'block';
            } else {
                otherInputBlock.style.display = 'none';
            }
        });
    });


    const radioYes = document.getElementById('1');
    const radioNo = document.getElementById('2');
    const rankField = document.querySelector('.col-md-6 .inputfield.hidden');

    radioYes.addEventListener('change', function() {
        if (radioYes.checked) {
            rankField.classList.remove('hidden');
        }
    });

    radioNo.addEventListener('change', function() {
        if (radioNo.checked) {
            rankField.classList.add('hidden');
        }
    });

});