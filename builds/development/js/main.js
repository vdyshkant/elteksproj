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
                // hideControlOnEnd: true,
                controls: false

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
    if ($("#h-slider").length) {
        $('#h-slider').bxSlider({
            speed: 1200,
            pause: 3000,
            auto:true,
            pager: true,
            // easing: 'swing',
            // mode: 'fade',
            nextText: '',
            prevText: '',
            prevSelector: ('.nextend-arrow-previous'),
            nextSelector: ('.nextend-arrow-next'),
            infiniteLoop: true,
            pagerCustom: true,
            onSliderLoad: function() {
                $('.hs-content__img').delay(400).animate({
                    'left': '+=450',
                    'opacity': 1
                }, 1200);

                if ($(window).width() < 768) {
                  $('.hs-content__content').animate({
                      'top': '58%',
                      'opacity': 1
                  }, 1200);
                }
                if ($(window).width() > 768) {
                  $('.hs-content__content').animate({
                      'top': '50%',
                      'opacity': 1
                  }, 1200);
                }


                $('.hs-content__btn').delay(900).animate({
                    'opacity': 1
                }, 800);

                // $('.btn-slide').delay(1000).animate({
                //   'opacity': 1
                // }, 1200);
            },
            onSlideAfter: function($slideElement, oldIndex, newIndex) {
                $('.hs-content__img').delay(400).animate({
                    'left': '+=450',
                    'opacity': 1
                }, 1200);

                if ($(window).width() < 768) {
                  $('.hs-content__content').animate({
                      'top': '58%',
                      'opacity': 1
                  }, 1200);
                }
                if ($(window).width() > 768) {
                  $('.hs-content__content').animate({
                      'top': '50%',
                      'opacity': 1
                  }, 1200);
                }

                $('.hs-content__btn').delay(900).animate({
                    'opacity': 1
                }, 800);

                // $('.hs-content__btn').delay(1000).animate({
                //   'opacity': 1
                // }, 1200);
            },
            onSlideBefore: function($slideElement, oldIndex, newIndex) {
                // hiding elements before rebase
                $('.hs-content__img').animate({
                    'opacity': '0'
                }, 500);

                $('.hs-content__content').animate({
                    'opacity': 0
                }, 500);

                $('.hs-content__btn').animate({
                    'opacity': 0
                }, 500);

                // changing parameters
                $('.hs-content__img').animate({
                    'left': '-=450'
                }, 50);

                $('.hs-content__content').animate({
                    'top': '25%'
                }, 50);

                // $('.hs-content__btn').animate({
                //   'top': '67%'
                // }, 50);

                // $('.hs-content__btn').animate({
                //   'opacity': 0
                // }, 500);
            }
        });
    }


    // show slide arrows via hover



    $('.h-slider').mouseenter(function() {
        $('.hs-controls').fadeIn(300);

        console.info('.nextend-arrow).fade IN;');
    }).mouseleave(function() {
        $('.hs-controls').fadeOut(300);

        console.info('.nextend-arrow).fade OUT;');
    });


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
            // $('.dropdown').mouseleave(
            //     function() {
            //         $.data(this, 'timer', setTimeout($.proxy(function() {
            //
            //             $(this).children('.sub-menu').stop(true, true).slideUp(200, 'easeInOutCubic');
            //             $(this).removeClass('active');
            //         }, this), 200));
            //
            //     }
            // );
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


    // magic zoom preferences

    // var mzOptions = {
    //   zoomWidth: "200%",
    //   zoomHeight: "200%",
    //   zoomDistance: 25,
    //   hint: "off"
    // };

    // eof magic zoom preferences
    // $("#zoom_01").elevateZoom();
    $("#zoom_01").elevateZoom({zoomWindowHeight: 200, zoomWindowWidth:200, borderSize: 0, easing:true});
    $("#zoom_02").elevateZoom({zoomWindowHeight: 200, zoomWindowWidth:200, borderSize: 0, easing:true});
    $("#zoom_03").elevateZoom({zoomWindowHeight: 200, zoomWindowWidth:200, borderSize: 0, easing:true});
    $("#zoom_04").elevateZoom({zoomWindowHeight: 200, zoomWindowWidth:200, borderSize: 0, easing:true});


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L3NyYy9qcy9mYWtlXzM0OWY2ZjA3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8qZXNsaW50LWRpc2FibGUgbm8tdW51c2VkLXZhcnMqL1xuXG4vLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXCJ1c2Ugc3RyaWN0XCI7XG5cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigkKSB7XG5cblxuXG4gICAgLy8gc3ViLWhlYWRlciBzZWFyY2ggZmllbGRcbiAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpZiAoJCh0aGlzKS52YWwoKS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkoalF1ZXJ5KTtcbiAgICAvLyBzdWItaGVhZGVyIHNlYXJjaCBmaWVsZFxuXG5cblxuICAgIC8vIGluZGV4IHJpc2luZyBjb3VudGVyICg0IGJsb2NrcylcbiAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3cgKyA2NTApIHtcbiAgICAgICAgICAgICAgICAgICAgYW5pbWF0ZUNvdW50ZXIoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKSB7XG4gICAgICAgICAgICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgICAgICAgICAgICAgZHVyYXRpb24gPSBbMS41LCA0LjUsIDMuNSwgM10sXG4gICAgICAgICAgICAgICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgICAgICAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICAgICAgICAgICAgICBudW1iZXJwLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICAgICAgICAgICAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICAgICAgICAgICAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KShqUXVlcnkpO1xuICAgIC8vIEVPRiBpbmRleCByaXNpbmcgY291bnRlciAoNCBibG9ja3MpXG5cblxuXG4gICAgLy8gcHJvZHVjdHMgaXRlbSBob3ZlclxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQoJy5pdGVtIC5tYWtlM2QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAkKCcuaXRlbSAubWFrZTNkJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgIH0sIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvLyBFT0YgcHJvZHVjdHMgaXRlbSBob3ZlclxuXG5cblxuICAgIC8vIHBhZ2luYXRpb25cbiAgICBpZiAoJCgnLnBhZ2luYXRpb24nKS5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgZnVuY3Rpb24gc2xpZGUob2Zmc2V0KSB7XG4gICAgICAgICAgICAgICAgaW5kZXggPSBNYXRoLm1pbihNYXRoLm1heChpbmRleCArIG9mZnNldCwgMCksIHRvdGFsIC0gMSk7XG5cbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY250cicpLmlubmVySFRNTCA9IChpbmRleCArIDEpICsgJyAvICcgKyB0b3RhbDtcblxuICAgICAgICAgICAgICAgIHByLnNldEF0dHJpYnV0ZSgnZGF0YS1zdGF0ZScsIGluZGV4ID09PSAwID8gJ2Rpc2FibGVkJyA6ICcnKTtcbiAgICAgICAgICAgICAgICBwbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnBhZ2luYXRlLmxlZnQnKTtcbiAgICAgICAgICAgIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0ZS5yaWdodCcpO1xuXG4gICAgICAgICAgICBpZiAocHIgJiYgcGwpIHtcblxuICAgICAgICAgICAgICAgIHByLm9uY2xpY2sgPSBzbGlkZS5iaW5kKHRoaXMsIC0xKTtcbiAgICAgICAgICAgICAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCh0aGlzLCAxKTtcblxuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IDAsXG4gICAgICAgICAgICAgICAgICAgIHRvdGFsID0gNTtcblxuXG4gICAgICAgICAgICAgICAgc2xpZGUoMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfVxuICAgIC8vIEVPRiBwYWdpbmF0aW9uXG5cblxuXG4gICAgLy8gbmV3IGJyYW5kIHNsaWRlclxuICAgIGlmICgkKFwidWwjc2xpZGVyMVwiKS5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRqID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuICAgICAgICAgICAgdmFyIHJlYWxTbGlkZXIgPSAkaihcInVsI3NsaWRlcjFcIikuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJycsXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgICAgICAgIC8vICAgIGNoYW5nZVJlYWxUaHVtYihyZWFsVGh1bWJTbGlkZXIsbmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIH1cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdmFyIHJlYWxUaHVtYlNsaWRlciA9ICRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAzMCxcbiAgICAgICAgICAgICAgICBtb3ZlU2xpZGVzOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPHNwYW4+PC9zcGFuPicsXG5cbiAgICAgICAgICAgICAgICBwcmV2U2VsZWN0b3I6ICgnLnNsaWRlci1wcmV2JyksXG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdG9yOiAoJy5zbGlkZXItbmV4dCcpLFxuICAgICAgICAgICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAgICAgICAgLyokaihcIiNzbGlkZXJUaHVtYlJlYWwgdWwgLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkc2xpZGVFbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpOyAqL1xuXG4gICAgICAgICAgICAgICAgLy8gIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBsaW5rUmVhbFNsaWRlcnMocmVhbFNsaWRlciwgcmVhbFRodW1iU2xpZGVyKTtcblxuICAgICAgICAgICAgLy8gIGlmKCRqKFwiI2J4LXBhZ2VyMSBsaVwiKS5sZW5ndGg8NSl7XG4gICAgICAgICAgICAvLyAgICAkaihcIiNieC1wYWdlcjEgLmJ4LW5leHRcIikuaGlkZSgpO1xuICAgICAgICAgICAgLy8gIH1cblxuICAgICAgICAgICAgLy8gc2luY3Jvbml6emEgc2xpZGVycyByZWFsaXp6YXppb25pXG4gICAgICAgICAgICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUywgdGh1bWJTKSB7XG5cbiAgICAgICAgICAgICAgICAkaihcInVsI2J4LXBhZ2VyMVwiKS5vbihcImNsaWNrXCIsIFwiYVwiLCBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgbmV3SW5kZXggPSAkaih0aGlzKS5wYXJlbnQoKS5hdHRyKFwiZGF0YS1zbGlkZUluZGV4XCIpO1xuICAgICAgICAgICAgICAgICAgICBiaWdTLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vc2xpZGVyIT0kdGh1bWJTbGlkZXIuIHNsaWRlciBpcyB0aGUgcmVhbHNsaWRlclxuICAgICAgICAgICAgZnVuY3Rpb24gY2hhbmdlUmVhbFRodW1iKHNsaWRlciwgbmV3SW5kZXgpIHtcblxuICAgICAgICAgICAgICAgIHZhciAkdGh1bWJTID0gJGooXCIjYngtcGFnZXIxXCIpO1xuICAgICAgICAgICAgICAgICR0aHVtYlMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICR0aHVtYlMuZmluZCgnbGlbZGF0YS1zbGlkZUluZGV4PVwiJyArIG5ld0luZGV4ICsgJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSBuZXdJbmRleCA+PSA0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHNsaWRlci5nb1RvU2xpZGUoc2xpZGVyLmdldFNsaWRlQ291bnQoKSAtIDQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkoKTtcbiAgICB9XG5cblxuICAgIC8vIHNsaWRlciAjMlxuICAgIGlmICgkKFwidWwjc2xpZGVyMlwiKS5sZW5ndGgpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyICRqID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuICAgICAgICAgICAgdmFyIHJlYWxTbGlkZXIgPSAkaihcInVsI3NsaWRlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnJyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJycsXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvLyBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZVxuXG4gICAgICAgICAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgICAgICAvLyAgICBjaGFuZ2VSZWFsVGh1bWIocmVhbFRodW1iU2xpZGVyLG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICAgLy9cbiAgICAgICAgICAgICAgICAvLyAgfVxuXG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICB2YXIgcmVhbFRodW1iU2xpZGVyID0gJGooXCJ1bCNieC1wYWdlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgICAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgICAgICAgICBtYXhTbGlkZXM6IDMsXG4gICAgICAgICAgICAgICAgc2xpZGVXaWR0aDogODgsXG4gICAgICAgICAgICAgICAgc2xpZGVNYXJnaW46IDI5LFxuICAgICAgICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICAgICAgICAgcGFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiAzMDAsXG4gICAgICAgICAgICAgICAgaW5maW5pdGVMb29wOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBoaWRlQ29udHJvbE9uRW5kOiB0cnVlLFxuICAgICAgICAgICAgICAgIG5leHRUZXh0OiAnPHNwYW4+PC9zcGFuPicsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcblxuICAgICAgICAgICAgICAgIHByZXZTZWxlY3RvcjogKCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICAgICAgICAgICBuZXh0U2VsZWN0b3I6ICgnLnNsaWRlci1uZXh0JyksXG4gICAgICAgICAgICAgICAgb25TbGlkZUJlZm9yZTogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIC8qJGooXCIjc2xpZGVyVGh1bWJSZWFsIHVsIC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIsIHJlYWxUaHVtYlNsaWRlcik7XG5cbiAgICAgICAgICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgICAgICAgICAgLy8gICAgJGooXCIjYngtcGFnZXIxIC5ieC1uZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICAgICAgICAgICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsIHRodW1iUykge1xuXG4gICAgICAgICAgICAgICAgJGooXCJ1bCNieC1wYWdlcjJcIikub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gJGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsIG5ld0luZGV4KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRodW1iUyA9ICRqKFwiI2J4LXBhZ2VyMlwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicgKyBuZXdJbmRleCArICdcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gbmV3SW5kZXggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSA0KTtcbiAgICAgICAgICAgICAgICB9XG5cblxuXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cblxuXG5cbiAgICAvLyBob21lIHNsaWRlclxuICAgIGlmICgkKFwiI2gtc2xpZGVyXCIpLmxlbmd0aCkge1xuICAgICAgICAkKCcjaC1zbGlkZXInKS5ieFNsaWRlcih7XG4gICAgICAgICAgICBzcGVlZDogMTIwMCxcbiAgICAgICAgICAgIHBhdXNlOiAzMDAwLFxuICAgICAgICAgICAgYXV0bzp0cnVlLFxuICAgICAgICAgICAgcGFnZXI6IHRydWUsXG4gICAgICAgICAgICAvLyBlYXNpbmc6ICdzd2luZycsXG4gICAgICAgICAgICAvLyBtb2RlOiAnZmFkZScsXG4gICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICBwcmV2VGV4dDogJycsXG4gICAgICAgICAgICBwcmV2U2VsZWN0b3I6ICgnLm5leHRlbmQtYXJyb3ctcHJldmlvdXMnKSxcbiAgICAgICAgICAgIG5leHRTZWxlY3RvcjogKCcubmV4dGVuZC1hcnJvdy1uZXh0JyksXG4gICAgICAgICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICAgICAgICBwYWdlckN1c3RvbTogdHJ1ZSxcbiAgICAgICAgICAgIG9uU2xpZGVyTG9hZDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLmhzLWNvbnRlbnRfX2ltZycpLmRlbGF5KDQwMCkuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdsZWZ0JzogJys9NDUwJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5ocy1jb250ZW50X19jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICc1OCUnLFxuICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLmhzLWNvbnRlbnRfX2NvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzUwJScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgICAgICQoJy5ocy1jb250ZW50X19idG4nKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLmJ0bi1zbGlkZScpLmRlbGF5KDEwMDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgLy8gfSwgMTIwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TbGlkZUFmdGVyOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpIHtcbiAgICAgICAgICAgICAgICAkKCcuaHMtY29udGVudF9faW1nJykuZGVsYXkoNDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnKz00NTAnLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCAxMjAwKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLmhzLWNvbnRlbnRfX2NvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzU4JScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKCcuaHMtY29udGVudF9fY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJy5ocy1jb250ZW50X19idG4nKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLmhzLWNvbnRlbnRfX2J0bicpLmRlbGF5KDEwMDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgLy8gfSwgMTIwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TbGlkZUJlZm9yZTogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkaW5nIGVsZW1lbnRzIGJlZm9yZSByZWJhc2VcbiAgICAgICAgICAgICAgICAkKCcuaHMtY29udGVudF9faW1nJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzAnXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgICQoJy5ocy1jb250ZW50X19jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuaHMtY29udGVudF9fYnRuJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMFxuICAgICAgICAgICAgICAgIH0sIDUwMCk7XG5cbiAgICAgICAgICAgICAgICAvLyBjaGFuZ2luZyBwYXJhbWV0ZXJzXG4gICAgICAgICAgICAgICAgJCgnLmhzLWNvbnRlbnRfX2ltZycpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICctPTQ1MCdcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAkKCcuaHMtY29udGVudF9fY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAndG9wJzogJzI1JSdcbiAgICAgICAgICAgICAgICB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuaHMtY29udGVudF9fYnRuJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAndG9wJzogJzY3JSdcbiAgICAgICAgICAgICAgICAvLyB9LCA1MCk7XG5cbiAgICAgICAgICAgICAgICAvLyAkKCcuaHMtY29udGVudF9fYnRuJykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgLy8gICAnb3BhY2l0eSc6IDBcbiAgICAgICAgICAgICAgICAvLyB9LCA1MDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIC8vIHNob3cgc2xpZGUgYXJyb3dzIHZpYSBob3ZlclxuXG5cblxuICAgICQoJy5oLXNsaWRlcicpLm1vdXNlZW50ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5ocy1jb250cm9scycpLmZhZGVJbigzMDApO1xuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnLm5leHRlbmQtYXJyb3cpLmZhZGUgSU47Jyk7XG4gICAgfSkubW91c2VsZWF2ZShmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmhzLWNvbnRyb2xzJykuZmFkZU91dCgzMDApO1xuXG4gICAgICAgIGNvbnNvbGUuaW5mbygnLm5leHRlbmQtYXJyb3cpLmZhZGUgT1VUOycpO1xuICAgIH0pO1xuXG5cbiAgICAvLyBFT0YgaG9tZSBzbGlkZXJcblxuICAgIC8vIEVPRiBieCBzbGlkZXJzXG5cblxuXG4gICAgLy8gZmFxLXBhZ2UgY29udGVudCBzbGlkZVxuICAgIGlmICgkKFwiLmZhcS1pdGVtLXRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAkKFwiLmZhcS1pdGVtLXRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLmpzUHJvZE1lbnVDb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICQoJy5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8gRU9GIGZhcS1wYWdlIGNvbnRlbnQgc2xpZGVcblxuXG5cbiAgICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgbWVudSB7dGFibGV0fVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgICAgaWYgKCQoXCIucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmpzQ29sdW1uVGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFT0YgZG9jdW1lbnRhdGlvbi1ncmlkIG1lbnVcblxuXG5cbiAgICAvLyBwcm9kdWN0LWdyaWQgbWVudSB7dGFibGV0fVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgICAgaWYgKCQoXCIucGFnZS1wcm9kdWN0LWdyaWQgLmpzQ29sdW1uVGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnBhZ2UtcHJvZHVjdC1ncmlkIC5qc0NvbHVtblRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFT0YgcHJvZHVjdC1ncmlkIG1lbnUge3RhYmxldH1cblxuXG4gICAgLy8gc29sdXRpb25zIG1lbnUge3RhYmxldH1cbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCAxMjAwKSB7XG4gICAgICAgIGlmICgkKFwiLnBhZ2Utc29sdXRpb25zIC5qc0NvbHVtblRpdGxlXCIpLmxlbmd0aCkge1xuICAgICAgICAgICAgJChcIi5wYWdlLXNvbHV0aW9ucyAuanNDb2x1bW5UaXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLnByb2R1Y3RzLW5hdi1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgICAgICAkKCcucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZS5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gRU9GIHNvbHV0aW9ucyBtZW51IHt0YWJsZXR9XG5cblxuXG4gIC8vIGJ1cmdlcjpcbiAgICAvLyBidXJnZXIgYW5pbWF0aW9uIGl0c2VsZjpcbiAgICAkKCdhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgfSk7XG5cbiAgICAkKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oMzAwKTtcblxuICAgICAgICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgfSk7XG5cblxuICAgIHNob3dNYWluTW9kYWwoKTtcblxuICAgIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKSB7XG4gICAgICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbigzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICBzaG93Q29udGVudE1vZGFsKCk7XG5cbiAgICBmdW5jdGlvbiBzaG93Q29udGVudE1vZGFsKCkge1xuICAgICAgICAkKCcuanMtcmVxQ2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbigzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1haW5Nb2RhbCgpO1xuXG4gICAgZnVuY3Rpb24gY2xvc2VNYWluTW9kYWwoKSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCgzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbk92ZXJsYXkoKTtcblxuICAgIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpIHtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrRm9ybVZhbHVlcygpO1xuXG4gICAgZnVuY3Rpb24gY2hlY2tGb3JtVmFsdWVzKCkge1xuICAgICAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgaWYgKCEoJCgnW25hbWU9bG9naW5dJykudmFsKCkpIHx8ICEoJCgnW25hbWU9cGhvbmVdJykudmFsKCkpKSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSkge1xuICAgICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cblxuICAgIC8vIGRyb3BEb3duIG1lbnVcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykubW91c2VlbnRlcihcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIC8vICQoJy5kcm9wZG93bicpLm1vdXNlbGVhdmUoXG4gICAgICAgICAgICAvLyAgICAgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyAgICAgICAgICQuZGF0YSh0aGlzLCAndGltZXInLCBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAvLyAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIC8vICAgICAgICAgfSwgdGhpcyksIDIwMCkpO1xuICAgICAgICAgICAgLy9cbiAgICAgICAgICAgIC8vICAgICB9XG4gICAgICAgICAgICAvLyApO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuICAgIC8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JfQsNC60LDQt9Cw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0sIC5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWZvcm0nKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gcHJvZHVjdC1kZXNjIHBhZ2VcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGPJztcbiAgICAgICAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XG4gICAgICAgICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG4gICAgLy8gZG9jdW1lbnRhdGlvbi1ncmlkIHRpdGxlXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC00LvRjyDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8nO1xuICAgICAgICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5wYWdlLXRpdGxlIGgxJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIGRvY3VtZW50YXRpb24tZ3JpZCB0aXRsZVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuY29sdW1uLWxlZnQgLmNvbHVtbi10aXRsZScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuY29sdW1uLWxlZnQgLmNvbHVtbi10aXRsZScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cblxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAgICAgICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAgICAgICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoc3RyaW5nKTtcbiAgICAgICAgICAgIH0pKCk7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuICAgIC8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4gICAgLy8gcGFyYWxsYXhcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnRcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIikgPiAwLFxuICAgICAgICAgICAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAvLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbiAgICAgICAgZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3IpIHtcbiAgICAgICAgICAgIGlmIChpc0lFKSB7XG4gICAgICAgICAgICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidHJ1ZSFcIik7XG4gICAgICAgICAgICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArICclKSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB3U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG4gICAgLy8gRU9GcGFyYWxsYXhcblxuXG5cbiAgICAvLyB0YWJzIG1vZHVsZSAocHJvZHVjdCBwYWdlKVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmpzLXRhYnMgbGlbZGF0YS1pZF0nKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuZmFkZUluKDApLnNpYmxpbmdzKCkuZmFkZU91dCgwKTtcbiAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG4gICAgfSkoKTtcblxuICAgIC8vIHRhYnMgZm9yIG1vYmlsZVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG5cbiAgICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGUnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5hZGRDbGFzcygnb3ZlcnRhYmJlZCcpO1xuICAgICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmFjdGl2ZScpLnJlbW92ZUNsYXNzKCdvdmVydGFiYmVkJykuY3NzKCd3aWR0aCcsICdhdXRvJyk7XG4gICAgICAgICAgICAgICAgdmFyIG5vbkFjdGl2ZVRhYnNDb21tb25XID0gJCgnI21lbnVfdGFicyAuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCkgLSAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgIHZhciBXNG5vbkFjdGl2ZVRhYiA9IG5vbkFjdGl2ZVRhYnNDb21tb25XIC8gMiAtIDE7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5vdXRlcldpZHRoKFc0bm9uQWN0aXZlVGFiKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6Zmlyc3QtY2hpbGQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLmFkZENsYXNzKCdvdmVydGFiYmVkJyk7XG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnb3ZlcnRhYmJlZCcpLmNzcygnd2lkdGgnLCAnYXV0bycpO1xuICAgICAgICAgICAgdmFyIG5vbkFjdGl2ZVRhYnNDb21tb25XID0gJCgnI21lbnVfdGFicyAuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCkgLSAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgdmFyIFc0bm9uQWN0aXZlVGFiID0gbm9uQWN0aXZlVGFic0NvbW1vblcgLyAyIC0gMTtcbiAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykub3V0ZXJXaWR0aChXNG5vbkFjdGl2ZVRhYik7XG5cbiAgICAgICAgfSkoalF1ZXJ5KTtcbiAgICB9XG4gICAgLy8gRU9GdGFicyBtb2R1bGVcblxuXG5cbiAgICAvLyBicmVhZGNydW1icyAnLi4uJ1xuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG4gICAgICAgICAgICB2YXIgY291bnQgPSAkKCcuYnJlYWRjcnVtYnMgbGknKS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAoY291bnQgPj0gMykge1xuICAgICAgICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpudGgtY2hpbGQobisyKTpub3QoOmxhc3QtY2hpbGQpIGEnKS5odG1sKCcuLi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkIGEnKS5hZGRDbGFzcygnb3ZlcmNydW1icycpO1xuICAgICAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjkxMTUxL2pxdWVyeS1jb3VudC1jaGlsZC1lbGVtZW50c1xuXG4gICAgICAgICAgICAvLyBjb3VudGluZyB3aWR0aCBmb3Igd2hvbGUgdnJlYWRjcnVtYnNcbiAgICAgICAgICAgIHZhciBwYXJlbnQgPSAkKCcuYnJlYWRjcnVtYnMnKS53aWR0aCgpO1xuICAgICAgICAgICAgdmFyIGxhc3QgPSAkKCcuYnJlYWRjcnVtYnMgbGk6bm90KDpsYXN0LWNoaWxkKScpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICAgICAgdmFyIHcgPSAwO1xuXG4gICAgICAgICAgICBqUXVlcnkoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkJykuZWFjaChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBqUXVlcnkodGhpcykucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgIHcgKz0gJCh0aGlzKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh3KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdmFyIG5ld1dpZHRoRm9yTGFzdEVsID0gcGFyZW50IC0gdyAtIDEwO1xuXG4gICAgICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCcpLndpZHRoKG5ld1dpZHRoRm9yTGFzdEVsKTtcblxuICAgICAgICB9KShqUXVlcnkpO1xuICAgIH1cbiAgICAvLyBFT0YgYnJlYWRjcnVtYnMgJy4uLidcblxuXG5cbiAgICAvLyBmb3JtIHZhbGlkYXRpb25cbiAgICAkKCcuY2FsbGJhY2snKS5zdWJtaXQoZnVuY3Rpb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHZhciBuYW1lID0gJCgnLmNhbGxiYWNrIFtuYW1lPWxvZ2luXScpLFxuICAgICAgICAgICAgcGhvbmUgPSAkKCcuY2FsbGJhY2sgW25hbWU9cGhvbmVdJyksXG4gICAgICAgICAgICBlbWFpbCA9ICQoJy5jYWxsYmFjayBbbmFtZT1lbWFpbF0nKTtcblxuICAgICAgICBpZiAobmFtZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIG5hbWUucGFyZW50cygnLnVzZXItZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbGlkYXRlRW1haWwoZW1haWwudmFsKCkpKSB7XG4gICAgICAgICAgICBlbWFpbC5wYXJlbnRzKCcucGhvbmUtZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwaG9uZS52YWwoKSA9PT0gJycpIHtcbiAgICAgICAgICAgIHBob25lLnBhcmVudHMoJy5lbWFpbC1maWVsZCcpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG5cbiAgICAgICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgICAgIHJldHVybiByZS50ZXN0KGVtYWlsKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gXCJpbnN0YW50XCItY2hlY2tcbiAgICAkKCcuY2FsbGJhY2sgaW5wdXRbdHlwZT1cImVtYWlsXCJdJykuYmx1cihmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKCQodGhpcykudmFsKCkpKSB7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdlcnJvcicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnZXJyb3InKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gdmFsaWRhdGVFbWFpbChlbWFpbCkge1xuICAgICAgICB2YXIgcmUgPSAvXigoW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSsoXFwuW148PigpW1xcXVxcXFwuLDs6XFxzQFwiXSspKil8KFwiLitcIikpQCgoXFxbWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfV0pfCgoW2EtekEtWlxcLTAtOV0rXFwuKStbYS16QS1aXXsyLH0pKSQvO1xuICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgfVxuICAgIC8vIEVPRiBmb3JtIHZhbGlkYXRpb25cblxuXG4gICAgLy8gbWFnaWMgem9vbSBwcmVmZXJlbmNlc1xuXG4gICAgLy8gdmFyIG16T3B0aW9ucyA9IHtcbiAgICAvLyAgIHpvb21XaWR0aDogXCIyMDAlXCIsXG4gICAgLy8gICB6b29tSGVpZ2h0OiBcIjIwMCVcIixcbiAgICAvLyAgIHpvb21EaXN0YW5jZTogMjUsXG4gICAgLy8gICBoaW50OiBcIm9mZlwiXG4gICAgLy8gfTtcblxuICAgIC8vIGVvZiBtYWdpYyB6b29tIHByZWZlcmVuY2VzXG4gICAgLy8gJChcIiN6b29tXzAxXCIpLmVsZXZhdGVab29tKCk7XG4gICAgJChcIiN6b29tXzAxXCIpLmVsZXZhdGVab29tKHt6b29tV2luZG93SGVpZ2h0OiAyMDAsIHpvb21XaW5kb3dXaWR0aDoyMDAsIGJvcmRlclNpemU6IDAsIGVhc2luZzp0cnVlfSk7XG4gICAgJChcIiN6b29tXzAyXCIpLmVsZXZhdGVab29tKHt6b29tV2luZG93SGVpZ2h0OiAyMDAsIHpvb21XaW5kb3dXaWR0aDoyMDAsIGJvcmRlclNpemU6IDAsIGVhc2luZzp0cnVlfSk7XG4gICAgJChcIiN6b29tXzAzXCIpLmVsZXZhdGVab29tKHt6b29tV2luZG93SGVpZ2h0OiAyMDAsIHpvb21XaW5kb3dXaWR0aDoyMDAsIGJvcmRlclNpemU6IDAsIGVhc2luZzp0cnVlfSk7XG4gICAgJChcIiN6b29tXzA0XCIpLmVsZXZhdGVab29tKHt6b29tV2luZG93SGVpZ2h0OiAyMDAsIHpvb21XaW5kb3dXaWR0aDoyMDAsIGJvcmRlclNpemU6IDAsIGVhc2luZzp0cnVlfSk7XG5cblxufSk7IC8vIEVPRiBkb2N1bWVudC5yZWFkeSBNQUlOXG4iXX0=
