(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
/*eslint-disable no-unused-vars*/

// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');
"use strict";

// search field
jQuery(document).ready(function ($) {
  // http://stackoverflow.com/questions/10807200/jquery-uncaught-typeerror-property-of-object-object-window-is-not-a-funct

  (function() {
    if ($("#inpt-search").length > 0) {
      $("#inpt-search").on("focus", function () {
         $(this).parent('label').addClass('active');
      });

      $("#inpt-search").on('blur', function () {
        if($(this).val().length === 0){
          $(this).parent('label').removeClass('active');
        }
      });
    }
  })();
  // eof search field

  // counter
  (function() {
    $(window).scroll(function() {
      $('#stats').each(function(){
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+650) {
          animateCounter();
        }
      });
    });

    function animateCounter(){
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
  })();
  // eof counter


  // products hover
  (function() {
    if ($('.item .make3d').length > 0) {
      $('.item .make3d').hover(function(){
          $(this).parent().css('z-index', "20");
          $(this).addClass('animate');
         }, function(){
          $(this).removeClass('animate');
          $(this).parent().css('z-index', "1");
      });
    }
  })();
  // eof products hover



  // pagination
  if ($('.pagination').length) {
    (function() {
        function slide(offset) {
          index = Math.min( Math.max( index + offset, 0 ), total - 1 );

          document.querySelector( '.cntr' ).innerHTML = ( index + 1 ) + ' / ' + total;

          // pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
          // pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
        }

        var pr = document.querySelector( '.paginate.left' );
        var pl = document.querySelector( '.paginate.right' );

        if (pr && pl) {

          pr.onclick = slide.bind( this, -1 );
          pl.onclick = slide.bind( this, 1 );

          var index = 0, total = 5;


          slide(0);
        }
    })();
  }
  // eof pagination


  // new brand slider
  if ($( "ul#slider1" ).length) {
  (function() {
    var $j = jQuery.noConflict();

   var realSlider= $j("ul#slider1").bxSlider({
         speed:300,
         pager:false,
         nextText:'',
         prevText:'',
         infiniteLoop:false,
         hideControlOnEnd:true,
          controls: false,
        //  onSlideBefore:function($slideElement, oldIndex, newIndex){
        //    changeRealThumb(realThumbSlider,newIndex);
         //
        //  }

       });


       var realThumbSlider=$j("ul#bx-pager1").bxSlider({
         minSlides: 2,
         maxSlides: 3,
         slideWidth: 88,
         slideMargin: 30,
         moveSlides: 1,
         pager:false,
         speed:300,
         infiniteLoop:false,
         hideControlOnEnd:true,
         nextText:'<span></span>',
         prevText:'<span></span>',

         prevSelector:('.slider-prev'),
         nextSelector:('.slider-next'),
        //  onSlideBefore:function($slideElement, oldIndex, newIndex){
           /*$j("#sliderThumbReal ul .active").removeClass("active");
           $slideElement.addClass("active"); */

        //  }
       });

       linkRealSliders(realSlider,realThumbSlider);

      //  if($j("#bx-pager1 li").length<5){
      //    $j("#bx-pager1 .bx-next").hide();
      //  }

      // sincronizza sliders realizzazioni
    function linkRealSliders(bigS,thumbS){

     $j("ul#bx-pager1").on("click","a",function(event){
       event.preventDefault();
       var newIndex=$j(this).parent().attr("data-slideIndex");
           bigS.goToSlide(newIndex);
     });
    }

    //slider!=$thumbSlider. slider is the realslider
    function changeRealThumb(slider,newIndex){

     var $thumbS=$j("#bx-pager1");
     $thumbS.find('.active').removeClass("active");
     $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

     if(slider.getSlideCount()-newIndex>=4){
       slider.goToSlide(newIndex);
     } else {
       slider.goToSlide(slider.getSlideCount()-4);
     }
    }
  })();
}

// slider #2
if ($( "ul#slider2" ).length) {
(function() {
  var $j = jQuery.noConflict();

 var realSlider= $j("ul#slider2").bxSlider({
       speed:300,
       pager:false,
       nextText:'',
       prevText:'',
       infiniteLoop:false,
       hideControlOnEnd:true,
        controls: false,
      //  onSlideBefore:function($slideElement, oldIndex, newIndex){
      //    changeRealThumb(realThumbSlider,newIndex);
       //
      //  }

     });


     var realThumbSlider=$j("ul#bx-pager2").bxSlider({
       minSlides: 2,
       maxSlides: 3,
       slideWidth: 88,
       slideMargin: 30,
       moveSlides: 1,
       pager:false,
       speed:300,
       infiniteLoop:false,
       hideControlOnEnd:true,
       nextText:'<span></span>',
       prevText:'<span></span>',

       prevSelector:('.slider-prev'),
       nextSelector:('.slider-next'),
       onSlideBefore:function($slideElement, oldIndex, newIndex){
         /*$j("#sliderThumbReal ul .active").removeClass("active");
         $slideElement.addClass("active"); */

       }
     });

     linkRealSliders(realSlider,realThumbSlider);

    //  if($j("#bx-pager1 li").length<5){
    //    $j("#bx-pager1 .bx-next").hide();
    //  }

    // sincronizza sliders realizzazioni
  function linkRealSliders(bigS,thumbS){

   $j("ul#bx-pager2").on("click","a",function(event){
     event.preventDefault();
     var newIndex=$j(this).parent().attr("data-slideIndex");
         bigS.goToSlide(newIndex);
   });
  }

  //slider!=$thumbSlider. slider is the realslider
  function changeRealThumb(slider,newIndex){

   var $thumbS=$j("#bx-pager2");
   $thumbS.find('.active').removeClass("active");
   $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

   if(slider.getSlideCount()-newIndex>=4) {
     slider.goToSlide(newIndex);
   } else {
     slider.goToSlide(slider.getSlideCount()-4);
   }



  }
})();
} // EOF if

// home slider
if ($( "#slider-home" ).length) {
  $('#slider-home').bxSlider({
    speed:1000,
    // pause:200,
    // auto:true,
    pager:true,
    // easing: 'swing',
    mode:'fade',
    nextText:'',
    prevText:'',
    prevSelector:('.nextend-arrow-previous'),
    nextSelector:('.nextend-arrow-next'),
    infiniteLoop:true,
    pagerCustom: true,
    onSliderLoad: function(){
      $('.img-item').delay(400).animate({
        'left': '+=450',
        'opacity': 1
      }, 1200);

      $('.slide-content').animate({
        'top': '50%',
        'opacity': 1
      }, 1200);

      $('.slide-btn-outer').delay(900).animate({
        'opacity': 1
      }, 800);

      // $('.btn-slide').delay(1000).animate({
      //   'opacity': 1
      // }, 1200);
    },
    onSlideAfter: function($slideElement, oldIndex, newIndex){
      $('.img-item').delay(400).animate({
        'left': '+=450',
        'opacity': 1
      }, 1200);

      $('.slide-content').animate({
        'top': '50%',
        'opacity': 1
      }, 1200);

      $('.slide-btn-outer').delay(900).animate({
        'opacity': 1
      }, 800);

      // $('.slide-btn-outer').delay(1000).animate({
      //   'opacity': 1
      // }, 1200);
    },
    onSlideBefore: function($slideElement, oldIndex, newIndex){
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

// home slider
(function($) {
  $('.home-slider').hover(function() {

    clearTimeout($.data(this, 'timer'));
    $('.nextend-arrow').stop(true, true).fadeToggle( 300 );
  });
})(jQuery);
// EOF home slider
// EOF home slider








// EOF bx slider


  // faq toggle page

if ($( ".faq-item-title" ).length) {
  $( ".faq-item-title" ).click(function() {
    $(this).siblings('.faq-item-content').slideToggle();
    $(this).parent('.jsFaqItem').toggleClass('active');
  });

  $('.products-nav-menu').click(function(){
    $('.jsProdMenuContent').slideToggle();
    $('.jsColumnTitle').toggleClass('active');
  });
}

  // EOF faq toggle page

// toggle documentation-grid tablet

if ($( ".page-documentation-grid .jsColumnTitle" ).length) {
  $( ".page-documentation-grid .jsColumnTitle" ).click(function() {
    $('.products-nav-menu .products-nav-content').slideToggle();
    $('.products-nav-menu .column-title.jsColumnTitle').toggleClass('active');
    // $(this).parent('.jsFaqItem').toggleClass('active');
  });
}

// EOF toggle documentation-grid tablet


  // burger

  // burger animation itself:
$('a.burger-menu, .menu-overlay').click(function(){
  $('.burger-link').toggleClass("burger-active");
  $('.menu-overlay').fadeToggle(200, 'linear');
  $('.main-nav').slideToggle(200, 'easeInOutCubic');
});

$('.request-callback-nav').click(function(){
  $('.modal-content').fadeIn( 300 );
  $('.modal-overlay').fadeIn( 300 );

  // hide menu toggle and convert to burger
  $('.burger-link').removeClass("burger-active");
  $('.menu-overlay').fadeOut(200, 'linear');
  $('.main-nav').slideUp(200, 'easeInOutCubic');
});


    showMainModal();
    function showMainModal(){
      $('.request-callback').click(function(){
        $('.modal-content').fadeIn( 300 );
        $('.modal-overlay').fadeIn( 300 );
      });
    }

    closeMainModal();
    function closeMainModal(){
      $('.modal-content-close').click(function(){
        $('.modal-content').fadeOut( 300 );
        $('.modal-overlay').fadeOut( 300 );
      });
    }

    hideMainOverlay();
    function hideMainOverlay(){
      $('.modal-overlay').click(function(){
        $('.modal-content').fadeOut( 300 );
        $('.modal-overlay').fadeOut( 300 );
      });
    }

    checkFormValues();
    function checkFormValues(){
      $('.callback-form').submit(function( event ) {
        if (!($('[name=login]').val()) || !($('[name=phone]').val())) {
          event.preventDefault();
        }
      });
    }

    $('html body').on('keyup', function(e){
      if (e.keyCode === 27) {
          $('.modal-content').fadeOut( 300 );
          $('.modal-overlay').fadeOut( 300 );
          $('.burger-link').removeClass("burger-active");
          $('.menu-overlay').fadeOut(200, 'linear');
          if ( $(window).width() < 768) {
            $('.main-nav').slideUp(200, 'easeInOutCubic');
          }

      }
    });
  // EOF index modal content


  // dropDown menu
  (function() {
    if ( $(window).width() > 768) {
      $( '.dropdown' ).mouseenter(
          function(){
              clearTimeout($.data(this, 'timer'));

              $(this).children('.sub-menu').stop(true, true).slideDown(200, 'easeInOutCubic');
              $(this).addClass('active');
          }
      );
      $( '.dropdown' ).mouseleave(
          function(){
            $.data(this, 'timer', setTimeout($.proxy(function() {

              $(this).children('.sub-menu').stop(true, true).slideUp(200, 'easeInOutCubic');
              $(this).removeClass('active');
            }, this), 200));

          }
      );
    }
  })();
  // http://stackoverflow.com/questions/3713513/jquery-dropdown-menu-using-slideup-and-slidedown-on-hover-is-jumpy
  // EOF dropDown menu



  // footer-nav text change
  (function() {
     // your page initialization code here
     // the DOM will be available here

     window.addEventListener("resize", function(){
     	if (window.matchMedia("(max-width: 767px)").matches) {
     		var string = 'Техпомощь';
     		$('.footer-nav ul li:nth-child(3) a').text( string );
     	} else {
        var origin = 'Техподдержка';
        $('.footer-nav ul li:nth-child(3) a').text( origin );
      }
     });


  })();

  (function() {
    if (window.matchMedia("(max-width: 767px)").matches) {
      var string = 'Заказать консультацию';
      $('.page-documentation .btn-form, .page-product-desc .btn-form').text( string );
    } else {
      var origin = 'Заказать бесплатную консультацию';
      $('.page-documentation .btn-form, .page-product-desc .btn-form').text( origin );
    }
  })();

  (function() {
    // product-desc page
    if (window.matchMedia("(max-width: 767px)").matches) {
      var string = 'Бесплатная консультация';
      $('.page-product-desc .btn-desc').text( string );
    } else {
      var origin = 'Заказать бесплатную консультацию';
      $('.page-product-desc .btn-desc').text( origin );
    }
  })();


  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Выберите категорию';
     $('.page-solutions .products-nav-menu .column-title').text( string );
    } else {
     var origin = 'Категории';
     $('.page-solutions .products-nav-menu .column-title').text( origin );
    }
  })();

  // documentation-grid title
  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Документация';
     $('.page-documentation-grid .page-title h1').text( string );
    } else {
     var origin = 'Документация для оборудования';
     $('.page-documentation-grid .page-title h1').text( origin );
    }
  })();

  // documentation-grid title
  (function() {
    if (window.matchMedia("(max-width: 1199px)").matches) {
     var string = 'Выберите категорию';
     $('.page-documentation-grid .column-left .column-title').text( string );
    } else {
     var origin = 'Категории';
     $('.page-documentation-grid .column-left .column-title').text( origin );
    }
  })();

  // http://stackoverflow.com/questions/23122336/javascript-resize-event-not-working?noredirect=1&lq=1

  (function() {
    if ( $(window).width() < 768) {
      //Add your javascript for large screens here
      (function() {
        var string = 'Техпомощь';
        $('.footer-nav ul li:nth-child(3) a').text( string );
      })();
    }
  })();

  // http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jquery

  // EOF footer-nav text change



  // parallax
  (function() {
    var isIE = navigator.userAgent.indexOf("MSIE ") > 0 || navigator.userAgent.indexOf("Trident") > 0 || navigator.userAgent.indexOf("Edge") > 0,
      wScroll = $(window).scrollTop();

    // parallax effect function
    function parallax(prlxBg, prlxContainer, factor){
      if (isIE) {
      $(prlxBg).css({
        'transform': 'translateY(0px)'
      });
      return;
      }
      if((wScroll + $(window).height()) >= $(prlxBg).offset().top) {
        console.log("true!");
      $(prlxBg).css({
        'transform': 'translateY(' + (($(prlxContainer).offset().top - wScroll) / $(window).height() * 100) * factor +'%)'
      });
      }
    }

    $(window).scroll(function(){
      wScroll = $(this).scrollTop();

      if($('.parallax-index').length > 0){
        parallax('.bottom-line', '.parallax-index', 0.6);
      }
    });
  })();
  // EOFparallax








  // tabs module
  (function() {
    $('.js-tabs li[data-id]').click(function(){
      if($(this).hasClass('active')){ return; }

      $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  })();

  // tabs for mobile
  if ( $(window).width() < 768) {
    (function($) {
           // You pass-in jQuery and then alias it with the $-sign
           // So your internal code doesn't change

           var parentW = $('.desc-nav.module-header').width();
           var activeW = $('.desc-full-title.active').outerWidth();
           var restW = parentW - activeW;
           var everyRestW = restW / 2 - 0.5;
           $('.desc-full-title:not(.active)').outerWidth( everyRestW );

           $('.desc-full-title:not(.active)').click(function(){
                   var parentW = $('.desc-nav.module-header').width();
                   $('.desc-full-title.active').css( 'width','auto' );
                   var activeW = $('.desc-full-title.active').outerWidth();
                   var restW = parentW - activeW;
                   var everyRestW = restW / 2 - 0.5;
                   $('.desc-full-title:not(.active)').outerWidth( everyRestW );
           });

    })(jQuery);
  }


// EOFtabs module


// breadcrumbs ...

if ( $(window).width() < 768) {
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

        jQuery('.breadcrumbs li:last-child').each(function(){
          jQuery(this).prevAll().each(function(){
            w += $(this).width();
            console.log(w);
          });
        });
        var newWidthForLastEl = parent - w;

        $('.breadcrumbs li:last-child').width( newWidthForLastEl );

  })(jQuery);
}

// EOF breadcrumbs ...


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV9mMDcxMTE1LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG5cbi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cInVzZSBzdHJpY3RcIjtcblxuLy8gc2VhcmNoIGZpZWxkXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA4MDcyMDAvanF1ZXJ5LXVuY2F1Z2h0LXR5cGVlcnJvci1wcm9wZXJ0eS1vZi1vYmplY3Qtb2JqZWN0LXdpbmRvdy1pcy1ub3QtYS1mdW5jdFxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIHNlYXJjaCBmaWVsZFxuXG4gIC8vIGNvdW50ZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgICAgIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICAgICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuICAvLyBlb2YgY291bnRlclxuXG5cbiAgLy8gcHJvZHVjdHMgaG92ZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuICAvLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbiAgLy8gcGFnaW5hdGlvblxuICBpZiAoJCgnLnBhZ2luYXRpb24nKS5sZW5ndGgpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgICAgIGluZGV4ID0gTWF0aC5taW4oIE1hdGgubWF4KCBpbmRleCArIG9mZnNldCwgMCApLCB0b3RhbCAtIDEgKTtcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY250cicgKS5pbm5lckhUTUwgPSAoIGluZGV4ICsgMSApICsgJyAvICcgKyB0b3RhbDtcblxuICAgICAgICAgIC8vIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgICAgICAgIC8vIHBsLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gICAgICAgIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgICAgICAgaWYgKHByICYmIHBsKSB7XG5cbiAgICAgICAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICAgICAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG5cbiAgICAgICAgICBzbGlkZSgwKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gIH1cbiAgLy8gZW9mIHBhZ2luYXRpb25cblxuXG4gIC8vIG5ldyBicmFuZCBzbGlkZXJcbiAgaWYgKCQoIFwidWwjc2xpZGVyMVwiICkubGVuZ3RoKSB7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgJGogPSBqUXVlcnkubm9Db25mbGljdCgpO1xuXG4gICB2YXIgcmVhbFNsaWRlcj0gJGooXCJ1bCNzbGlkZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgICAgbmV4dFRleHQ6JycsXG4gICAgICAgICBwcmV2VGV4dDonJyxcbiAgICAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgIC8vICAgIGNoYW5nZVJlYWxUaHVtYihyZWFsVGh1bWJTbGlkZXIsbmV3SW5kZXgpO1xuICAgICAgICAgLy9cbiAgICAgICAgLy8gIH1cblxuICAgICAgIH0pO1xuXG5cbiAgICAgICB2YXIgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgICAgc2xpZGVNYXJnaW46IDMwLFxuICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgICAgc3BlZWQ6MzAwLFxuICAgICAgICAgaW5maW5pdGVMb29wOmZhbHNlLFxuICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgICAgbmV4dFRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgICAgcHJldlRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAkc2xpZGVFbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpOyAqL1xuXG4gICAgICAgIC8vICB9XG4gICAgICAgfSk7XG5cbiAgICAgICBsaW5rUmVhbFNsaWRlcnMocmVhbFNsaWRlcixyZWFsVGh1bWJTbGlkZXIpO1xuXG4gICAgICAvLyAgaWYoJGooXCIjYngtcGFnZXIxIGxpXCIpLmxlbmd0aDw1KXtcbiAgICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgICAvLyAgfVxuXG4gICAgICAvLyBzaW5jcm9uaXp6YSBzbGlkZXJzIHJlYWxpenphemlvbmlcbiAgICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUyx0aHVtYlMpe1xuXG4gICAgICRqKFwidWwjYngtcGFnZXIxXCIpLm9uKFwiY2xpY2tcIixcImFcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICB2YXIgbmV3SW5kZXg9JGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLG5ld0luZGV4KXtcblxuICAgICB2YXIgJHRodW1iUz0kaihcIiNieC1wYWdlcjFcIik7XG4gICAgICR0aHVtYlMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicrbmV3SW5kZXgrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgIGlmKHNsaWRlci5nZXRTbGlkZUNvdW50KCktbmV3SW5kZXg+PTQpe1xuICAgICAgIHNsaWRlci5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHNsaWRlci5nb1RvU2xpZGUoc2xpZGVyLmdldFNsaWRlQ291bnQoKS00KTtcbiAgICAgfVxuICAgIH1cbiAgfSkoKTtcbn1cblxuLy8gc2xpZGVyICMyXG5pZiAoJCggXCJ1bCNzbGlkZXIyXCIgKS5sZW5ndGgpIHtcbihmdW5jdGlvbigpIHtcbiAgdmFyICRqID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuIHZhciByZWFsU2xpZGVyPSAkaihcInVsI3NsaWRlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICBuZXh0VGV4dDonJyxcbiAgICAgICBwcmV2VGV4dDonJyxcbiAgICAgICBpbmZpbml0ZUxvb3A6ZmFsc2UsXG4gICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgLy9cbiAgICAgIC8vICB9XG5cbiAgICAgfSk7XG5cblxuICAgICB2YXIgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgbWF4U2xpZGVzOiAzLFxuICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgIHNsaWRlTWFyZ2luOiAzMCxcbiAgICAgICBtb3ZlU2xpZGVzOiAxLFxuICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICBpbmZpbml0ZUxvb3A6ZmFsc2UsXG4gICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgIG5leHRUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICBwcmV2VGV4dDonPHNwYW4+PC9zcGFuPicsXG5cbiAgICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgIH1cbiAgICAgfSk7XG5cbiAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIscmVhbFRodW1iU2xpZGVyKTtcblxuICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgLy8gIH1cblxuICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUyx0aHVtYlMpe1xuXG4gICAkaihcInVsI2J4LXBhZ2VyMlwiKS5vbihcImNsaWNrXCIsXCJhXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICB2YXIgbmV3SW5kZXg9JGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgIGJpZ1MuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgIH0pO1xuICB9XG5cbiAgLy9zbGlkZXIhPSR0aHVtYlNsaWRlci4gc2xpZGVyIGlzIHRoZSByZWFsc2xpZGVyXG4gIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsbmV3SW5kZXgpe1xuXG4gICB2YXIgJHRodW1iUz0kaihcIiNieC1wYWdlcjJcIik7XG4gICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICR0aHVtYlMuZmluZCgnbGlbZGF0YS1zbGlkZUluZGV4PVwiJytuZXdJbmRleCsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgIGlmKHNsaWRlci5nZXRTbGlkZUNvdW50KCktbmV3SW5kZXg+PTQpIHtcbiAgICAgc2xpZGVyLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICB9IGVsc2Uge1xuICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCktNCk7XG4gICB9XG5cblxuXG4gIH1cbn0pKCk7XG59IC8vIEVPRiBpZlxuXG4vLyBob21lIHNsaWRlclxuaWYgKCQoIFwiI3NsaWRlci1ob21lXCIgKS5sZW5ndGgpIHtcbiAgJCgnI3NsaWRlci1ob21lJykuYnhTbGlkZXIoe1xuICAgIHNwZWVkOjEwMDAsXG4gICAgLy8gcGF1c2U6MjAwLFxuICAgIC8vIGF1dG86dHJ1ZSxcbiAgICBwYWdlcjp0cnVlLFxuICAgIC8vIGVhc2luZzogJ3N3aW5nJyxcbiAgICBtb2RlOidmYWRlJyxcbiAgICBuZXh0VGV4dDonJyxcbiAgICBwcmV2VGV4dDonJyxcbiAgICBwcmV2U2VsZWN0b3I6KCcubmV4dGVuZC1hcnJvdy1wcmV2aW91cycpLFxuICAgIG5leHRTZWxlY3RvcjooJy5uZXh0ZW5kLWFycm93LW5leHQnKSxcbiAgICBpbmZpbml0ZUxvb3A6dHJ1ZSxcbiAgICBwYWdlckN1c3RvbTogdHJ1ZSxcbiAgICBvblNsaWRlckxvYWQ6IGZ1bmN0aW9uKCl7XG4gICAgICAkKCcuaW1nLWl0ZW0nKS5kZWxheSg0MDApLmFuaW1hdGUoe1xuICAgICAgICAnbGVmdCc6ICcrPTQ1MCcsXG4gICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICd0b3AnOiAnNTAlJyxcbiAgICAgICAgJ29wYWNpdHknOiAxXG4gICAgICB9LCAxMjAwKTtcblxuICAgICAgJCgnLnNsaWRlLWJ0bi1vdXRlcicpLmRlbGF5KDkwMCkuYW5pbWF0ZSh7XG4gICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgfSwgODAwKTtcblxuICAgICAgLy8gJCgnLmJ0bi1zbGlkZScpLmRlbGF5KDEwMDApLmFuaW1hdGUoe1xuICAgICAgLy8gICAnb3BhY2l0eSc6IDFcbiAgICAgIC8vIH0sIDEyMDApO1xuICAgIH0sXG4gICAgb25TbGlkZUFmdGVyOiBmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgJCgnLmltZy1pdGVtJykuZGVsYXkoNDAwKS5hbmltYXRlKHtcbiAgICAgICAgJ2xlZnQnOiAnKz00NTAnLFxuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgIH0sIDEyMDApO1xuXG4gICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAndG9wJzogJzUwJScsXG4gICAgICAgICdvcGFjaXR5JzogMVxuICAgICAgfSwgMTIwMCk7XG5cbiAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSg5MDApLmFuaW1hdGUoe1xuICAgICAgICAnb3BhY2l0eSc6IDFcbiAgICAgIH0sIDgwMCk7XG5cbiAgICAgIC8vICQoJy5zbGlkZS1idG4tb3V0ZXInKS5kZWxheSgxMDAwKS5hbmltYXRlKHtcbiAgICAgIC8vICAgJ29wYWNpdHknOiAxXG4gICAgICAvLyB9LCAxMjAwKTtcbiAgICB9LFxuICAgIG9uU2xpZGVCZWZvcmU6IGZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAvLyBoaWRpbmcgZWxlbWVudHMgYmVmb3JlIHJlYmFzZVxuICAgICAgJCgnLmltZy1pdGVtJykuYW5pbWF0ZSh7XG4gICAgICAgICdvcGFjaXR5JzogJzAnXG4gICAgICB9LCA1MDApO1xuXG4gICAgICAkKCcuc2xpZGUtY29udGVudCcpLmFuaW1hdGUoe1xuICAgICAgICAnb3BhY2l0eSc6IDBcbiAgICAgIH0sIDUwMCk7XG5cbiAgICAgICQoJy5zbGlkZS1idG4tb3V0ZXInKS5hbmltYXRlKHtcbiAgICAgICAgJ29wYWNpdHknOiAwXG4gICAgICB9LCA1MDApO1xuXG4gICAgICAvLyBjaGFuZ2luZyBwYXJhbWV0ZXJzXG4gICAgICAkKCcuaW1nLWl0ZW0nKS5hbmltYXRlKHtcbiAgICAgICAgJ2xlZnQnOiAnLT00NTAnXG4gICAgICB9LCA1MCk7XG5cbiAgICAgICQoJy5zbGlkZS1jb250ZW50JykuYW5pbWF0ZSh7XG4gICAgICAgICd0b3AnOiAnMjUlJ1xuICAgICAgfSwgNTApO1xuXG4gICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAvLyAgICd0b3AnOiAnNjclJ1xuICAgICAgLy8gfSwgNTApO1xuXG4gICAgICAvLyAkKCcuc2xpZGUtYnRuLW91dGVyJykuYW5pbWF0ZSh7XG4gICAgICAvLyAgICdvcGFjaXR5JzogMFxuICAgICAgLy8gfSwgNTAwKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBob21lIHNsaWRlclxuKGZ1bmN0aW9uKCQpIHtcbiAgJCgnLmhvbWUtc2xpZGVyJykuaG92ZXIoZnVuY3Rpb24oKSB7XG5cbiAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcbiAgICAkKCcubmV4dGVuZC1hcnJvdycpLnN0b3AodHJ1ZSwgdHJ1ZSkuZmFkZVRvZ2dsZSggMzAwICk7XG4gIH0pO1xufSkoalF1ZXJ5KTtcbi8vIEVPRiBob21lIHNsaWRlclxuLy8gRU9GIGhvbWUgc2xpZGVyXG5cblxuXG5cblxuXG5cblxuLy8gRU9GIGJ4IHNsaWRlclxuXG5cbiAgLy8gZmFxIHRvZ2dsZSBwYWdlXG5cbmlmICgkKCBcIi5mYXEtaXRlbS10aXRsZVwiICkubGVuZ3RoKSB7XG4gICQoIFwiLmZhcS1pdGVtLXRpdGxlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxLWl0ZW0tY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG4gICQoJy5wcm9kdWN0cy1uYXYtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJCgnLmpzUHJvZE1lbnVDb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAkKCcuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbiAgLy8gRU9GIGZhcSB0b2dnbGUgcGFnZVxuXG4vLyB0b2dnbGUgZG9jdW1lbnRhdGlvbi1ncmlkIHRhYmxldFxuXG5pZiAoJCggXCIucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmpzQ29sdW1uVGl0bGVcIiApLmxlbmd0aCkge1xuICAkKCBcIi5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuanNDb2x1bW5UaXRsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5wcm9kdWN0cy1uYXYtY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgJCgnLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAvLyAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cbi8vIEVPRiB0b2dnbGUgZG9jdW1lbnRhdGlvbi1ncmlkIHRhYmxldFxuXG5cbiAgLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG4kKCdhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbn0pO1xuXG4kKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcblxuICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG59KTtcblxuXG4gICAgc2hvd01haW5Nb2RhbCgpO1xuICAgIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKXtcbiAgICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjbG9zZU1haW5Nb2RhbCgpO1xuICAgIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBoaWRlTWFpbk92ZXJsYXkoKTtcbiAgICBmdW5jdGlvbiBoaWRlTWFpbk92ZXJsYXkoKXtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNoZWNrRm9ybVZhbHVlcygpO1xuICAgIGZ1bmN0aW9uIGNoZWNrRm9ybVZhbHVlcygpe1xuICAgICAgJCgnLmNhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICAkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSk7XG4gIC8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuICAvLyBkcm9wRG93biBtZW51XG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlZW50ZXIoXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJC5kYXRhKHRoaXMsICd0aW1lcicsIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgICB9LCB0aGlzKSwgMjAwKSk7XG5cbiAgICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzEzNTEzL2pxdWVyeS1kcm9wZG93bi1tZW51LXVzaW5nLXNsaWRldXAtYW5kLXNsaWRlZG93bi1vbi1ob3Zlci1pcy1qdW1weVxuICAvLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuICAvLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG4gIChmdW5jdGlvbigpIHtcbiAgICAgLy8geW91ciBwYWdlIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICAgICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgICBcdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgIFx0XHQkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgICBcdH0gZWxzZSB7XG4gICAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICAgIH1cbiAgICAgfSk7XG5cblxuICB9KSgpO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgdmFyIHN0cmluZyA9ICfQl9Cw0LrQsNC30LDRgtGMINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5idG4tZm9ybSwgLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZm9ybScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG4gIChmdW5jdGlvbigpIHtcbiAgICAvLyBwcm9kdWN0LWRlc2MgcGFnZVxuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJ9CR0LXRgdC/0LvQsNGC0L3QsNGPINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjyc7XG4gICAgICAkKCcucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1kZXNjJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0JfQsNC60LDQt9Cw0YLRjCDQsdC10YHQv9C70LDRgtC90YPRjiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZGVzYycpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIGRvY3VtZW50YXRpb24tZ3JpZCB0aXRsZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgIHZhciBzdHJpbmcgPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPJztcbiAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5wYWdlLXRpdGxlIGgxJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgdmFyIG9yaWdpbiA9ICfQlNC+0LrRg9C80LXQvdGC0LDRhtC40Y8g0LTQu9GPINC+0LHQvtGA0YPQtNC+0LLQsNC90LjRjyc7XG4gICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgdGl0bGVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5jb2x1bW4tbGVmdCAuY29sdW1uLXRpdGxlJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmNvbHVtbi1sZWZ0IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4gIC8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4gIC8vIHBhcmFsbGF4XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAvLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcil7XG4gICAgICBpZiAoaXNJRSkge1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRydWUhXCIpO1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gIC8vIEVPRnBhcmFsbGF4XG5cblxuXG5cblxuXG5cblxuICAvLyB0YWJzIG1vZHVsZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgJCgnLmpzLXRhYnMgbGlbZGF0YS1pZF0nKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgaWYoJCh0aGlzKS5oYXNDbGFzcygnYWN0aXZlJykpeyByZXR1cm47IH1cblxuICAgICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuZmFkZUluKDApLnNpYmxpbmdzKCkuZmFkZU91dCgwKTtcbiAgICAgICQodGhpcykuc2libGluZ3MoKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfSkoKTtcblxuICAvLyB0YWJzIGZvciBtb2JpbGVcbiAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgIChmdW5jdGlvbigkKSB7XG4gICAgICAgICAgIC8vIFlvdSBwYXNzLWluIGpRdWVyeSBhbmQgdGhlbiBhbGlhcyBpdCB3aXRoIHRoZSAkLXNpZ25cbiAgICAgICAgICAgLy8gU28geW91ciBpbnRlcm5hbCBjb2RlIGRvZXNuJ3QgY2hhbmdlXG5cbiAgICAgICAgICAgdmFyIHBhcmVudFcgPSAkKCcuZGVzYy1uYXYubW9kdWxlLWhlYWRlcicpLndpZHRoKCk7XG4gICAgICAgICAgIHZhciBhY3RpdmVXID0gJCgnLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgIHZhciByZXN0VyA9IHBhcmVudFcgLSBhY3RpdmVXO1xuICAgICAgICAgICB2YXIgZXZlcnlSZXN0VyA9IHJlc3RXIC8gMiAtIDAuNTtcbiAgICAgICAgICAgJCgnLmRlc2MtZnVsbC10aXRsZTpub3QoLmFjdGl2ZSknKS5vdXRlcldpZHRoKCBldmVyeVJlc3RXICk7XG5cbiAgICAgICAgICAgJCgnLmRlc2MtZnVsbC10aXRsZTpub3QoLmFjdGl2ZSknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAgICAgICAgICAgIHZhciBwYXJlbnRXID0gJCgnLmRlc2MtbmF2Lm1vZHVsZS1oZWFkZXInKS53aWR0aCgpO1xuICAgICAgICAgICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykuY3NzKCAnd2lkdGgnLCdhdXRvJyApO1xuICAgICAgICAgICAgICAgICAgIHZhciBhY3RpdmVXID0gJCgnLmRlc2MtZnVsbC10aXRsZS5hY3RpdmUnKS5vdXRlcldpZHRoKCk7XG4gICAgICAgICAgICAgICAgICAgdmFyIHJlc3RXID0gcGFyZW50VyAtIGFjdGl2ZVc7XG4gICAgICAgICAgICAgICAgICAgdmFyIGV2ZXJ5UmVzdFcgPSByZXN0VyAvIDIgLSAwLjU7XG4gICAgICAgICAgICAgICAgICAgJCgnLmRlc2MtZnVsbC10aXRsZTpub3QoLmFjdGl2ZSknKS5vdXRlcldpZHRoKCBldmVyeVJlc3RXICk7XG4gICAgICAgICAgIH0pO1xuXG4gICAgfSkoalF1ZXJ5KTtcbiAgfVxuXG5cbi8vIEVPRnRhYnMgbW9kdWxlXG5cblxuLy8gYnJlYWRjcnVtYnMgLi4uXG5cbmlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgKGZ1bmN0aW9uKCQpIHtcbiAgICAgICAgLy8gWW91IHBhc3MtaW4galF1ZXJ5IGFuZCB0aGVuIGFsaWFzIGl0IHdpdGggdGhlICQtc2lnblxuICAgICAgICAvLyBTbyB5b3VyIGludGVybmFsIGNvZGUgZG9lc24ndCBjaGFuZ2VcbiAgICAgICAgdmFyIGNvdW50ID0gJCgnLmJyZWFkY3J1bWJzIGxpJykubGVuZ3RoO1xuICAgICAgICBpZiAoY291bnQgPj0gMykge1xuICAgICAgICAgICQoJy5icmVhZGNydW1icyBsaTpudGgtY2hpbGQobisyKTpub3QoOmxhc3QtY2hpbGQpIGEnKS5odG1sKCcuLi4nKTtcbiAgICAgICAgfVxuICAgICAgICAkKCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCBhJykuYWRkQ2xhc3MoJ292ZXJjcnVtYnMnKTtcbiAgICAgICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy80MjkxMTUxL2pxdWVyeS1jb3VudC1jaGlsZC1lbGVtZW50c1xuXG4gICAgICAgIC8vIGNvdW50aW5nIHdpZHRoIGZvciB3aG9sZSB2cmVhZGNydW1ic1xuICAgICAgICB2YXIgcGFyZW50ID0gJCgnLmJyZWFkY3J1bWJzJykud2lkdGgoKTtcbiAgICAgICAgdmFyIGxhc3QgPSAkKCcuYnJlYWRjcnVtYnMgbGk6bm90KDpsYXN0LWNoaWxkKScpLm91dGVyV2lkdGgoKTtcblxuICAgICAgICB2YXIgdyA9IDA7XG5cbiAgICAgICAgalF1ZXJ5KCcuYnJlYWRjcnVtYnMgbGk6bGFzdC1jaGlsZCcpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICBqUXVlcnkodGhpcykucHJldkFsbCgpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIHcgKz0gJCh0aGlzKS53aWR0aCgpO1xuICAgICAgICAgICAgY29uc29sZS5sb2codyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB2YXIgbmV3V2lkdGhGb3JMYXN0RWwgPSBwYXJlbnQgLSB3O1xuXG4gICAgICAgICQoJy5icmVhZGNydW1icyBsaTpsYXN0LWNoaWxkJykud2lkdGgoIG5ld1dpZHRoRm9yTGFzdEVsICk7XG5cbiAgfSkoalF1ZXJ5KTtcbn1cblxuLy8gRU9GIGJyZWFkY3J1bWJzIC4uLlxuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
