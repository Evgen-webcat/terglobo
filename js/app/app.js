$(document).ready(function () {
    $('.desc-slider').slick();

    $('.employees_slider').slick({
        arrows: false,
        slidesToShow: 4,
        swipeToSlide: true
    });

   new wowjs.WOW().init();
});
