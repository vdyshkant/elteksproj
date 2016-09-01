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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L3NyYy9qcy9mYWtlXzI2OGVjMDY3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvKmVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzKi9cblxuLy8gdGhlIGVudHJ5IHBvaW50IGZvciBicm93c2VyaWZ5XG4vLyB2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcbi8vXG4vLyBsb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcHJrcyEgQW1kIGl0IGNoYW5nZWQgYXMgd2VsbC4gOiknKTtcblwidXNlIHN0cmljdFwiO1xuXG5cbmpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oJCkge1xuXG5cblxuICAgIC8vIHN1Yi1oZWFkZXIgc2VhcmNoIGZpZWxkXG4gICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgaWYgKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pKGpRdWVyeSk7XG4gICAgLy8gc3ViLWhlYWRlciBzZWFyY2ggZmllbGRcblxuXG5cbiAgICAvLyBpbmRleCByaXNpbmcgY291bnRlciAoNCBibG9ja3MpXG4gICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJyNzdGF0cycpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICAgICAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93ICsgNjUwKSB7XG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCkge1xuICAgICAgICAgICAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICAgICAgICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgICAgICAgICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgICAgICAgICAgICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgICAgICAgICAgICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSkoalF1ZXJ5KTtcbiAgICAvLyBFT0YgaW5kZXggcmlzaW5nIGNvdW50ZXIgKDQgYmxvY2tzKVxuXG5cblxuICAgIC8vIHByb2R1Y3RzIGl0ZW0gaG92ZXJcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICB9LCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy8gRU9GIHByb2R1Y3RzIGl0ZW0gaG92ZXJcblxuXG5cbiAgICAvLyBwYWdpbmF0aW9uXG4gICAgaWYgKCQoJy5wYWdpbmF0aW9uJykubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgICAgICAgICAgIGluZGV4ID0gTWF0aC5taW4oTWF0aC5tYXgoaW5kZXggKyBvZmZzZXQsIDApLCB0b3RhbCAtIDEpO1xuXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNudHInKS5pbm5lckhUTUwgPSAoaW5kZXggKyAxKSArICcgLyAnICsgdG90YWw7XG5cbiAgICAgICAgICAgICAgICBwci5zZXRBdHRyaWJ1dGUoJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyk7XG4gICAgICAgICAgICAgICAgcGwuc2V0QXR0cmlidXRlKCdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wYWdpbmF0ZS5sZWZ0Jyk7XG4gICAgICAgICAgICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucGFnaW5hdGUucmlnaHQnKTtcblxuICAgICAgICAgICAgaWYgKHByICYmIHBsKSB7XG5cbiAgICAgICAgICAgICAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCh0aGlzLCAtMSk7XG4gICAgICAgICAgICAgICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQodGhpcywgMSk7XG5cbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAwLFxuICAgICAgICAgICAgICAgICAgICB0b3RhbCA9IDU7XG5cblxuICAgICAgICAgICAgICAgIHNsaWRlKDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cbiAgICAvLyBFT0YgcGFnaW5hdGlvblxuXG5cblxuICAgIC8vIG5ldyBicmFuZCBzbGlkZXJcbiAgICBpZiAoJChcInVsI3NsaWRlcjFcIikubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiAgICAgICAgICAgIHZhciByZWFsU2xpZGVyID0gJGooXCJ1bCNzbGlkZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgICAgICAvLyAgICBjaGFuZ2VSZWFsVGh1bWIocmVhbFRodW1iU2xpZGVyLG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICAvL1xuICAgICAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIHZhciByZWFsVGh1bWJTbGlkZXIgPSAkaihcInVsI2J4LXBhZ2VyMVwiKS5ieFNsaWRlcih7XG4gICAgICAgICAgICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgICAgICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICAgICAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICAgICAgICAgICBzbGlkZU1hcmdpbjogMzAsXG4gICAgICAgICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgICAgICAgICBwYWdlcjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3BlZWQ6IDMwMCxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZUxvb3A6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6IHRydWUsXG4gICAgICAgICAgICAgICAgbmV4dFRleHQ6ICc8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAgICAgICAgICBwcmV2VGV4dDogJzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgICAgICAgICAgcHJldlNlbGVjdG9yOiAoJy5zbGlkZXItcHJldicpLFxuICAgICAgICAgICAgICAgIG5leHRTZWxlY3RvcjogKCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICAgICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgICAgICAgIC8qJGooXCIjc2xpZGVyVGh1bWJSZWFsIHVsIC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgICAgICAgICAgIC8vICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIsIHJlYWxUaHVtYlNsaWRlcik7XG5cbiAgICAgICAgICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgICAgICAgICAgLy8gICAgJGooXCIjYngtcGFnZXIxIC5ieC1uZXh0XCIpLmhpZGUoKTtcbiAgICAgICAgICAgIC8vICB9XG5cbiAgICAgICAgICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICAgICAgICAgICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsIHRodW1iUykge1xuXG4gICAgICAgICAgICAgICAgJGooXCJ1bCNieC1wYWdlcjFcIikub24oXCJjbGlja1wiLCBcImFcIiwgZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG5ld0luZGV4ID0gJGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICAgICAgICAgIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsIG5ld0luZGV4KSB7XG5cbiAgICAgICAgICAgICAgICB2YXIgJHRodW1iUyA9ICRqKFwiI2J4LXBhZ2VyMVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicgKyBuZXdJbmRleCArICdcIl0nKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcblxuICAgICAgICAgICAgICAgIGlmIChzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gbmV3SW5kZXggPj0gNCkge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCkgLSA0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pKCk7XG4gICAgfVxuXG5cbiAgICAvLyBzbGlkZXIgIzJcbiAgICBpZiAoJChcInVsI3NsaWRlcjJcIikubGVuZ3RoKSB7XG4gICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiAgICAgICAgICAgIHZhciByZWFsU2xpZGVyID0gJGooXCJ1bCNzbGlkZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJycsXG4gICAgICAgICAgICAgICAgcHJldlRleHQ6ICcnLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy8gaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjb250cm9sczogZmFsc2VcblxuICAgICAgICAgICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAgICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgIC8vXG4gICAgICAgICAgICAgICAgLy8gIH1cblxuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgdmFyIHJlYWxUaHVtYlNsaWRlciA9ICRqKFwidWwjYngtcGFnZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgICAgICAgICAgbWF4U2xpZGVzOiAzLFxuICAgICAgICAgICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgICAgICAgICAgIHNsaWRlTWFyZ2luOiAyOSxcbiAgICAgICAgICAgICAgICBtb3ZlU2xpZGVzOiAxLFxuICAgICAgICAgICAgICAgIHBhZ2VyOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzcGVlZDogMzAwLFxuICAgICAgICAgICAgICAgIGluZmluaXRlTG9vcDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBuZXh0VGV4dDogJzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgICAgICAgICAgIHByZXZUZXh0OiAnPHNwYW4+PC9zcGFuPicsXG5cbiAgICAgICAgICAgICAgICBwcmV2U2VsZWN0b3I6ICgnLnNsaWRlci1wcmV2JyksXG4gICAgICAgICAgICAgICAgbmV4dFNlbGVjdG9yOiAoJy5zbGlkZXItbmV4dCcpLFxuICAgICAgICAgICAgICAgIG9uU2xpZGVCZWZvcmU6IGZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCkge1xuICAgICAgICAgICAgICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICAgICAkc2xpZGVFbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpOyAqL1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGxpbmtSZWFsU2xpZGVycyhyZWFsU2xpZGVyLCByZWFsVGh1bWJTbGlkZXIpO1xuXG4gICAgICAgICAgICAvLyAgaWYoJGooXCIjYngtcGFnZXIxIGxpXCIpLmxlbmd0aDw1KXtcbiAgICAgICAgICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgICAgICAgICAvLyAgfVxuXG4gICAgICAgICAgICAvLyBzaW5jcm9uaXp6YSBzbGlkZXJzIHJlYWxpenphemlvbmlcbiAgICAgICAgICAgIGZ1bmN0aW9uIGxpbmtSZWFsU2xpZGVycyhiaWdTLCB0aHVtYlMpIHtcblxuICAgICAgICAgICAgICAgICRqKFwidWwjYngtcGFnZXIyXCIpLm9uKFwiY2xpY2tcIiwgXCJhXCIsIGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgICAgIHZhciBuZXdJbmRleCA9ICRqKHRoaXMpLnBhcmVudCgpLmF0dHIoXCJkYXRhLXNsaWRlSW5kZXhcIik7XG4gICAgICAgICAgICAgICAgICAgIGJpZ1MuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy9zbGlkZXIhPSR0aHVtYlNsaWRlci4gc2xpZGVyIGlzIHRoZSByZWFsc2xpZGVyXG4gICAgICAgICAgICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLCBuZXdJbmRleCkge1xuXG4gICAgICAgICAgICAgICAgdmFyICR0aHVtYlMgPSAkaihcIiNieC1wYWdlcjJcIik7XG4gICAgICAgICAgICAgICAgJHRodW1iUy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJHRodW1iUy5maW5kKCdsaVtkYXRhLXNsaWRlSW5kZXg9XCInICsgbmV3SW5kZXggKyAnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgICAgICAgICAgICBpZiAoc2xpZGVyLmdldFNsaWRlQ291bnQoKSAtIG5ld0luZGV4ID49IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc2xpZGVyLmdvVG9TbGlkZShzbGlkZXIuZ2V0U2xpZGVDb3VudCgpIC0gNCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cblxuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuICAgIH1cblxuXG4gICAgLy8gaG9tZSBzbGlkZXJcbiAgICBpZiAoJChcIiNzbGlkZXItaG9tZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgJCgnI3NsaWRlci1ob21lJykuYnhTbGlkZXIoe1xuICAgICAgICAgICAgc3BlZWQ6IDEwMDAsXG4gICAgICAgICAgICAvLyBwYXVzZToyMDAsXG4gICAgICAgICAgICAvLyBhdXRvOnRydWUsXG4gICAgICAgICAgICBwYWdlcjogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGVhc2luZzogJ3N3aW5nJyxcbiAgICAgICAgICAgIG1vZGU6ICdmYWRlJyxcbiAgICAgICAgICAgIG5leHRUZXh0OiAnJyxcbiAgICAgICAgICAgIHByZXZUZXh0OiAnJyxcbiAgICAgICAgICAgIHByZXZTZWxlY3RvcjogKCcubmV4dGVuZC1hcnJvdy1wcmV2aW91cycpLFxuICAgICAgICAgICAgbmV4dFNlbGVjdG9yOiAoJy5uZXh0ZW5kLWFycm93LW5leHQnKSxcbiAgICAgICAgICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAgICAgICAgIHBhZ2VyQ3VzdG9tOiB0cnVlLFxuICAgICAgICAgICAgb25TbGlkZXJMb2FkOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAkKCcuaW1nLWl0ZW0nKS5kZWxheSg0MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnbGVmdCc6ICcrPTQ1MCcsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuXG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAnNTglJyxcbiAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICAgICAgICAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICc1MCUnLFxuICAgICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgICAgfSwgMTIwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgICAgICAkKCcuc2xpZGUtYnRuLW91dGVyJykuZGVsYXkoOTAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgfSwgODAwKTtcblxuICAgICAgICAgICAgICAgIC8vICQoJy5idG4tc2xpZGUnKS5kZWxheSgxMDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAvLyAgICdvcGFjaXR5JzogMVxuICAgICAgICAgICAgICAgIC8vIH0sIDEyMDApO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIG9uU2xpZGVBZnRlcjogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgJCgnLmltZy1pdGVtJykuZGVsYXkoNDAwKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnKz00NTAnLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCAxMjAwKTtcblxuICAgICAgICAgICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAndG9wJzogJzU4JScsXG4gICAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgICB9LCAxMjAwKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICAgICAgICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICd0b3AnOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICAgIH0sIDEyMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgICAgICAgICAgICB9LCA4MDApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmRlbGF5KDEwMDApLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAgICAgICAgICAgLy8gfSwgMTIwMCk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb25TbGlkZUJlZm9yZTogZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KSB7XG4gICAgICAgICAgICAgICAgLy8gaGlkaW5nIGVsZW1lbnRzIGJlZm9yZSByZWJhc2VcbiAgICAgICAgICAgICAgICAkKCcuaW1nLWl0ZW0nKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMCdcbiAgICAgICAgICAgICAgICB9LCA1MDApO1xuXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICAgICAgICAgICAgfSwgNTAwKTtcblxuICAgICAgICAgICAgICAgIC8vIGNoYW5naW5nIHBhcmFtZXRlcnNcbiAgICAgICAgICAgICAgICAkKCcuaW1nLWl0ZW0nKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ2xlZnQnOiAnLT00NTAnXG4gICAgICAgICAgICAgICAgfSwgNTApO1xuXG4gICAgICAgICAgICAgICAgJCgnLnNsaWRlLWNvbnRlbnQnKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RvcCc6ICcyNSUnXG4gICAgICAgICAgICAgICAgfSwgNTApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ3RvcCc6ICc2NyUnXG4gICAgICAgICAgICAgICAgLy8gfSwgNTApO1xuXG4gICAgICAgICAgICAgICAgLy8gJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgIC8vICAgJ29wYWNpdHknOiAwXG4gICAgICAgICAgICAgICAgLy8gfSwgNTAwKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG5cbiAgICAvLyBzaG93IHNsaWRlIGFycm93cyB2aWEgaG92ZXJcbiAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAkKCcuaG9tZS1zbGlkZXInKS5ob3ZlcihmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG4gICAgICAgICAgICAkKCcubmV4dGVuZC1hcnJvdycpLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZVRvZ2dsZSgzMDApO1xuICAgICAgICB9KTtcbiAgICB9KShqUXVlcnkpO1xuICAgIC8vIEVPRiBob21lIHNsaWRlclxuXG4gICAgLy8gRU9GIGJ4IHNsaWRlcnNcblxuXG5cbiAgICAvLyBmYXEtcGFnZSBjb250ZW50IHNsaWRlXG4gICAgaWYgKCQoXCIuZmFxLWl0ZW0tdGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICQoXCIuZmFxLWl0ZW0tdGl0bGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxLWl0ZW0tY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51JykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcuanNQcm9kTWVudUNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBFT0YgZmFxLXBhZ2UgY29udGVudCBzbGlkZVxuXG5cblxuICAgIC8vIGRvY3VtZW50YXRpb24tZ3JpZCBtZW51IHt0YWJsZXR9XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICBpZiAoJChcIi5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuanNDb2x1bW5UaXRsZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmpzQ29sdW1uVGl0bGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5wcm9kdWN0cy1uYXYtY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVPRiBkb2N1bWVudGF0aW9uLWdyaWQgbWVudVxuXG5cblxuICAgIC8vIHByb2R1Y3QtZ3JpZCBtZW51IHt0YWJsZXR9XG4gICAgaWYgKCQod2luZG93KS53aWR0aCgpIDwgMTIwMCkge1xuICAgICAgICBpZiAoJChcIi5wYWdlLXByb2R1Y3QtZ3JpZCAuanNDb2x1bW5UaXRsZVwiKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICQoXCIucGFnZS1wcm9kdWN0LWdyaWQgLmpzQ29sdW1uVGl0bGVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5wcm9kdWN0cy1uYXYtY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIEVPRiBwcm9kdWN0LWdyaWQgbWVudSB7dGFibGV0fVxuXG5cbiAgICAvLyBzb2x1dGlvbnMgbWVudSB7dGFibGV0fVxuICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDEyMDApIHtcbiAgICAgICAgaWYgKCQoXCIucGFnZS1zb2x1dGlvbnMgLmpzQ29sdW1uVGl0bGVcIikubGVuZ3RoKSB7XG4gICAgICAgICAgICAkKFwiLnBhZ2Utc29sdXRpb25zIC5qc0NvbHVtblRpdGxlXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBFT0Ygc29sdXRpb25zIG1lbnUge3RhYmxldH1cblxuXG5cbiAgLy8gYnVyZ2VyOlxuICAgIC8vIGJ1cmdlciBhbmltYXRpb24gaXRzZWxmOlxuICAgICQoJ2EuYnVyZ2VyLW1lbnUsIC5tZW51LW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICB9KTtcblxuICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbigzMDApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbigzMDApO1xuXG4gICAgICAgIC8vIGhpZGUgbWVudSB0b2dnbGUgYW5kIGNvbnZlcnQgdG8gYnVyZ2VyXG4gICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICB9KTtcblxuXG4gICAgc2hvd01haW5Nb2RhbCgpO1xuXG4gICAgZnVuY3Rpb24gc2hvd01haW5Nb2RhbCgpIHtcbiAgICAgICAgJCgnLnJlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbigzMDApO1xuICAgICAgICB9KTtcbiAgICB9XG5cblxuICAgIHNob3dDb250ZW50TW9kYWwoKTtcblxuICAgIGZ1bmN0aW9uIHNob3dDb250ZW50TW9kYWwoKSB7XG4gICAgICAgICQoJy5qcy1yZXFDYWxsYmFjaycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTWFpbk1vZGFsKCk7XG5cbiAgICBmdW5jdGlvbiBjbG9zZU1haW5Nb2RhbCgpIHtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVNYWluT3ZlcmxheSgpO1xuXG4gICAgZnVuY3Rpb24gaGlkZU1haW5PdmVybGF5KCkge1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KDMwMCk7XG4gICAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JtVmFsdWVzKCk7XG5cbiAgICBmdW5jdGlvbiBjaGVja0Zvcm1WYWx1ZXMoKSB7XG4gICAgICAgICQoJy5jYWxsYmFjay1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKSB7XG4gICAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoMzAwKTtcbiAgICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCgzMDApO1xuICAgICAgICAgICAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuXG4gICAgLy8gZHJvcERvd24gbWVudVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAgICAgICAkKCcuZHJvcGRvd24nKS5tb3VzZWVudGVyKFxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcblxuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgJCgnLmRyb3Bkb3duJykubW91c2VsZWF2ZShcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgJC5kYXRhKHRoaXMsICd0aW1lcicsIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgdGhpcyksIDIwMCkpO1xuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gICAgLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG5cbiAgICAvLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICAgICAgICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dChzdHJpbmcpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4gICAgICAgICAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dChzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQl9Cw0LrQsNC30LDRgtGMINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5idG4tZm9ybSwgLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZm9ybScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIHByb2R1Y3QtZGVzYyBwYWdlXG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CR0LXRgdC/0LvQsNGC0L3QsNGPINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjyc7XG4gICAgICAgICAgICAkKCcucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1kZXNjJykudGV4dChzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQl9Cw0LrQsNC30LDRgtGMINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1kZXNjJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuXG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgICAgICAgIHZhciBzdHJpbmcgPSAn0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y4nO1xuICAgICAgICAgICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dChzdHJpbmcpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgICAgICAgICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dChvcmlnaW4pO1xuICAgICAgICB9XG4gICAgfSkoKTtcblxuICAgIC8vIGRvY3VtZW50YXRpb24tZ3JpZCB0aXRsZVxuICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9CU0L7QutGD0LzQtdC90YLQsNGG0LjRjyc7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLnBhZ2UtdGl0bGUgaDEnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9CU0L7QutGD0LzQtdC90YLQsNGG0LjRjyDQtNC70Y8g0L7QsdC+0YDRg9C00L7QstCw0L3QuNGPJztcbiAgICAgICAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQob3JpZ2luKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG5cbiAgICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgdGl0bGVcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICAgICAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmNvbHVtbi1sZWZ0IC5jb2x1bW4tdGl0bGUnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgb3JpZ2luID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XG4gICAgICAgICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmNvbHVtbi1sZWZ0IC5jb2x1bW4tdGl0bGUnKS50ZXh0KG9yaWdpbik7XG4gICAgICAgIH1cbiAgICB9KSgpO1xuXG5cbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgLy9BZGQgeW91ciBqYXZhc2NyaXB0IGZvciBsYXJnZSBzY3JlZW5zIGhlcmVcbiAgICAgICAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KHN0cmluZyk7XG4gICAgICAgICAgICB9KSgpO1xuICAgICAgICB9XG4gICAgfSkoKTtcbiAgICAvLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cblxuICAgIC8vIHBhcmFsbGF4XG4gICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgICAgICAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgLy8gcGFyYWxsYXggZWZmZWN0IGZ1bmN0aW9uXG4gICAgICAgIGZ1bmN0aW9uIHBhcmFsbGF4KHBybHhCZywgcHJseENvbnRhaW5lciwgZmFjdG9yKSB7XG4gICAgICAgICAgICBpZiAoaXNJRSkge1xuICAgICAgICAgICAgICAgICQocHJseEJnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoKHdTY3JvbGwgKyAkKHdpbmRvdykuaGVpZ2h0KCkpID49ICQocHJseEJnKS5vZmZzZXQoKS50b3ApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRydWUhXCIpO1xuICAgICAgICAgICAgICAgICQocHJseEJnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoJyArICgoJChwcmx4Q29udGFpbmVyKS5vZmZzZXQoKS50b3AgLSB3U2Nyb2xsKSAvICQod2luZG93KS5oZWlnaHQoKSAqIDEwMCkgKiBmYWN0b3IgKyAnJSknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgICAgICAgIGlmICgkKCcucGFyYWxsYXgtaW5kZXgnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgcGFyYWxsYXgoJy5ib3R0b20tbGluZScsICcucGFyYWxsYXgtaW5kZXgnLCAwLjYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KSgpO1xuICAgIC8vIEVPRnBhcmFsbGF4XG5cblxuXG4gICAgLy8gdGFicyBtb2R1bGUgKHByb2R1Y3QgcGFnZSlcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICQoJy5qcy10YWJzIGxpW2RhdGEtaWRdJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBpZiAoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpLmZhZGVJbigwKS5zaWJsaW5ncygpLmZhZGVPdXQoMCk7XG4gICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH0pO1xuICAgIH0pKCk7XG5cbiAgICAvLyB0YWJzIGZvciBtb2JpbGVcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgICAgIC8vIFlvdSBwYXNzLWluIGpRdWVyeSBhbmQgdGhlbiBhbGlhcyBpdCB3aXRoIHRoZSAkLXNpZ25cbiAgICAgICAgICAgIC8vIFNvIHlvdXIgaW50ZXJuYWwgY29kZSBkb2Vzbid0IGNoYW5nZVxuXG4gICAgICAgICAgICAkKCcuZGVzYy1mdWxsLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykuYWRkQ2xhc3MoJ292ZXJ0YWJiZWQnKTtcbiAgICAgICAgICAgICAgICAkKCcjbWVudV90YWJzIC5hY3RpdmUnKS5yZW1vdmVDbGFzcygnb3ZlcnRhYmJlZCcpLmNzcygnd2lkdGgnLCAnYXV0bycpO1xuICAgICAgICAgICAgICAgIHZhciBub25BY3RpdmVUYWJzQ29tbW9uVyA9ICQoJyNtZW51X3RhYnMgLmRlc2MtbmF2Lm1vZHVsZS1oZWFkZXInKS53aWR0aCgpIC0gJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZScpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgICAgICB2YXIgVzRub25BY3RpdmVUYWIgPSBub25BY3RpdmVUYWJzQ29tbW9uVyAvIDIgLSAxO1xuICAgICAgICAgICAgICAgICQoJyNtZW51X3RhYnMgLmRlc2MtZnVsbC10aXRsZTpub3QoLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUpJykub3V0ZXJXaWR0aChXNG5vbkFjdGl2ZVRhYik7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOmZpcnN0LWNoaWxkJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlOm5vdCguZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZSknKS5hZGRDbGFzcygnb3ZlcnRhYmJlZCcpO1xuICAgICAgICAgICAgJCgnI21lbnVfdGFicyAuYWN0aXZlJykucmVtb3ZlQ2xhc3MoJ292ZXJ0YWJiZWQnKS5jc3MoJ3dpZHRoJywgJ2F1dG8nKTtcbiAgICAgICAgICAgIHZhciBub25BY3RpdmVUYWJzQ29tbW9uVyA9ICQoJyNtZW51X3RhYnMgLmRlc2MtbmF2Lm1vZHVsZS1oZWFkZXInKS53aWR0aCgpIC0gJCgnI21lbnVfdGFicyAuZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZScpLm91dGVyV2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBXNG5vbkFjdGl2ZVRhYiA9IG5vbkFjdGl2ZVRhYnNDb21tb25XIC8gMiAtIDE7XG4gICAgICAgICAgICAkKCcjbWVudV90YWJzIC5kZXNjLWZ1bGwtdGl0bGU6bm90KC5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlKScpLm91dGVyV2lkdGgoVzRub25BY3RpdmVUYWIpO1xuXG4gICAgICAgIH0pKGpRdWVyeSk7XG4gICAgfVxuICAgIC8vIEVPRnRhYnMgbW9kdWxlXG5cblxuXG4gICAgLy8gYnJlYWRjcnVtYnMgJy4uLidcbiAgICBpZiAoJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgICAgIC8vIFlvdSBwYXNzLWluIGpRdWVyeSBhbmQgdGhlbiBhbGlhcyBpdCB3aXRoIHRoZSAkLXNpZ25cbiAgICAgICAgICAgIC8vIFNvIHlvdXIgaW50ZXJuYWwgY29kZSBkb2Vzbid0IGNoYW5nZVxuICAgICAgICAgICAgdmFyIGNvdW50ID0gJCgnLmJyZWFkY3J1bWJzIGxpJykubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKGNvdW50ID49IDMpIHtcbiAgICAgICAgICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bnRoLWNoaWxkKG4rMik6bm90KDpsYXN0LWNoaWxkKSBhJykuaHRtbCgnLi4uJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCBhJykuYWRkQ2xhc3MoJ292ZXJjcnVtYnMnKTtcbiAgICAgICAgICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNDI5MTE1MS9qcXVlcnktY291bnQtY2hpbGQtZWxlbWVudHNcblxuICAgICAgICAgICAgLy8gY291bnRpbmcgd2lkdGggZm9yIHdob2xlIHZyZWFkY3J1bWJzXG4gICAgICAgICAgICB2YXIgcGFyZW50ID0gJCgnLmJyZWFkY3J1bWJzJykud2lkdGgoKTtcbiAgICAgICAgICAgIHZhciBsYXN0ID0gJCgnLmJyZWFkY3J1bWJzIGxpOm5vdCg6bGFzdC1jaGlsZCknKS5vdXRlcldpZHRoKCk7XG5cbiAgICAgICAgICAgIHZhciB3ID0gMDtcblxuICAgICAgICAgICAgalF1ZXJ5KCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCcpLmVhY2goZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgalF1ZXJ5KHRoaXMpLnByZXZBbGwoKS5lYWNoKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICB3ICs9ICQodGhpcykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHZhciBuZXdXaWR0aEZvckxhc3RFbCA9IHBhcmVudCAtIHcgLSAxMDtcblxuICAgICAgICAgICAgJCgnLmJyZWFkY3J1bWJzIGxpOmxhc3QtY2hpbGQnKS53aWR0aChuZXdXaWR0aEZvckxhc3RFbCk7XG5cbiAgICAgICAgfSkoalF1ZXJ5KTtcbiAgICB9XG4gICAgLy8gRU9GIGJyZWFkY3J1bWJzICcuLi4nXG5cblxuXG4gICAgLy8gZm9ybSB2YWxpZGF0aW9uXG4gICAgJCgnLmNhbGxiYWNrJykuc3VibWl0KGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB2YXIgbmFtZSA9ICQoJy5jYWxsYmFjayBbbmFtZT1sb2dpbl0nKSxcbiAgICAgICAgICAgIHBob25lID0gJCgnLmNhbGxiYWNrIFtuYW1lPXBob25lXScpLFxuICAgICAgICAgICAgZW1haWwgPSAkKCcuY2FsbGJhY2sgW25hbWU9ZW1haWxdJyk7XG5cbiAgICAgICAgaWYgKG5hbWUudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBuYW1lLnBhcmVudHMoJy51c2VyLWZpZWxkJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZGF0ZUVtYWlsKGVtYWlsLnZhbCgpKSkge1xuICAgICAgICAgICAgZW1haWwucGFyZW50cygnLnBob25lLWZpZWxkJykuYWRkQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocGhvbmUudmFsKCkgPT09ICcnKSB7XG4gICAgICAgICAgICBwaG9uZS5wYXJlbnRzKCcuZW1haWwtZmllbGQnKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuXG4gICAgICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICAgICAgICAgIHZhciByZSA9IC9eKChbXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClbXFxdXFxcXC4sOzpcXHNAXCJdKykqKXwoXCIuK1wiKSlAKChcXFtbMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31cXC5bMC05XXsxLDN9XSl8KChbYS16QS1aXFwtMC05XStcXC4pK1thLXpBLVpdezIsfSkpJC87XG4gICAgICAgICAgICByZXR1cm4gcmUudGVzdChlbWFpbCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIFwiaW5zdGFudFwiLWNoZWNrXG4gICAgJCgnLmNhbGxiYWNrIGlucHV0W3R5cGU9XCJlbWFpbFwiXScpLmJsdXIoZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmICghdmFsaWRhdGVFbWFpbCgkKHRoaXMpLnZhbCgpKSkge1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnZXJyb3InKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIHZhbGlkYXRlRW1haWwoZW1haWwpIHtcbiAgICAgICAgdmFyIHJlID0gL14oKFtePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKFxcLltePD4oKVtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLztcbiAgICAgICAgcmV0dXJuIHJlLnRlc3QoZW1haWwpO1xuICAgIH1cbiAgICAvLyBFT0YgZm9ybSB2YWxpZGF0aW9uXG5cblxuICAgIC8vIG1hZ2ljIHpvb20gcHJlZmVyZW5jZXNcblxuICAgIC8vIHZhciBtek9wdGlvbnMgPSB7XG4gICAgLy8gICB6b29tV2lkdGg6IFwiMjAwJVwiLFxuICAgIC8vICAgem9vbUhlaWdodDogXCIyMDAlXCIsXG4gICAgLy8gICB6b29tRGlzdGFuY2U6IDI1LFxuICAgIC8vICAgaGludDogXCJvZmZcIlxuICAgIC8vIH07XG5cbiAgICAvLyBlb2YgbWFnaWMgem9vbSBwcmVmZXJlbmNlc1xuICAgIC8vICQoXCIjem9vbV8wMVwiKS5lbGV2YXRlWm9vbSgpO1xuICAgICQoXCIjem9vbV8wMVwiKS5lbGV2YXRlWm9vbSh7em9vbVdpbmRvd0hlaWdodDogMjAwLCB6b29tV2luZG93V2lkdGg6MjAwLCBib3JkZXJTaXplOiAwLCBlYXNpbmc6dHJ1ZX0pO1xuICAgICQoXCIjem9vbV8wMlwiKS5lbGV2YXRlWm9vbSh7em9vbVdpbmRvd0hlaWdodDogMjAwLCB6b29tV2luZG93V2lkdGg6MjAwLCBib3JkZXJTaXplOiAwLCBlYXNpbmc6dHJ1ZX0pO1xuICAgICQoXCIjem9vbV8wM1wiKS5lbGV2YXRlWm9vbSh7em9vbVdpbmRvd0hlaWdodDogMjAwLCB6b29tV2luZG93V2lkdGg6MjAwLCBib3JkZXJTaXplOiAwLCBlYXNpbmc6dHJ1ZX0pO1xuICAgICQoXCIjem9vbV8wNFwiKS5lbGV2YXRlWm9vbSh7em9vbVdpbmRvd0hlaWdodDogMjAwLCB6b29tV2luZG93V2lkdGg6MjAwLCBib3JkZXJTaXplOiAwLCBlYXNpbmc6dHJ1ZX0pO1xuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
