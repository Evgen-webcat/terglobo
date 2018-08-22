$(document).ready(function () {
    $('.desc-slider').slick();

    $('.employees_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1
                }
    }]
    });

    $('.review_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1
                }
    }]
    });

    $('.photo_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3
                }
    },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2
                }
    },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 1
                }
    }]
    });

    $('.phone_input, .form_phone_input, .test_phone_input').mask('+375 (99) 999-99-99');

    if ($(window).width() > 1200) {
        new wowjs.WOW().init();
    };

    $('.phone-button').click(function () {
        var value = $('.phone_input').val(),
            phone_form = $('#phone_form').serialize();
        if (value.length < 19) {
            $('.phone_input').addClass('error');
        } else {
            $('.phone_input').removeClass('error');
            console.log(phone_form);
            $.ajax({
                type: 'POST',
                url: 'send-phone.php',
                data: phone_form,
                success: function () {

                }
            });
        }
    });

    $('.modal_form_btn').click(function (event) {
        event.preventDefault();
        $('body').addClass('modal-open');
        $('.locker').fadeIn();
        $('.modal_form').fadeIn();
    });

    $('.close_form_btn').click(function (event) {
        event.preventDefault();
        $('body').removeClass('modal-open');
        $('.locker').fadeOut();
        $('.modal_form').fadeOut();
    });

    $('#name_form').validate({
        errorPlacement: function (error, element) {
            return true;
        },
        submitHandler: function (form) {
            var form = $('#name_form').serialize();
            $.ajax({
                type: 'POST',
                url: 'send-name.php',
                data: form,
                success: function () {
                    $('body').removeClass('modal-open');
                    $('.locker').fadeOut();
                    $('.modal_form').fadeOut();
                }
            });
        }
    });

    $('.test-button').click(function (event) {
        event.preventDefault();
        $('body').addClass('modal-open');
        $('.locker').fadeIn();
        $('.modal_test').fadeIn();
    });

    $('.close_test_btn').click(function (event) {
        event.preventDefault();
        $('body').removeClass('modal-open');
        $('.locker').fadeOut();
        $('.modal_test').fadeOut();
    });

    $('#test_form').validate({
        errorPlacement: function (error, element) {
            return true;
        },
        submitHandler: function (form) {
            var form = $('#test_form').serialize();
            $.ajax({
                type: 'POST',
                url: 'send-test.php',
                data: form,
                success: function () {
                    $('body').removeClass('modal-open');
                    $('.locker').fadeOut();
                    $('.modal_test').fadeOut();
                }
            });
        }
    });
});
