(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports === "object" && exports) {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {

    $(document).ready(function () {

        // Skel.
        skel.breakpoints({
            xlarge: '(max-width: 1680px)',
            large: '(max-width: 1280px)',
            medium: '(max-width: 980px)',
            small: '(max-width: 736px)',
            xsmall: '(max-width: 480px)',
            xxsmall: '(max-width: 360px)',
            short: '(min-aspect-ratio: 16/7)',
            xshort: '(min-aspect-ratio: 16/6)'
        });


        //=require include/*.js

        var App = (function ($) {

            var debug = true;

            return {
                init: function () {
                    /*================================================
                     LOADING
                     =================================================*/
                    AssetsLoader.init();

                    Navigation.init();

                    Scroll.init();

                    /*================================================
                     SLICK
                     https://github.com/kenwheeler/slick
                     =================================================*/

                    $('.js-home-slick').slick({
                        autoplay: false,
                        autoplaySpeed: 10000,
                        dots: true
                    });

                    $('.js-review').slick({
                        autoplay: false,
                        autoplaySpeed: 10000,
                        dots: true,
                        customPaging : function(slider, i) {
                            var cl = $(slider.$slides[i]).data('dot');
                            return '<a class="' + cl + '" href="javascript:void(0)">&nbsp;</a>';
                        }
                    });

                    $('.js-auto-park').slick({
                        autoplay: false,
                        autoplaySpeed: 10000,
                        dots: true,
                        arrows: true,
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        responsive: [
                            {
                                breakpoint: 480,
                                settings: {
                                    slidesToShow: 1,
                                    slidesToScroll: 1
                                }
                            }
                        ]
                    })

                    /*
                     * Masked Input Plugin for jQuery
                     * https://github.com/digitalBush/jquery.maskedinput
                     */
                    $('.js-phone').mask('+7 (999) 999-99-99');

                },

                /** @type {function(...*)} */
                log: function () {
                    if (debug)
                        console.log.apply(console, arguments)
                }
            }
        })($);
        App.init();
    });
});