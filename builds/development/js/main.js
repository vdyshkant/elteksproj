(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-disable no-unused-vars*/

// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');
"use strict";


jQuery(document).ready(function($) {



    // sub-header search field
    (function($) {
        if ($("#inpt-search").length > 0) {
            $("#inpt-search").on("focus", function() {
                $(this).parent('label').addClass('active');
            });

            $("#inpt-search").on('blur', function() {
                if ($(this).val().length === 0) {
                    $(this).parent('label').removeClass('active');
                }
            });
        }
    })(jQuery);
    // sub-header search field



    // index rising counter (4 blocks)
    (function($) {
        $(window).scroll(function() {
            $('#stats').each(function() {
                var imagePos = $(this).offset().top;
                var topOfWindow = $(window).scrollTop();
                if (imagePos < topOfWindow + 650) {
                    animateCounter();
                }
            });
        });

        function animateCounter() {
            if ($('#stats').length > 0) {
                var numbers = [8, 450000, 10, 25],
                    duration = [1.5, 4.5, 3.5, 3],
                    numberp = $('#stats .stat h2'),
                    comma_separator_number_step = $.animateNumber.numberStepFactories.separator(' ');

                numberp.each(function(i) {
                    $(this).animateNumber({
                        number: numbers[i],
                        numberStep: comma_separator_number_step
                    }, duration[i] * 1000);
                });
            }
        }
    })(jQuery);
    // EOF index rising counter (4 blocks)



    // products item hover
    (function() {
        if ($('.item .make3d').length > 0) {
            $('.item .make3d').hover(function() {
                $(this).parent().css('z-index', "20");
                $(this).addClass('animate');
            }, function() {
                $(this).removeClass('animate');
                $(this).parent().css('z-index', "1");
            });
        }
    })();
    // EOF products item hover



    // pagination
    if ($('.pagination').length) {
        (function() {
            function slide(offset) {
                index = Math.min(Math.max(index + offset, 0), total - 1);

                document.querySelector('.cntr').innerHTML = (index + 1) + ' / ' + total;

                pr.setAttribute('data-state', index === 0 ? 'disabled' : '');
                pl.setAttribute('data-state', index === total - 1 ? 'disabled' : '');
            }

            var pr = document.querySelector('.paginate.left');
            var pl = document.querySelector('.paginate.right');

            if (pr && pl) {

                pr.onclick = slide.bind(this, -1);
                pl.onclick = slide.bind(this, 1);

                var index = 0,
                    total = 5;


                slide(0);
            }
        })();
    }
    // EOF pagination



    // new brand slider
    if ($("ul#slider1").length) {
        (function() {
            var $j = jQuery.noConflict();

            var realSlider = $j("ul#slider1").bxSlider({
                speed: 300,
                pager: false,
                nextText: '',
                prevText: '',
                infiniteLoop: false,
                hideControlOnEnd: true,
                controls: false,
                //  onSlideBefore:function($slideElement, oldIndex, newIndex){
                //    changeRealThumb(realThumbSlider,newIndex);
                //
                //  }

            });


            var realThumbSlider = $j("ul#bx-pager1").bxSlider({
                minSlides: 2,
                maxSlides: 3,
                slideWidth: 88,
                slideMargin: 30,
                moveSlides: 1,
                pager: false,
                speed: 300,
                infiniteLoop: false,
                hideControlOnEnd: true,
                nextText: '<span></span>',
                prevText: '<span></span>',

                prevSelector: ('.slider-prev'),
                nextSelector: ('.slider-next'),
                //  onSlideBefore:function($slideElement, oldIndex, newIndex){
                /*$j("#sliderThumbReal ul .active").removeClass("active");
                $slideElement.addClass("active"); */

                //  }
            });

            linkRealSliders(realSlider, realThumbSlider);

            //  if($j("#bx-pager1 li").length<5){
            //    $j("#bx-pager1 .bx-next").hide();
            //  }

            // sincronizza sliders realizzazioni
            function linkRealSliders(bigS, thumbS) {

                $j("ul#bx-pager1").on("click", "a", function(event) {
                    event.preventDefault();
                    var newIndex = $j(this).parent().attr("data-slideIndex");
                    bigS.goToSlide(newIndex);
                });
            }

            //slider!=$thumbSlider. slider is the realslider
            function changeRealThumb(slider, newIndex) {

                var $thumbS = $j("#bx-pager1");
                $thumbS.find('.active').removeClass("active");
                $thumbS.find('li[data-slideIndex="' + newIndex + '"]').addClass("active");

                if (slider.getSlideCount() - newIndex >= 4) {
                    slider.goToSlide(newIndex);
                } else {
                    slider.goToSlide(slider.getSlideCount() - 4);
                }
            }
        })();
    }


    // slider #2
    if ($("ul#slider2").length) {
        (function() {
            var $j = jQuery.noConflict();

            var realSlider = $j("ul#slider2").bxSlider({
                speed: 300,
                pager: false,
                nextText: '',
                prevText: '',
                infiniteLoop: false,
                hideControlOnEnd: true,
                controls: false,
                //  onSlideBefore:function($slideElement, oldIndex, newIndex){
                //    changeRealThumb(realThumbSlider,newIndex);
                //
                //  }

            });


            var realThumbSlider = $j("ul#bx-pager2").bxSlider({
                minSlides: 2,
                maxSlides: 3,
                slideWidth: 88,
                slideMargin: 30,
                moveSlides: 1,
                pager: false,
                speed: 300,
                infiniteLoop: false,
                hideControlOnEnd: true,
                nextText: '<span></span>',
                prevText: '<span></span>',

                prevSelector: ('.slider-prev'),
                nextSelector: ('.slider-next'),
                onSlideBefore: function($slideElement, oldIndex, newIndex) {
                    /*$j("#sliderThumbReal ul .active").removeClass("active");
                    $slideElement.addClass("active"); */

                }
            });

            linkRealSliders(realSlider, realThumbSlider);

            //  if($j("#bx-pager1 li").length<5){
            //    $j("#bx-pager1 .bx-next").hide();
            //  }

            // sincronizza sliders realizzazioni
            function linkRealSliders(bigS, thumbS) {

                $j("ul#bx-pager2").on("click", "a", function(event) {
                    event.preventDefault();
                    var newIndex = $j(this).parent().attr("data-slideIndex");
                    bigS.goToSlide(newIndex);
                });
            }

            //slider!=$thumbSlider. slider is the realslider
            function changeRealThumb(slider, newIndex) {

                var $thumbS = $j("#bx-pager2");
                $thumbS.find('.active').removeClass("active");
                $thumbS.find('li[data-slideIndex="' + newIndex + '"]').addClass("active");

                if (slider.getSlideCount() - newIndex >= 4) {
                    slider.goToSlide(newIndex);
                } else {
                    slider.goToSlide(slider.getSlideCount() - 4);
                }



            }
        })();
    }


    // home slider
    if ($("#slider-home").length) {
        $('#slider-home').bxSlider({
            speed: 1000,
            // pause:200,
            // auto:true,
            pager: true,
            // easing: 'swing',
            mode: 'fade',
            nextText: '',
            prevText: '',
            prevSelector: ('.nextend-arrow-previous'),
            nextSelector: ('.nextend-arrow-next'),
            infiniteLoop: true,
            pagerCustom: true,
            onSliderLoad: function() {
                $('.img-item').delay(400).animate({
                    'left': '+=450',
                    'opacity': 1
                }, 1200);

                if ($(window).width() < 768) {
                  $('.slide-content').animate({
                      'top': '58%',
                      'opacity': 1
                  }, 1200);
                }
                if ($(window).width() > 768) {
                  $('.slide-content').animate({
                      'top': '50%',
                      'opacity': 1
                  }, 1200);
                }


                $('.slide-btn-outer').delay(900).animate({
                    'opacity': 1
                }, 800);

                // $('.btn-slide').delay(1000).animate({
                //   'opacity': 1
                // }, 1200);
            },
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                $('.img-item').delay(400).animate({
                    'left': '+=450',
                    'opacity': 1
                }, 1200);

                if ($(window).width() < 768) {
                  $('.slide-content').animate({
                      'top': '58%',
                      'opacity': 1
                  }, 1200);
                }
                if ($(window).width() > 768) {
                  $('.slide-content').animate({
                      'top': '50%',
                      'opacity': 1
                  }, 1200);
                }

                $('.slide-btn-outer').delay(900).animate({
                    'opacity': 1
                }, 800);

                // $('.slide-btn-outer').delay(1000).animate({
                //   'opacity': 1
                // }, 1200);
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                // hiding elements before rebase
                $('.img-item').animate({
                    'opacity': '0'
                }, 500);

                $('.slide-content').animate({
                    'opacity': 0
                }, 500);

                $('.slide-btn-outer').animate({
                    'opacity': 0
                }, 500);

                // changing parameters
                $('.img-item').animate({
                    'left': '-=450'
                }, 50);

                $('.slide-content').animate({
                    'top': '25%'
                }, 50);

                // $('.slide-btn-outer').animate({
                //   'top': '67%'
                // }, 50);

                // $('.slide-btn-outer').animate({
                //   'opacity': 0
                // }, 500);
            }
        });
    }


    // show slide arrows via hover
    (function($) {
        $('.home-slider').hover(function() {

            clearTimeout($.data(this, 'timer'));
            $('.nextend-arrow').stop(true, true).fadeToggle(300);
        });
    })(jQuery);
    // EOF home slider

    // EOF bx sliders



    // faq-page content slide
    if ($(".faq-item-title").length) {
        $(".faq-item-title").click(function() {
            $(this).siblings('.faq-item-content').slideToggle();
            $(this).parent('.jsFaqItem').toggleClass('active');
        });

        $('.products-nav-menu').click(function() {
            $('.jsProdMenuContent').slideToggle();
            $('.jsColumnTitle').toggleClass('active');
        });
    }
    // EOF faq-page content slide



    // documentation-grid menu {tablet}
    if ($(window).width() < 1200) {
        if ($(".page-documentation-grid .jsColumnTitle").length) {
            $(".page-documentation-grid .jsColumnTitle").click(function() {
                $('.products-nav-menu .products-nav-content').slideToggle();
                $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
                // $(this).parent('.jsFaqItem').toggleClass('active');
            });
        }
    }
    // EOF documentation-grid menu



    // product-grid menu {tablet}
    if ($(window).width() < 1200) {
        if ($(".page-product-grid .jsColumnTitle").length) {
            $(".page-product-grid .jsColumnTitle").click(function() {
                $('.products-nav-menu .products-nav-content').slideToggle();
                $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
                // $(this).parent('.jsFaqItem').toggleClass('active');
            });
        }
    }
    // EOF product-grid menu {tablet}


    // solutions menu {tablet}
    if ($(window).width() < 1200) {
        if ($(".page-solutions .jsColumnTitle").length) {
            $(".page-solutions .jsColumnTitle").click(function() {
                $('.products-nav-menu .products-nav-content').slideToggle();
                $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
                // $(this).parent('.jsFaqItem').toggleClass('active');
            });
        }
    }
    // EOF solutions menu {tablet}



  // burger:
    // burger animation itself:
    $('a.burger-menu, .menu-overlay').click(function() {
        $('.burger-link').toggleClass("burger-active");
        $('.menu-overlay').fadeToggle(200, 'linear');
        $('.main-nav').slideToggle(200, 'easeInOutCubic');
    });

    $('.request-callback-nav').click(function() {
        $('.modal-content').fadeIn(300);
        $('.modal-overlay').fadeIn(300);

        // hide menu toggle and convert to burger
        $('.burger-link').removeClass("burger-active");
        $('.menu-overlay').fadeOut(200, 'linear');
        $('.main-nav').slideUp(200, 'easeInOutCubic');
    });


    showMainModal();

    function showMainModal() {
        $('.jsrequest-callback').click(function() {
            $('.modal-content').fadeIn(300);
            $('.modal-overlay').fadeIn(300);
        });
    }

    closeMainModal();

    function closeMainModal() {
        $('.modal-content-close').click(function() {
            $('.modal-content').fadeOut(300);
            $('.modal-overlay').fadeOut(300);
        });
    }

    hideMainOverlay();

    function hideMainOverlay() {
        $('.modal-overlay').click(function() {
            $('.modal-content').fadeOut(300);
            $('.modal-overlay').fadeOut(300);
        });
    }

    checkFormValues();

    function checkFormValues() {
        $('.callback-form').submit(function(event) {
            if (!($('[name=login]').val()) || !($('[name=phone]').val())) {
                event.preventDefault();
            }
        });
    }

    $('html body').on('keyup', function(e) {
        if (e.keyCode === 27) {
            $('.modal-content').fadeOut(300);
            $('.modal-overlay').fadeOut(300);
            $('.burger-link').removeClass("burger-active");
            $('.menu-overlay').fadeOut(200, 'linear');
            if ($(window).width() < 768) {
                $('.main-nav').slideUp(200, 'easeInOutCubic');
            }

        }
    });
    // EOF index modal content



    // dropDown menu
    (function() {
        if ($(window).width() > 768) {
            $('.dropdown').mouseenter(
                function() {
                    clearTimeout($.data(this, 'timer'));

                    $(this).children('.sub-menu').stop(true, true).slideDown(200, 'easeInOutCubic');
                    $(this).addClass('active');
                }
            );
            $('.dropdown').mouseleave(
                function() {
                    $.data(this, 'timer', setTimeout($.proxy(function() {

                        $(this).children('.sub-menu').stop(true, true).slideUp(200, 'easeInOutCubic');
                        $(this).removeClass('active');
                    }, this), 200));

                }
            );
        }
    })();
    // EOF dropDown menu



    // footer-nav text change
    (function() {
        window.addEventListener("resize", function() {
            if (window.matchMedia("(max-width: 767px)").matches) {
                var string = 'Техпомощь';
                $('.footer-nav ul li:nth-child(3) a').text(string);
            } else {
                var origin = 'Техподдержка';
                $('.footer-nav ul li:nth-child(3) a').text(origin);
            }
        });
    })();

    (function() {
        if (window.matchMedia("(max-width: 767px)").matches) {
            var string = 'Заказать консультацию';
            $('.page-documentation .btn-form, .page-product-desc .btn-form').text(string);
        } else {
            var origin = 'Заказать бесплатную консультацию';
            $('.page-documentation .btn-form, .page-product-desc .btn-form').text(origin);
        }
    })();

    (function() {
        // product-desc page
        if (window.matchMedia("(max-width: 767px)").matches) {
            var string = 'Бесплатная консультация';
            $('.page-product-desc .btn-desc').text(string);
        } else {
            var origin = 'Заказать бесплатную консультацию';
            $('.page-product-desc .btn-desc').text(origin);
        }
    })();


    (function() {
        if (window.matchMedia("(max-width: 1199px)").matches) {
            var string = 'Выберите категорию';
            $('.page-solutions .products-nav-menu .column-title').text(string);
        } else {
            var origin = 'Категории';
            $('.page-solutions .products-nav-menu .column-title').text(origin);
        }
    })();

    // documentation-grid title
    (function() {
        if (window.matchMedia("(max-width: 1199px)").matches) {
            var string = 'Документация';
            $('.page-documentation-grid .page-title h1').text(string);
        } else {
            var origin = 'Документация для оборудования';
            $('.page-documentation-grid .page-title h1').text(origin);
        }
    })();

    // documentation-grid title
    (function() {
        if (window.matchMedia("(max-width: 1199px)").matches) {
            var string = 'Выберите категорию';
            $('.page-documentation-grid .column-left .column-title').text(string);
        } else {
            var origin = 'Категории';
            $('.page-documentation-grid .column-left .column-title').text(origin);
        }
    })();


    (function() {
        if ($(window).width() < 768) {
            //Add your javascript for large screens here
            (function() {
                var string = 'Техпомощь';
                $('.footer-nav ul li:nth-child(3) a').text(string);
            })();
        }
    })();
    // EOF footer-nav text change



    // parallax
    (function() {
        var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
            wScroll = $(window).scrollTop();

        // parallax effect function
        function parallax(prlxBg, prlxContainer, factor) {
            if (isIE) {
                $(prlxBg).css({
                    'transform': 'translateY(0px)'
                });
                return;
            }
            if ((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
                console.log("true!");
                $(prlxBg).css({
                    'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor + '%)'
                });
            }
        }

        $(window).scroll(function() {
            wScroll = $(this).scrollTop();

            if ($('.parallax-index').length > 0) {
                parallax('.bottom-line', '.parallax-index', 0.6);
            }
        });
    })();
    // EOFparallax



    // tabs module (product page)
    (function() {
        $('.js-tabs li[data-id]').click(function() {
            if ($(this).hasClass('active')) {
                return;
            }

            $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
            $(this).siblings().removeClass('active');
            $(this).addClass('active');
        });
    })();

    // tabs for mobile
    if ($(window).width() < 768) {
        (function($) {
            // You pass-in jQuery and then alias it with the $-sign
            // So your internal code doesn't change

            $('.desc-full-title').click(function() {
                $('#menu_tabs .desc-full-title').removeClass('active');
                $(this).addClass('active');
                $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').addClass('overtabbed');
                $('#menu_tabs .active').removeClass('overtabbed').css('width', 'auto');
                var nonActiveTabsCommonW = $('#menu_tabs .desc-nav.module-header').width() - $('#menu_tabs .desc-full-title.active').outerWidth();
                var W4nonActiveTab = nonActiveTabsCommonW / 2 - 1;
                $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').outerWidth(W4nonActiveTab);
            });

            $('#menu_tabs .desc-full-title:first-child').addClass('active');
            $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').addClass('overtabbed');
            $('#menu_tabs .active').removeClass('overtabbed').css('width', 'auto');
            var nonActiveTabsCommonW = $('#menu_tabs .desc-nav.module-header').width() - $('#menu_tabs .desc-full-title.active').outerWidth();
            var W4nonActiveTab = nonActiveTabsCommonW / 2 - 1;
            $('#menu_tabs .desc-full-title:not(.desc-full-title.active)').outerWidth(W4nonActiveTab);

        })(jQuery);
    }
    // EOFtabs module



    // breadcrumbs '...'
    if ($(window).width() < 768) {
        (function($) {
            // You pass-in jQuery and then alias it with the $-sign
            // So your internal code doesn't change
            var count = $('.breadcrumbs li').length;
            if (count >= 3) {
                $('.breadcrumbs li:nth-child(n+2):not(:last-child) a').html('...');
            }
            $('.breadcrumbs li:last-child a').addClass('overcrumbs');
            // http://stackoverflow.com/questions/4291151/jquery-count-child-elements

            // counting width for whole vreadcrumbs
            var parent = $('.breadcrumbs').width();
            var last = $('.breadcrumbs li:not(:last-child)').outerWidth();

            var w = 0;

            jQuery('.breadcrumbs li:last-child').each(function() {
                jQuery(this).prevAll().each(function() {
                    w += $(this).width();
                    console.log(w);
                });
            });
            var newWidthForLastEl = parent - w - 10;

            $('.breadcrumbs li:last-child').width(newWidthForLastEl);

        })(jQuery);
    }
    // EOF breadcrumbs '...'



    // form validation
    $('.callback').submit(function(e) {
        e.preventDefault();
        var name = $('.callback [name=login]'),
            phone = $('.callback [name=phone]'),
            email = $('.callback [name=email]');

        if (name.val() === '') {
            name.parents('.user-field').addClass('error');
            return false;
        }
        if (!validateEmail(email.val())) {
            email.parents('.phone-field').addClass('error');
            return false;
        }

        if (phone.val() === '') {
            phone.parents('.email-field').addClass('error');
            return false;
        }

        return true;

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
    });

    // "instant"-check
    $('.callback input[type="email"]').blur(function() {
        if (!validateEmail($(this).val())) {
            $(this).addClass('error');
        } else {
            $(this).removeClass('error');
        }
    });

    function validateEmail(email) {
        var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    // EOF form validation




}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV80N2FhODM1ZC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cblxuLy8gdGhlIGVudHJ5IHBvaW50IGZvciBicm93c2VyaWZ5XG4vLyB2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcbi8vXG4vLyBsb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcHJrcyEgQW1kIGl0IGNoYW5nZWQgYXMgd2VsbC4gOiknKTtcblwidXNlIHN0cmljdFwiO1xuXG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXG5cblxuICAgIC8vIHN1Yi1oZWFkZXIgc2VhcmNoIGZpZWxkXG4gICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pKGpRdWVyeSk7XG4gICAgLy8gc3ViLWhlYWRlciBzZWFyY2ggZmllbGRcblxuXG5cbiAgICAvLyBpbmRleCByaXNpbmcgY291bnRlciAoNCBibG9ja3MpXG4gICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNzdGF0cycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93ICsgNjUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCkge1xuICAgICAgICAgICAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgICAgICAgICAgICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoalF1ZXJ5KTtcbiAgICAvLyBFT0YgaW5kZXggcmlzaW5nIGNvdW50ZXIgKDQgYmxvY2tzKVxuXG5cblxuICAgIC8vIHByb2R1Y3RzIGl0ZW0gaG92ZXJcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy8gRU9GIHByb2R1Y3RzIGl0ZW0gaG92ZXJcblxuXG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgaWYgKCQoJy5wYWdpbmF0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoaW5kZXggKyBvZmZzZXQsIDApLCB0b3RhbCAtIDEpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNudHInKS5pbm5lckhUTUwgPSAoaW5kZXggKyAxKSArICcgLyAnICsgdG90YWw7XG5cbiAgICAgICAgICAgICAgICBwci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyk7XG4gICAgICAgICAgICAgICAgcGwuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0ZS5sZWZ0Jyk7XG4gICAgICAgICAgICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGUucmlnaHQnKTtcblxuICAgICAgICAgICAgaWYgKHByICYmIHBsKSB7XG5cbiAgICAgICAgICAgICAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCh0aGlzLCAtMSk7XG4gICAgICAgICAgICAgICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQodGhpcywgMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IDU7XG5cblxuICAgICAgICAgICAgICAgIHNsaWRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICAvLyBFT0YgcGFnaW5hdGlvblxuXG5cblxuICAgIC8vIG5ldyBicmFuZCBzbGlkZXJcbiAgICBpZiAoJChcInVsI3NsaWRlcjFcIikubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiAgICAgICAgICAgIHZhciByZWFsU2xpZGVyID0gJGooXCJ1bCNzbGlkZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgICAgICAvLyAgICBjaGFuZ2VSZWFsVGh1bWIocmVhbFRodW1iU2xpZGVyLG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHZhciByZWFsVGh1bWJTbGlkZXIgPSAkaihcInVsI2J4LXBhZ2VyMVwiKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMzAsXG4gICAgICAgICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgICAgICAgICAgcHJldlNlbGVjdG9yOiAoJy5zbGlkZXItcHJldicpLFxuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RvcjogKCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICAgICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgICAgICAgIC8qJGooXCIjc2xpZGVyVGh1bWJSZWFsIHVsIC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIsIHJlYWxUaHVtYlNsaWRlcik7XG5cbiAgICAgICAgICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgICAgICAgICAgLy8gICAgJGooXCIjYngtcGFnZXIxIC5ieC1uZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICAgICAgICAgICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsIHRodW1iUykge1xuXG4gICAgICAgICAgICAgICAgJGooXCJ1bCNieC1wYWdlcjFcIikub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gJGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsIG5ld0luZGV4KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRodW1iUyA9ICRqKFwiI2J4LXBhZ2VyMVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicgKyBuZXdJbmRleCArICdcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gbmV3SW5kZXggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSA0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cbiAgICAvLyBzbGlkZXIgIzJcbiAgICBpZiAoJChcInVsI3NsaWRlcjJcIikubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiAgICAgICAgICAgIHZhciByZWFsU2xpZGVyID0gJGooXCJ1bCNzbGlkZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgICAgICAvLyAgICBjaGFuZ2VSZWFsVGh1bWIocmVhbFRodW1iU2xpZGVyLG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHZhciByZWFsVGh1bWJTbGlkZXIgPSAkaihcInVsI2J4LXBhZ2VyMlwiKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMzAsXG4gICAgICAgICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgICAgICAgICAgcHJldlNlbGVjdG9yOiAoJy5zbGlkZXItcHJldicpLFxuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RvcjogKCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICAgICAgICAgICBvblNsaWRlQmVmb3JlOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgLyokaihcIiNzbGlkZXJUaHVtYlJlYWwgdWwgLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaW5rUmVhbFNsaWRlcnMocmVhbFNsaWRlciwgcmVhbFRodW1iU2xpZGVyKTtcblxuICAgICAgICAgICAgLy8gIGlmKCRqKFwiI2J4LXBhZ2VyMSBsaVwiKS5sZW5ndGg8NSl7XG4gICAgICAgICAgICAvLyAgICAkaihcIiNieC1wYWdlcjEgLmJ4LW5leHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgLy8gIH1cblxuICAgICAgICAgICAgLy8gc2luY3Jvbml6emEgc2xpZGVycyByZWFsaXp6YXppb25pXG4gICAgICAgICAgICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUywgdGh1bWJTKSB7XG5cbiAgICAgICAgICAgICAgICAkaihcInVsI2J4LXBhZ2VyMlwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXggPSAkaih0aGlzKS5wYXJlbnQoKS5hdHRyKFwiZGF0YS1zbGlkZUluZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICBiaWdTLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc2xpZGVyIT0kdGh1bWJTbGlkZXIuIHNsaWRlciBpcyB0aGUgcmVhbHNsaWRlclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlUmVhbFRodW1iKHNsaWRlciwgbmV3SW5kZXgpIHtcblxuICAgICAgICAgICAgICAgIHZhciAkdGh1bWJTID0gJGooXCIjYngtcGFnZXIyXCIpO1xuICAgICAgICAgICAgICAgICR0aHVtYlMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICR0aHVtYlMuZmluZCgnbGlbZGF0YS1zbGlkZUluZGV4PVwiJyArIG5ld0luZGV4ICsgJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSBuZXdJbmRleCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5nb1RvU2xpZGUoc2xpZGVyLmdldFNsaWRlQ291bnQoKSAtIDQpO1xuICAgICAgICAgICAgICAgIH1cblxuXG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9XG5cblxuICAgIC8vIGhvbWUgc2xpZGVyXG4gICAgaWYgKCQoXCIjc2xpZGVyLWhvbWVcIikubGVuZ3RoKSB7XG4gICAgICAgICQoJyNzbGlkZXItaG9tZScpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgIHNwZWVkOiAxMDAwLFxuICAgICAgICAgICAgLy8gcGF1c2U6MjAwLFxuICAgICAgICAgICAgLy8gYXV0bzp0cnVlLFxuICAgICAgICAgICAgcGFnZXI6IHRydWUsXG4gICAgICAgICAgICAvLyBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICBtb2RlOiAnZmFkZScsXG4gICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICBwcmV2VGV4dDogJycsXG4gICAgICAgICAgICBwcmV2U2VsZWN0b3I6ICgnLm5leHRlbmQtYXJyb3ctcHJldmlvdXMnKSxcbiAgICAgICAgICAgIG5leHRTZWxlY3RvcjogKCcubmV4dGVuZC1hcnJvdy1uZXh0JyksXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICAgICAgICBwYWdlckN1c3RvbTogdHJ1ZSxcbiAgICAgICAgICAgIG9uU2xpZGVyTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmltZy1pdGVtJykuZGVsYXkoNDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnKz00NTAnLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCAxMjAwKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzU4JScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmRlbGF5KDkwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIH0sIDgwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuYnRuLXNsaWRlJykuZGVsYXkoMTAwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAvLyB9LCAxMjAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNsaWRlQWZ0ZXI6IGZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgICAgICAgICAgICQoJy5pbWctaXRlbScpLmRlbGF5KDQwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJys9NDUwJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICc1OCUnLFxuICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpZGUtYnRuLW91dGVyJykuZGVsYXkoOTAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSwgODAwKTtcblxuICAgICAgICAgICAgICAgIC8vICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSgxMDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIC8vIH0sIDEyMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2xpZGVCZWZvcmU6IGZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgICAgICAgICAgIC8vIGhpZGluZyBlbGVtZW50cyBiZWZvcmUgcmViYXNlXG4gICAgICAgICAgICAgICAgJCgnLmltZy1pdGVtJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzAnXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2luZyBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgJCgnLmltZy1pdGVtJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJy09NDUwJ1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICd0b3AnOiAnMjUlJ1xuICAgICAgICAgICAgICAgIH0sIDUwKTtcblxuICAgICAgICAgICAgICAgIC8vICQoJy5zbGlkZS1idG4tb3V0ZXInKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICd0b3AnOiAnNjclJ1xuICAgICAgICAgICAgICAgIC8vIH0sIDUwKTtcblxuICAgICAgICAgICAgICAgIC8vICQoJy5zbGlkZS1idG4tb3V0ZXInKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICdvcGFjaXR5JzogMFxuICAgICAgICAgICAgICAgIC8vIH0sIDUwMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgLy8gc2hvdyBzbGlkZSBhcnJvd3MgdmlhIGhvdmVyXG4gICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgJCgnLmhvbWUtc2xpZGVyJykuaG92ZXIoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuICAgICAgICAgICAgJCgnLm5leHRlbmQtYXJyb3cnKS5zdG9wKHRydWUsIHRydWUpLmZhZGVUb2dnbGUoMzAwKTtcbiAgICAgICAgfSk7XG4gICAgfSkoalF1ZXJ5KTtcbiAgICAvLyBFT0YgaG9tZSBzbGlkZXJcblxuICAgIC8vIEVPRiBieCBzbGlkZXJzXG5cblxuXG4gICAgLy8gZmFxLXBhZ2UgY29udGVudCBzbGlkZVxuICAgIGlmICgkKFwiLmZhcS1pdGVtLXRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLmZhcS1pdGVtLXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmpzUHJvZE1lbnVDb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gRU9GIGZhcS1wYWdlIGNvbnRlbnQgc2xpZGVcblxuXG5cbiAgICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgbWVudSB7dGFibGV0fVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgICAgaWYgKCQoXCIucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmpzQ29sdW1uVGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFT0YgZG9jdW1lbnRhdGlvbi1ncmlkIG1lbnVcblxuXG5cbiAgICAvLyBwcm9kdWN0LWdyaWQgbWVudSB7dGFibGV0fVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgICAgaWYgKCQoXCIucGFnZS1wcm9kdWN0LWdyaWQgLmpzQ29sdW1uVGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnBhZ2UtcHJvZHVjdC1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFT0YgcHJvZHVjdC1ncmlkIG1lbnUge3RhYmxldH1cblxuXG4gICAgLy8gc29sdXRpb25zIG1lbnUge3RhYmxldH1cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgIGlmICgkKFwiLnBhZ2Utc29sdXRpb25zIC5qc0NvbHVtblRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5wYWdlLXNvbHV0aW9ucyAuanNDb2x1bW5UaXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZS5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRU9GIHNvbHV0aW9ucyBtZW51IHt0YWJsZXR9XG5cblxuXG4gIC8vIGJ1cmdlcjpcbiAgICAvLyBidXJnZXIgYW5pbWF0aW9uIGl0c2VsZjpcbiAgICAkKCdhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgfSk7XG5cbiAgICAkKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oMzAwKTtcblxuICAgICAgICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgfSk7XG5cblxuICAgIHNob3dNYWluTW9kYWwoKTtcblxuICAgIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKSB7XG4gICAgICAgICQoJy5qc3JlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbigzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1haW5Nb2RhbCgpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VNYWluTW9kYWwoKSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCgzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbk92ZXJsYXkoKTtcblxuICAgIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpIHtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrRm9ybVZhbHVlcygpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JtVmFsdWVzKCkge1xuICAgICAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKCEoJCgnW25hbWU9bG9naW5dJykudmFsKCkpIHx8ICEoJCgnW25hbWU9cGhvbmVdJykudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cblxuICAgIC8vIGRyb3BEb3duIG1lbnVcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykubW91c2VlbnRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICQoJy5kcm9wZG93bicpLm1vdXNlbGVhdmUoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICQuZGF0YSh0aGlzLCAndGltZXInLCBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgICAgIH0sIHRoaXMpLCAyMDApKTtcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuXG4gICAgLy8gZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuICAgICAgICAgICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dChvcmlnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQl9Cw0LrQsNC30LDRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5idG4tZm9ybSwgLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZm9ybScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JfQsNC60LDQt9Cw0YLRjCDQsdC10YHQv9C70LDRgtC90YPRjiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0sIC5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWZvcm0nKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBwcm9kdWN0LWRlc2MgcGFnZVxuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQkdC10YHQv9C70LDRgtC90LDRjyDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y8nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZGVzYycpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JfQsNC60LDQt9Cw0YLRjCDQsdC10YHQv9C70LDRgtC90YPRjiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZGVzYycpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgICAgICAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgdGl0bGVcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5wYWdlLXRpdGxlIGgxJykudGV4dChzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0LTQu9GPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjyc7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLnBhZ2UtdGl0bGUgaDEnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gZG9jdW1lbnRhdGlvbi1ncmlkIHRpdGxlXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5jb2x1bW4tbGVmdCAuY29sdW1uLXRpdGxlJykudGV4dChzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5jb2x1bW4tbGVmdCAuY29sdW1uLXRpdGxlJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgIC8vQWRkIHlvdXIgamF2YXNjcmlwdCBmb3IgbGFyZ2Ugc2NyZWVucyBoZXJlXG4gICAgICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICAgICAgICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dChzdHJpbmcpO1xuICAgICAgICAgICAgfSkoKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy8gRU9GIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG5cbiAgICAvLyBwYXJhbGxheFxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IDAsXG4gICAgICAgICAgICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgIC8vIHBhcmFsbGF4IGVmZmVjdCBmdW5jdGlvblxuICAgICAgICBmdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcikge1xuICAgICAgICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICAgICAgICAgICAkKHBybHhCZykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBweCknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCh3U2Nyb2xsICsgJCh3aW5kb3cpLmhlaWdodCgpKSA+PSAkKHBybHhCZykub2Zmc2V0KCkudG9wKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlIVwiKTtcbiAgICAgICAgICAgICAgICAkKHBybHhCZykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKCcgKyAoKCQocHJseENvbnRhaW5lcikub2Zmc2V0KCkudG9wIC0gd1Njcm9sbCkgLyAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDApICogZmFjdG9yICsgJyUpJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgICAgICAgICBpZiAoJCgnLnBhcmFsbGF4LWluZGV4JykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcmFsbGF4KCcuYm90dG9tLWxpbmUnLCAnLnBhcmFsbGF4LWluZGV4JywgMC42KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcbiAgICAvLyBFT0ZwYXJhbGxheFxuXG5cblxuICAgIC8vIHRhYnMgbW9kdWxlIChwcm9kdWN0IHBhZ2UpXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuanMtdGFicyBsaVtkYXRhLWlkXScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS1pZCcpKS5mYWRlSW4oMCkuc2libGluZ3MoKS5mYWRlT3V0KDApO1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9KSgpO1xuXG4gICAgLy8gdGFicyBmb3IgbW9iaWxlXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICAgICAvLyBZb3UgcGFzcy1pbiBqUXVlcnkgYW5kIHRoZW4gYWxpYXMgaXQgd2l0aCB0aGUgJC1zaWduXG4gICAgICAgICAgICAvLyBTbyB5b3VyIGludGVybmFsIGNvZGUgZG9lc24ndCBjaGFuZ2VcblxuICAgICAgICAgICAgJCgnLmRlc2MtZnVsbC10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLmFkZENsYXNzKCdvdmVydGFiYmVkJyk7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ292ZXJ0YWJiZWQnKS5jc3MoJ3dpZHRoJywgJ2F1dG8nKTtcbiAgICAgICAgICAgICAgICB2YXIgbm9uQWN0aXZlVGFic0NvbW1vblcgPSAkKCcjbWVudV90YWJzIC5kZXNjLW5hdi5tb2R1bGUtaGVhZGVyJykud2lkdGgoKSAtICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgdmFyIFc0bm9uQWN0aXZlVGFiID0gbm9uQWN0aXZlVGFic0NvbW1vblcgLyAyIC0gMTtcbiAgICAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLm91dGVyV2lkdGgoVzRub25BY3RpdmVUYWIpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpmaXJzdC1jaGlsZCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykuYWRkQ2xhc3MoJ292ZXJ0YWJiZWQnKTtcbiAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdvdmVydGFiYmVkJykuY3NzKCd3aWR0aCcsICdhdXRvJyk7XG4gICAgICAgICAgICB2YXIgbm9uQWN0aXZlVGFic0NvbW1vblcgPSAkKCcjbWVudV90YWJzIC5kZXNjLW5hdi5tb2R1bGUtaGVhZGVyJykud2lkdGgoKSAtICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICB2YXIgVzRub25BY3RpdmVUYWIgPSBub25BY3RpdmVUYWJzQ29tbW9uVyAvIDIgLSAxO1xuICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5vdXRlcldpZHRoKFc0bm9uQWN0aXZlVGFiKTtcblxuICAgICAgICB9KShqUXVlcnkpO1xuICAgIH1cbiAgICAvLyBFT0Z0YWJzIG1vZHVsZVxuXG5cblxuICAgIC8vIGJyZWFkY3J1bWJzICcuLi4nXG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICAgICAvLyBZb3UgcGFzcy1pbiBqUXVlcnkgYW5kIHRoZW4gYWxpYXMgaXQgd2l0aCB0aGUgJC1zaWduXG4gICAgICAgICAgICAvLyBTbyB5b3VyIGludGVybmFsIGNvZGUgZG9lc24ndCBjaGFuZ2VcbiAgICAgICAgICAgIHZhciBjb3VudCA9ICQoJy5icmVhZGNydW1icyBsaScpLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChjb3VudCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgJCgnLmJyZWFkY3J1bWJzIGxpOm50aC1jaGlsZChuKzIpOm5vdCg6bGFzdC1jaGlsZCkgYScpLmh0bWwoJy4uLicpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJCgnLmJyZWFkY3J1bWJzIGxpOmxhc3QtY2hpbGQgYScpLmFkZENsYXNzKCdvdmVyY3J1bWJzJyk7XG4gICAgICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzQyOTExNTEvanF1ZXJ5LWNvdW50LWNoaWxkLWVsZW1lbnRzXG5cbiAgICAgICAgICAgIC8vIGNvdW50aW5nIHdpZHRoIGZvciB3aG9sZSB2cmVhZGNydW1ic1xuICAgICAgICAgICAgdmFyIHBhcmVudCA9ICQoJy5icmVhZGNydW1icycpLndpZHRoKCk7XG4gICAgICAgICAgICB2YXIgbGFzdCA9ICQoJy5icmVhZGNydW1icyBsaTpub3QoOmxhc3QtY2hpbGQpJykub3V0ZXJXaWR0aCgpO1xuXG4gICAgICAgICAgICB2YXIgdyA9IDA7XG5cbiAgICAgICAgICAgIGpRdWVyeSgnLmJyZWFkY3J1bWJzIGxpOmxhc3QtY2hpbGQnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGpRdWVyeSh0aGlzKS5wcmV2QWxsKCkuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgdyArPSAkKHRoaXMpLndpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHcpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB2YXIgbmV3V2lkdGhGb3JMYXN0RWwgPSBwYXJlbnQgLSB3IC0gMTA7XG5cbiAgICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkJykud2lkdGgobmV3V2lkdGhGb3JMYXN0RWwpO1xuXG4gICAgICAgIH0pKGpRdWVyeSk7XG4gICAgfVxuICAgIC8vIEVPRiBicmVhZGNydW1icyAnLi4uJ1xuXG5cblxuICAgIC8vIGZvcm0gdmFsaWRhdGlvblxuICAgICQoJy5jYWxsYmFjaycpLnN1Ym1pdChmdW5jdGlvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdmFyIG5hbWUgPSAkKCcuY2FsbGJhY2sgW25hbWU9bG9naW5dJyksXG4gICAgICAgICAgICBwaG9uZSA9ICQoJy5jYWxsYmFjayBbbmFtZT1waG9uZV0nKSxcbiAgICAgICAgICAgIGVtYWlsID0gJCgnLmNhbGxiYWNrIFtuYW1lPWVtYWlsXScpO1xuXG4gICAgICAgIGlmIChuYW1lLnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgbmFtZS5wYXJlbnRzKCcudXNlci1maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsaWRhdGVFbWFpbChlbWFpbC52YWwoKSkpIHtcbiAgICAgICAgICAgIGVtYWlsLnBhcmVudHMoJy5waG9uZS1maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBob25lLnZhbCgpID09PSAnJykge1xuICAgICAgICAgICAgcGhvbmUucGFyZW50cygnLmVtYWlsLWZpZWxkJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcblxuICAgICAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBcImluc3RhbnRcIi1jaGVja1xuICAgICQoJy5jYWxsYmFjayBpbnB1dFt0eXBlPVwiZW1haWxcIl0nKS5ibHVyKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoJCh0aGlzKS52YWwoKSkpIHtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiB2YWxpZGF0ZUVtYWlsKGVtYWlsKSB7XG4gICAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbiAgICB9XG4gICAgLy8gRU9GIGZvcm0gdmFsaWRhdGlvblxuXG5cblxuXG59KTsgLy8gRU9GIGRvY3VtZW50LnJlYWR5IE1BSU5cbiJdfQ==
