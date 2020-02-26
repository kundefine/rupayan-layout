$(document).ready(function() {
    // Bootstrap carousel add swipe for mobile
    $('#carouselExampleIndicators').carousel().swipeCarousel({
        sensitivity:'high'
    });


    $(".counter-value1").numScroll({
        number: 73,
        time: 1500,
        delay: 1000
    });
    $(".counter-value2").numScroll({
        number: 500,
        time: 1500,
        delay: 1000
    });
    $(".counter-value3").numScroll({
        number: 2118,
        time: 1500,
        delay: 1000
    });
    $(".counter-value4").numScroll({
        number: 5020,
        time: 1500,
        delay: 1000
    });


    // achievement tooltip
    $('.achievement-img img').tooltip();

    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })


    $('a.about-gallery').fancybox();

    // scroll to top
    $("a[href='#top']").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    });
    $(window).on('scroll', function(){
       if(this.scrollY > 300) {
           $($("a[href='#top']")).show();
       } else {
           $($("a[href='#top']")).hide();
       }

        if(this.scrollY > 200) {
            $(".new-hot-line-wrapper").removeClass("deactive-new-hot-line");
        } else {
            $(".new-hot-line-wrapper").addClass("deactive-new-hot-line");
        }


        if(this.scrollY > 100) {
            $('.header-new-top ').addClass('fixed-top');
        } else {
            $('.header-new-top ').removeClass('fixed-top');
        }
    });

    $('.new-toggle-mobile-menu').on('click', function(){
       $(this).toggleClass('active');
    });

    mixitupGallery ();
    FancypopUp();
    FancypopUpVideo();
    $('.ru-dropdown-menu > a').removeAttr("href");

    $('.ru-dropdown-menu').on('click', function(e){

        $(this).toggleClass('ru-dropdown-menu-isactive');
    });


    $(".hide-new-hot-line").on('click', function() {
        $(".new-hot-line-wrapper").toggleClass("deactive-new-hot-line");
    });

});

// Mixitup gallery
function mixitupGallery () {
    if ($("#mixitup_list").length) {
        $("#mixitup_list").mixItUp()
    };
}
// Fancybox

function FancypopUp () {
    if ($(".fancybox").length) {
        $(".fancybox").fancybox({
            openEffect	: 'elastic',
            closeEffect	: 'elastic',
            helpers : {
                overlay : {
                    css : {
                        'background' : 'rgba(0, 0, 0, 0.6)'
                    }
                }
            }
        });
    };
}


// Fancybox Video

function FancypopUpVideo () {
    if ($(".fancy_video").length) {
        $(".fancy_video").fancybox({
            maxWidth	: 800,
            maxHeight	: 600,
            fitToView	: true,
            width		: '100%',
            height		: '100%',
            autoSize	: true,
            closeClick	: false,
            openEffect	: 'none',
            closeEffect	: 'none'
        });
    };
}


function HotLineAnimation() {
    function viewHotLine() {
        return new Promise((resolve, reject) => {
            setTimeout(()=>{
                if($('.hot-line-wrapper').hasClass('show-hot-line')) {
                    reject('already showed');
                } else {
                    $('.hot-line-wrapper').addClass('show-hot-line');
                    resolve('animation done');
                }
            }, 3000);

        });
    }

    function changeHotLineToggleIconToRight() {
        $('.hot-line-toggle-icon').removeClass('fa-angle-left').addClass('fa-angle-right');
    }

    function changeHotLineToggleIconToLeft() {
        $('.hot-line-toggle-icon').removeClass('fa-angle-right').addClass('fa-angle-left');
    }


    viewHotLine().then(changeHotLineToggleIconToRight);

    $('.hot-line-toggle-icon').on('click', function() {

        $('.hot-line-wrapper').toggleClass('show-hot-line');
        if($('.hot-line-wrapper').hasClass('show-hot-line')) {
            console.log("already there");
            changeHotLineToggleIconToRight();
        } else {
            changeHotLineToggleIconToLeft();

        }
    });

}


HotLineAnimation();






window.onload = animateHeaderNavigation;
window.onscroll = animateHeaderNavigation;


function animateHeaderNavigation() {
    if(this.scrollY > 200) {
        // do something
        setHeaderValue()
    } else {
        // set initial value
        setHeaderInitialValue();
    }
}


function setHeaderInitialValue() {
    $(".main-navigation-header").removeClass('container-fluid full-width-navigation');
    $(".main-navigation-header").addClass('container container-navigation');
    $(".contact-us").css({marginLeft: "30px"});
    $(".logo").css({transform: "scale(1)"});


}

function setHeaderValue() {
    $(".main-navigation-header").addClass('container-fluid full-width-navigation');
    $(".main-navigation-header").removeClass('container container-navigation');
    $(".contact-us").css({marginLeft: 0});
    $(".logo").css({transform: "scale(0.9)"});
}




