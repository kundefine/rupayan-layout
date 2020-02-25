// slick slider
$(document).ready(function(){
    $('.slick-ready-project').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        dotsClass: 'slick-dots slick-slider-common-dots',
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
        slidesToShow: 4,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        arrows: true,
        dotsClass: 'slick-dots slick-slider-common-dots',
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
        prevArrow: $('.slick-prev-custom3'),
        nextArrow: $('.slick-next-custom3'),
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
        slidesToShow: 5,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 5000,
        // dots: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom4'),
        nextArrow: $('.slick-next-custom4'),
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



    $('.slick-slider-5.slick-slider-top-properties').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        // dots: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom5'),
        nextArrow: $('.slick-next-custom5'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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


    $('.slick-slider-6.slick-slider-feature-properties').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        // dots: true,
        arrows: true,
        prevArrow: $('.slick-prev-custom6'),
        nextArrow: $('.slick-next-custom6'),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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




    $('.slick-slider-7').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: false,
        autoplaySpeed: 300,
        dots: true,
        arrows: true,
        fade: true,
        asNavFor: '.slick-slider-7-nav',
        /*
        prevArrow: $('.slick-prev-custom6'),
        nextArrow: $('.slick-next-custom6'),*/
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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

    $('.slick-slider-7-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slick-slider-7',
        arrows: false,
        dots: false,
        centerMode: true,
        focusOnSelect: true
    });


    $('.slick-slider-8.concern-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 1500,
        dots: false,
        arrows: false,
        /*prevArrow: $('.slick-prev-custom8'),
        nextArrow: $('.slick-next-custom8'),*/
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
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
