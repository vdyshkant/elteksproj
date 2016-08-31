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
                slideMargin: 29,
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
        $('.request-callback').click(function() {
            $('.modal-content').fadeIn(300);
            $('.modal-overlay').fadeIn(300);
        });
    }


    showContentModal();

    function showContentModal() {
        $('.js-reqCallback').click(function() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L3NyYy9qcy9mYWtlX2U2ZGVlMjc0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG5cbi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cInVzZSBzdHJpY3RcIjtcblxuXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCQpIHtcblxuXG5cbiAgICAvLyBzdWItaGVhZGVyIHNlYXJjaCBmaWVsZFxuICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgIGlmICgkKFwiI2lucHQtc2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oXCJmb2N1c1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbignYmx1cicsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIGlmICgkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KShqUXVlcnkpO1xuICAgIC8vIHN1Yi1oZWFkZXIgc2VhcmNoIGZpZWxkXG5cblxuXG4gICAgLy8gaW5kZXggcmlzaW5nIGNvdW50ZXIgKDQgYmxvY2tzKVxuICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICAgICAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdyArIDY1MCkge1xuICAgICAgICAgICAgICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICBmdW5jdGlvbiBhbmltYXRlQ291bnRlcigpIHtcbiAgICAgICAgICAgIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgdmFyIG51bWJlcnMgPSBbOCwgNDUwMDAwLCAxMCwgMjVdLFxuICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgICAgICAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICAgICAgICAgICAgICBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXAgPSAkLmFuaW1hdGVOdW1iZXIubnVtYmVyU3RlcEZhY3Rvcmllcy5zZXBhcmF0b3IoJyAnKTtcblxuICAgICAgICAgICAgICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYW5pbWF0ZU51bWJlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXI6IG51bWJlcnNbaV0sXG4gICAgICAgICAgICAgICAgICAgICAgICBudW1iZXJTdGVwOiBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXBcbiAgICAgICAgICAgICAgICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pKGpRdWVyeSk7XG4gICAgLy8gRU9GIGluZGV4IHJpc2luZyBjb3VudGVyICg0IGJsb2NrcylcblxuXG5cbiAgICAvLyBwcm9kdWN0cyBpdGVtIGhvdmVyXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMjBcIik7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgfSwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vIEVPRiBwcm9kdWN0cyBpdGVtIGhvdmVyXG5cblxuXG4gICAgLy8gcGFnaW5hdGlvblxuICAgIGlmICgkKCcucGFnaW5hdGlvbicpLmxlbmd0aCkge1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICAgICAgICAgICAgICBpbmRleCA9IE1hdGgubWluKE1hdGgubWF4KGluZGV4ICsgb2Zmc2V0LCAwKSwgdG90YWwgLSAxKTtcblxuICAgICAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jbnRyJykuaW5uZXJIVE1MID0gKGluZGV4ICsgMSkgKyAnIC8gJyArIHRvdGFsO1xuXG4gICAgICAgICAgICAgICAgcHIuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycpO1xuICAgICAgICAgICAgICAgIHBsLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIGluZGV4ID09PSB0b3RhbCAtIDEgPyAnZGlzYWJsZWQnIDogJycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGUubGVmdCcpO1xuICAgICAgICAgICAgdmFyIHBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRlLnJpZ2h0Jyk7XG5cbiAgICAgICAgICAgIGlmIChwciAmJiBwbCkge1xuXG4gICAgICAgICAgICAgICAgcHIub25jbGljayA9IHNsaWRlLmJpbmQodGhpcywgLTEpO1xuICAgICAgICAgICAgICAgIHBsLm9uY2xpY2sgPSBzbGlkZS5iaW5kKHRoaXMsIDEpO1xuXG4gICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gMCxcbiAgICAgICAgICAgICAgICAgICAgdG90YWwgPSA1O1xuXG5cbiAgICAgICAgICAgICAgICBzbGlkZSgwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9XG4gICAgLy8gRU9GIHBhZ2luYXRpb25cblxuXG5cbiAgICAvLyBuZXcgYnJhbmQgc2xpZGVyXG4gICAgaWYgKCQoXCJ1bCNzbGlkZXIxXCIpLmxlbmd0aCkge1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJGogPSBqUXVlcnkubm9Db25mbGljdCgpO1xuXG4gICAgICAgICAgICB2YXIgcmVhbFNsaWRlciA9ICRqKFwidWwjc2xpZGVyMVwiKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAgICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgfVxuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgcmVhbFRodW1iU2xpZGVyID0gJGooXCJ1bCNieC1wYWdlcjFcIikuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogODgsXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDMwLFxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPHNwYW4+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcblxuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RvcjogKCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICAgICAgICAgICBuZXh0U2VsZWN0b3I6ICgnLnNsaWRlci1uZXh0JyksXG4gICAgICAgICAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG5cbiAgICAgICAgICAgICAgICAvLyAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpbmtSZWFsU2xpZGVycyhyZWFsU2xpZGVyLCByZWFsVGh1bWJTbGlkZXIpO1xuXG4gICAgICAgICAgICAvLyAgaWYoJGooXCIjYngtcGFnZXIxIGxpXCIpLmxlbmd0aDw1KXtcbiAgICAgICAgICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgfVxuXG4gICAgICAgICAgICAvLyBzaW5jcm9uaXp6YSBzbGlkZXJzIHJlYWxpenphemlvbmlcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtSZWFsU2xpZGVycyhiaWdTLCB0aHVtYlMpIHtcblxuICAgICAgICAgICAgICAgICRqKFwidWwjYngtcGFnZXIxXCIpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleCA9ICRqKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJkYXRhLXNsaWRlSW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgIGJpZ1MuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zbGlkZXIhPSR0aHVtYlNsaWRlci4gc2xpZGVyIGlzIHRoZSByZWFsc2xpZGVyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLCBuZXdJbmRleCkge1xuXG4gICAgICAgICAgICAgICAgdmFyICR0aHVtYlMgPSAkaihcIiNieC1wYWdlcjFcIik7XG4gICAgICAgICAgICAgICAgJHRodW1iUy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJHRodW1iUy5maW5kKCdsaVtkYXRhLXNsaWRlSW5kZXg9XCInICsgbmV3SW5kZXggKyAnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLmdldFNsaWRlQ291bnQoKSAtIG5ld0luZGV4ID49IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmdvVG9TbGlkZShzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gNCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cblxuXG4gICAgLy8gc2xpZGVyICMyXG4gICAgaWYgKCQoXCJ1bCNzbGlkZXIyXCIpLmxlbmd0aCkge1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgJGogPSBqUXVlcnkubm9Db25mbGljdCgpO1xuXG4gICAgICAgICAgICB2YXIgcmVhbFNsaWRlciA9ICRqKFwidWwjc2xpZGVyMlwiKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgY29udHJvbHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAgICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgfVxuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgcmVhbFRodW1iU2xpZGVyID0gJGooXCJ1bCNieC1wYWdlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogODgsXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDI5LFxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPHNwYW4+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcblxuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RvcjogKCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICAgICAgICAgICBuZXh0U2VsZWN0b3I6ICgnLnNsaWRlci1uZXh0JyksXG4gICAgICAgICAgICAgICAgb25TbGlkZUJlZm9yZTogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qJGooXCIjc2xpZGVyVGh1bWJSZWFsIHVsIC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIsIHJlYWxUaHVtYlNsaWRlcik7XG5cbiAgICAgICAgICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgICAgICAgICAgLy8gICAgJGooXCIjYngtcGFnZXIxIC5ieC1uZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICAgICAgICAgICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsIHRodW1iUykge1xuXG4gICAgICAgICAgICAgICAgJGooXCJ1bCNieC1wYWdlcjJcIikub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gJGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsIG5ld0luZGV4KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRodW1iUyA9ICRqKFwiI2J4LXBhZ2VyMlwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicgKyBuZXdJbmRleCArICdcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gbmV3SW5kZXggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSA0KTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cbiAgICAvLyBob21lIHNsaWRlclxuICAgIGlmICgkKFwiI3NsaWRlci1ob21lXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcjc2xpZGVyLWhvbWUnKS5ieFNsaWRlcih7XG4gICAgICAgICAgICBzcGVlZDogMTAwMCxcbiAgICAgICAgICAgIC8vIHBhdXNlOjIwMCxcbiAgICAgICAgICAgIC8vIGF1dG86dHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VyOiB0cnVlLFxuICAgICAgICAgICAgLy8gZWFzaW5nOiAnc3dpbmcnLFxuICAgICAgICAgICAgbW9kZTogJ2ZhZGUnLFxuICAgICAgICAgICAgbmV4dFRleHQ6ICcnLFxuICAgICAgICAgICAgcHJldlRleHQ6ICcnLFxuICAgICAgICAgICAgcHJldlNlbGVjdG9yOiAoJy5uZXh0ZW5kLWFycm93LXByZXZpb3VzJyksXG4gICAgICAgICAgICBuZXh0U2VsZWN0b3I6ICgnLm5leHRlbmQtYXJyb3ctbmV4dCcpLFxuICAgICAgICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxuICAgICAgICAgICAgcGFnZXJDdXN0b206IHRydWUsXG4gICAgICAgICAgICBvblNsaWRlckxvYWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5pbWctaXRlbScpLmRlbGF5KDQwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJys9NDUwJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICc1OCUnLFxuICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLmJ0bi1zbGlkZScpLmRlbGF5KDEwMDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgLy8gfSwgMTIwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TbGlkZUFmdGVyOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkKCcuaW1nLWl0ZW0nKS5kZWxheSg0MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICcrPTQ1MCcsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAnNTglJyxcbiAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmRlbGF5KDkwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIH0sIDgwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuZGVsYXkoMTAwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAvLyB9LCAxMjAwKTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBvblNsaWRlQmVmb3JlOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAvLyBoaWRpbmcgZWxlbWVudHMgYmVmb3JlIHJlYmFzZVxuICAgICAgICAgICAgICAgICQoJy5pbWctaXRlbScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcwJ1xuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAgICAgLy8gY2hhbmdpbmcgcGFyYW1ldGVyc1xuICAgICAgICAgICAgICAgICQoJy5pbWctaXRlbScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICctPTQ1MCdcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAndG9wJzogJzI1JSdcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAndG9wJzogJzY3JSdcbiAgICAgICAgICAgICAgICAvLyB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAnb3BhY2l0eSc6IDBcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIHNob3cgc2xpZGUgYXJyb3dzIHZpYSBob3ZlclxuICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICQoJy5ob21lLXNsaWRlcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcbiAgICAgICAgICAgICQoJy5uZXh0ZW5kLWFycm93Jykuc3RvcCh0cnVlLCB0cnVlKS5mYWRlVG9nZ2xlKDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH0pKGpRdWVyeSk7XG4gICAgLy8gRU9GIGhvbWUgc2xpZGVyXG5cbiAgICAvLyBFT0YgYnggc2xpZGVyc1xuXG5cblxuICAgIC8vIGZhcS1wYWdlIGNvbnRlbnQgc2xpZGVcbiAgICBpZiAoJChcIi5mYXEtaXRlbS10aXRsZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJChcIi5mYXEtaXRlbS10aXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5mYXEtaXRlbS1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5qc1Byb2RNZW51Q29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEVPRiBmYXEtcGFnZSBjb250ZW50IHNsaWRlXG5cblxuXG4gICAgLy8gZG9jdW1lbnRhdGlvbi1ncmlkIG1lbnUge3RhYmxldH1cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgIGlmICgkKFwiLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuanNDb2x1bW5UaXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZS5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRU9GIGRvY3VtZW50YXRpb24tZ3JpZCBtZW51XG5cblxuXG4gICAgLy8gcHJvZHVjdC1ncmlkIG1lbnUge3RhYmxldH1cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgIGlmICgkKFwiLnBhZ2UtcHJvZHVjdC1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5wYWdlLXByb2R1Y3QtZ3JpZCAuanNDb2x1bW5UaXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZS5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRU9GIHByb2R1Y3QtZ3JpZCBtZW51IHt0YWJsZXR9XG5cblxuICAgIC8vIHNvbHV0aW9ucyBtZW51IHt0YWJsZXR9XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICBpZiAoJChcIi5wYWdlLXNvbHV0aW9ucyAuanNDb2x1bW5UaXRsZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIucGFnZS1zb2x1dGlvbnMgLmpzQ29sdW1uVGl0bGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5wcm9kdWN0cy1uYXYtY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVPRiBzb2x1dGlvbnMgbWVudSB7dGFibGV0fVxuXG5cblxuICAvLyBidXJnZXI6XG4gICAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG4gICAgJCgnYS5idXJnZXItbWVudSwgLm1lbnUtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgIH0pO1xuXG4gICAgJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKDMwMCk7XG5cbiAgICAgICAgLy8gaGlkZSBtZW51IHRvZ2dsZSBhbmQgY29udmVydCB0byBidXJnZXJcbiAgICAgICAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgIH0pO1xuXG5cbiAgICBzaG93TWFpbk1vZGFsKCk7XG5cbiAgICBmdW5jdGlvbiBzaG93TWFpbk1vZGFsKCkge1xuICAgICAgICAkKCcucmVxdWVzdC1jYWxsYmFjaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuXG4gICAgc2hvd0NvbnRlbnRNb2RhbCgpO1xuXG4gICAgZnVuY3Rpb24gc2hvd0NvbnRlbnRNb2RhbCgpIHtcbiAgICAgICAgJCgnLmpzLXJlcUNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VNYWluTW9kYWwoKTtcblxuICAgIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCkge1xuICAgICAgICAkKCcubW9kYWwtY29udGVudC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5PdmVybGF5KCk7XG5cbiAgICBmdW5jdGlvbiBoaWRlTWFpbk92ZXJsYXkoKSB7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCgzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0Zvcm1WYWx1ZXMoKTtcblxuICAgIGZ1bmN0aW9uIGNoZWNrRm9ybVZhbHVlcygpIHtcbiAgICAgICAgJCgnLmNhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgIGlmICghKCQoJ1tuYW1lPWxvZ2luXScpLnZhbCgpKSB8fCAhKCQoJ1tuYW1lPXBob25lXScpLnZhbCgpKSkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgICQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG5cbiAgICAvLyBkcm9wRG93biBtZW51XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgICAgICQoJy5kcm9wZG93bicpLm1vdXNlZW50ZXIoXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuXG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5tb3VzZWxlYXZlKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAkLmRhdGEodGhpcywgJ3RpbWVyJywgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICAgICB9LCB0aGlzKSwgMjAwKSk7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuICAgIC8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JfQsNC60LDQt9Cw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0sIC5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWZvcm0nKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gcHJvZHVjdC1kZXNjIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGPJztcbiAgICAgICAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XG4gICAgICAgICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gZG9jdW1lbnRhdGlvbi1ncmlkIHRpdGxlXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC00LvRjyDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5wYWdlLXRpdGxlIGgxJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIGRvY3VtZW50YXRpb24tZ3JpZCB0aXRsZVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuY29sdW1uLWxlZnQgLmNvbHVtbi10aXRsZScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuY29sdW1uLWxlZnQgLmNvbHVtbi10aXRsZScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4gICAgLy8gcGFyYWxsYXhcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnRcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIikgPiAwLFxuICAgICAgICAgICAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3IpIHtcbiAgICAgICAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgICAgICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZSFcIik7XG4gICAgICAgICAgICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArICclKSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gICAgLy8gRU9GcGFyYWxsYXhcblxuXG5cbiAgICAvLyB0YWJzIG1vZHVsZSAocHJvZHVjdCBwYWdlKVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmpzLXRhYnMgbGlbZGF0YS1pZF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuZmFkZUluKDApLnNpYmxpbmdzKCkuZmFkZU91dCgwKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIC8vIHRhYnMgZm9yIG1vYmlsZVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG5cbiAgICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5hZGRDbGFzcygnb3ZlcnRhYmJlZCcpO1xuICAgICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdvdmVydGFiYmVkJykuY3NzKCd3aWR0aCcsICdhdXRvJyk7XG4gICAgICAgICAgICAgICAgdmFyIG5vbkFjdGl2ZVRhYnNDb21tb25XID0gJCgnI21lbnVfdGFicyAuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCkgLSAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBXNG5vbkFjdGl2ZVRhYiA9IG5vbkFjdGl2ZVRhYnNDb21tb25XIC8gMiAtIDE7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5vdXRlcldpZHRoKFc0bm9uQWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLmFkZENsYXNzKCdvdmVydGFiYmVkJyk7XG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnb3ZlcnRhYmJlZCcpLmNzcygnd2lkdGgnLCAnYXV0bycpO1xuICAgICAgICAgICAgdmFyIG5vbkFjdGl2ZVRhYnNDb21tb25XID0gJCgnI21lbnVfdGFicyAuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCkgLSAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIFc0bm9uQWN0aXZlVGFiID0gbm9uQWN0aXZlVGFic0NvbW1vblcgLyAyIC0gMTtcbiAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykub3V0ZXJXaWR0aChXNG5vbkFjdGl2ZVRhYik7XG5cbiAgICAgICAgfSkoalF1ZXJ5KTtcbiAgICB9XG4gICAgLy8gRU9GdGFicyBtb2R1bGVcblxuXG5cbiAgICAvLyBicmVhZGNydW1icyAnLi4uJ1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG4gICAgICAgICAgICB2YXIgY291bnQgPSAkKCcuYnJlYWRjcnVtYnMgbGknKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMykge1xuICAgICAgICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpudGgtY2hpbGQobisyKTpub3QoOmxhc3QtY2hpbGQpIGEnKS5odG1sKCcuLi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkIGEnKS5hZGRDbGFzcygnb3ZlcmNydW1icycpO1xuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjkxMTUxL2pxdWVyeS1jb3VudC1jaGlsZC1lbGVtZW50c1xuXG4gICAgICAgICAgICAvLyBjb3VudGluZyB3aWR0aCBmb3Igd2hvbGUgdnJlYWRjcnVtYnNcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKCcuYnJlYWRjcnVtYnMnKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSAkKCcuYnJlYWRjcnVtYnMgbGk6bm90KDpsYXN0LWNoaWxkKScpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICAgICAgdmFyIHcgPSAwO1xuXG4gICAgICAgICAgICBqUXVlcnkoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgKz0gJCh0aGlzKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld1dpZHRoRm9yTGFzdEVsID0gcGFyZW50IC0gdyAtIDEwO1xuXG4gICAgICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCcpLndpZHRoKG5ld1dpZHRoRm9yTGFzdEVsKTtcblxuICAgICAgICB9KShqUXVlcnkpO1xuICAgIH1cbiAgICAvLyBFT0YgYnJlYWRjcnVtYnMgJy4uLidcblxuXG5cbiAgICAvLyBmb3JtIHZhbGlkYXRpb25cbiAgICAkKCcuY2FsbGJhY2snKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBuYW1lID0gJCgnLmNhbGxiYWNrIFtuYW1lPWxvZ2luXScpLFxuICAgICAgICAgICAgcGhvbmUgPSAkKCcuY2FsbGJhY2sgW25hbWU9cGhvbmVdJyksXG4gICAgICAgICAgICBlbWFpbCA9ICQoJy5jYWxsYmFjayBbbmFtZT1lbWFpbF0nKTtcblxuICAgICAgICBpZiAobmFtZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIG5hbWUucGFyZW50cygnLnVzZXItZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwudmFsKCkpKSB7XG4gICAgICAgICAgICBlbWFpbC5wYXJlbnRzKCcucGhvbmUtZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaG9uZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBob25lLnBhcmVudHMoJy5lbWFpbC1maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gXCJpbnN0YW50XCItY2hlY2tcbiAgICAkKCcuY2FsbGJhY2sgaW5wdXRbdHlwZT1cImVtYWlsXCJdJykuYmx1cihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKCQodGhpcykudmFsKCkpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuICAgIC8vIEVPRiBmb3JtIHZhbGlkYXRpb25cblxuXG5cblxufSk7IC8vIEVPRiBkb2N1bWVudC5yZWFkeSBNQUlOXG4iXX0=
