$(document).ready(function () {
    var telInp = $('.phone_input, .form_phone_input, .test_phone_input');

    telInp.each(function () {
        $(this).mask('+375 (99) 999-99-99');

        $(this).click(function () {
            if ($(this).val() == '+375 (__) ___-__-__') {
                $(this).setCursorPosition(6);
            }
        });
    });

    // set cursore position
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();

            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
});
