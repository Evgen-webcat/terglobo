$(document).ready(function () {
    $('.desc-slider').slick();

    $('.employees_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true
    });

     $('.review_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true
    });

    $('.photo_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true
    });

    $('.phone_input').mask('+375 (99) 999-99-99');

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
                url: 'send.php',
                data: phone_form,
                success: function () {
                    alert('Сообщение отправленно');
                }
            });
        }
    });
});
