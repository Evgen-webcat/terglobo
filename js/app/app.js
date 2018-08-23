$(document).ready(function () {
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
                    window.location.href = 'thanks.html';
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
                    window.location.href = 'thanks.html';
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
                   window.location.href = 'thanks.html';
                }
            });
        }
    });
    $('.locker').click(function () {
        $('body').removeClass('modal-open');
        $('.locker').fadeOut();
        $('.modal_test').fadeOut();
        $('.modal_form').fadeOut();
    });
});
