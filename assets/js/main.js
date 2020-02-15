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
    });


});


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



