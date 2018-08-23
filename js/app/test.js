$(document).ready(function () {
    var currentQuestion;
    $('.next_question').click(function () {
        currentQuestion = $('.question_active').index();
        var text = $('.question').eq(currentQuestion).find('input[type=radio]:checked').parent('.label').text();
        $('.question_active').removeClass('question_active');
        $('.question').eq(++currentQuestion).addClass('question_active');
        $('.question_' + currentQuestion).val(text);
        if (currentQuestion > 0) {
            $('.prev_question').addClass('button_visible');
        }
        if (currentQuestion == $('.question').length - 1) {
            $('.next_question, .prev_question').css('display', 'none');
            }
    });

      $('.prev_question').click(function () {
          $('.question_active').removeClass('question_active');
           $('.question').eq(--currentQuestion).addClass('question_active');
          if (currentQuestion == 0) {
              $('.prev_question').removeClass('button_visible');
          }
      });
});
