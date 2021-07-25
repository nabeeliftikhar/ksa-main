"use strict";

// GLOBAL VARIABLES
var mobileSlider = $('.js-mobileSlider');
var phoneField = $('.js-phoneField');
var win = $(window);

$(document).ready(function() {
    // Mobile Slider
    const init = {
        slidesToShow: 1,
        autoplay: true,
        arrows: false,
        speed: 1000,
        mobileFirst: true
    };

    win.on("load resize", function() {
        if (mobileSlider.length > 0) {
            if (win.width() < 767) {
                mobileSlider.not(".slick-initialized").slick(init);
            } else if (mobileSlider.hasClass("slick-initialized")) {
                mobileSlider.slick("unslick");
            }
        }
    });

    if (phoneField.length > 0) {
        phoneField.intlTelInput({
            separateDialCode: true
        });
    }
});

