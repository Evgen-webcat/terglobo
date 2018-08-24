$(document).ready(function () {
    $('.desc-slider').slick();

    $('.employees_slider').slick({
        arrows: false,
        dots: true,
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
        dots: true,
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
        dots: true,
        slidesToShow: 3,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1024,
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
});
