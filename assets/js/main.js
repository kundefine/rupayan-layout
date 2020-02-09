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




});

$('.achievement-img img').tooltip();










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

