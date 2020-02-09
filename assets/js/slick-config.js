// slick slider
$(document).ready(function(){
    $('.slick-ready-project').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom'),
        nextArrow: $('.slick-next-custom'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });




    $('.slick-ready-project2').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom2'),
        nextArrow: $('.slick-next-custom2'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.slick-slider-3').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        // autoplay: true,
        autoplaySpeed: 500,
        // dots: true,
        arrows: true,
        /*            prevArrow: $('.slick-prev-custom2'),
                    nextArrow: $('.slick-next-custom2'),*/
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });



    $('.slick-slider-4').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        centerMode: true,
        autoplaySpeed: 5000,
        // dots: true,
        arrows: true,
        /*            prevArrow: $('.slick-prev-custom2'),
                    nextArrow: $('.slick-next-custom2'),*/
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
