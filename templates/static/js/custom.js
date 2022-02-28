(function ($) {
    "use strict";
    var mainApp = {
        scrollAnimation_fun: function () {
            window.scrollReveal = new scrollReveal();
        },
        scroll_fun: function () {
            $(function () {
                $('.move-me a').bind('click', function (event) { //just pass move-me in design and start scrolling
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });
        },
    }

    $(document).ready(function () {
        mainApp.scrollAnimation_fun();
        mainApp.scroll_fun();
    });
}(jQuery));


var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
    interval: 100000
})

$('.carousel .carousel-item').each(function () {
    var minPerSlide = 4;
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    for (var i = 0; i < minPerSlide; i++) {
        next = next.next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }

        next.children(':first-child').clone().appendTo($(this));
    }
});

