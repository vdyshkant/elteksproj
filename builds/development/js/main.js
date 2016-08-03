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
}

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


  // home slider
  (function() {
    $('.home-slider .slide').hover(function() {
      $('.nextend-arrow').fadeToggle( 300 );
    });
  })();
  // EOF home slider





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


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV9kOTZjNDkxYS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLyplc2xpbnQtZGlzYWJsZSBuby11bnVzZWQtdmFycyovXG5cbi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cInVzZSBzdHJpY3RcIjtcblxuLy8gc2VhcmNoIGZpZWxkXG5qUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTA4MDcyMDAvanF1ZXJ5LXVuY2F1Z2h0LXR5cGVlcnJvci1wcm9wZXJ0eS1vZi1vYmplY3Qtb2JqZWN0LXdpbmRvdy1pcy1ub3QtYS1mdW5jdFxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIHNlYXJjaCBmaWVsZFxuXG4gIC8vIGNvdW50ZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gICAgZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgICAgIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICAgICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9KSgpO1xuICAvLyBlb2YgY291bnRlclxuXG5cbiAgLy8gcHJvZHVjdHMgaG92ZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KSgpO1xuICAvLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbiAgLy8gcGFnaW5hdGlvblxuICBpZiAoJCgnLnBhZ2luYXRpb24nKS5sZW5ndGgpIHtcbiAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgICAgIGluZGV4ID0gTWF0aC5taW4oIE1hdGgubWF4KCBpbmRleCArIG9mZnNldCwgMCApLCB0b3RhbCAtIDEgKTtcblxuICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY250cicgKS5pbm5lckhUTUwgPSAoIGluZGV4ICsgMSApICsgJyAvICcgKyB0b3RhbDtcblxuICAgICAgICAgIC8vIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgICAgICAgIC8vIHBsLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gICAgICAgIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgICAgICAgaWYgKHByICYmIHBsKSB7XG5cbiAgICAgICAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICAgICAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgICAgICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG5cbiAgICAgICAgICBzbGlkZSgwKTtcbiAgICAgICAgfVxuICAgIH0pKCk7XG4gIH1cbiAgLy8gZW9mIHBhZ2luYXRpb25cblxuXG4gIC8vIG5ldyBicmFuZCBzbGlkZXJcbiAgaWYgKCQoIFwidWwjc2xpZGVyMVwiICkubGVuZ3RoKSB7XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgJGogPSBqUXVlcnkubm9Db25mbGljdCgpO1xuXG4gICB2YXIgcmVhbFNsaWRlcj0gJGooXCJ1bCNzbGlkZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgICAgbmV4dFRleHQ6JycsXG4gICAgICAgICBwcmV2VGV4dDonJyxcbiAgICAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAgIC8vICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgIC8vICAgIGNoYW5nZVJlYWxUaHVtYihyZWFsVGh1bWJTbGlkZXIsbmV3SW5kZXgpO1xuICAgICAgICAgLy9cbiAgICAgICAgLy8gIH1cblxuICAgICAgIH0pO1xuXG5cbiAgICAgICB2YXIgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgICAgIG1pblNsaWRlczogMixcbiAgICAgICAgIG1heFNsaWRlczogMyxcbiAgICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgICAgc2xpZGVNYXJnaW46IDMwLFxuICAgICAgICAgbW92ZVNsaWRlczogMSxcbiAgICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgICAgc3BlZWQ6MzAwLFxuICAgICAgICAgaW5maW5pdGVMb29wOmZhbHNlLFxuICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgICAgbmV4dFRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgICAgcHJldlRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuXG4gICAgICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuICAgICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgICAkc2xpZGVFbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpOyAqL1xuXG4gICAgICAgIC8vICB9XG4gICAgICAgfSk7XG5cbiAgICAgICBsaW5rUmVhbFNsaWRlcnMocmVhbFNsaWRlcixyZWFsVGh1bWJTbGlkZXIpO1xuXG4gICAgICAvLyAgaWYoJGooXCIjYngtcGFnZXIxIGxpXCIpLmxlbmd0aDw1KXtcbiAgICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgICAvLyAgfVxuXG4gICAgICAvLyBzaW5jcm9uaXp6YSBzbGlkZXJzIHJlYWxpenphemlvbmlcbiAgICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUyx0aHVtYlMpe1xuXG4gICAgICRqKFwidWwjYngtcGFnZXIxXCIpLm9uKFwiY2xpY2tcIixcImFcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICB2YXIgbmV3SW5kZXg9JGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLG5ld0luZGV4KXtcblxuICAgICB2YXIgJHRodW1iUz0kaihcIiNieC1wYWdlcjFcIik7XG4gICAgICR0aHVtYlMuZmluZCgnLmFjdGl2ZScpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAkdGh1bWJTLmZpbmQoJ2xpW2RhdGEtc2xpZGVJbmRleD1cIicrbmV3SW5kZXgrJ1wiXScpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuXG4gICAgIGlmKHNsaWRlci5nZXRTbGlkZUNvdW50KCktbmV3SW5kZXg+PTQpe1xuICAgICAgIHNsaWRlci5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICB9IGVsc2Uge1xuICAgICAgIHNsaWRlci5nb1RvU2xpZGUoc2xpZGVyLmdldFNsaWRlQ291bnQoKS00KTtcbiAgICAgfVxuICAgIH1cbiAgfSkoKTtcbn1cblxuLy8gc2xpZGVyICMyXG5pZiAoJCggXCJ1bCNzbGlkZXIyXCIgKS5sZW5ndGgpIHtcbihmdW5jdGlvbigpIHtcbiAgdmFyICRqID0galF1ZXJ5Lm5vQ29uZmxpY3QoKTtcblxuIHZhciByZWFsU2xpZGVyPSAkaihcInVsI3NsaWRlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICBuZXh0VGV4dDonJyxcbiAgICAgICBwcmV2VGV4dDonJyxcbiAgICAgICBpbmZpbml0ZUxvb3A6ZmFsc2UsXG4gICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgICBjb250cm9sczogZmFsc2UsXG4gICAgICAvLyAgb25TbGlkZUJlZm9yZTpmdW5jdGlvbigkc2xpZGVFbGVtZW50LCBvbGRJbmRleCwgbmV3SW5kZXgpe1xuICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgLy9cbiAgICAgIC8vICB9XG5cbiAgICAgfSk7XG5cblxuICAgICB2YXIgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIyXCIpLmJ4U2xpZGVyKHtcbiAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgbWF4U2xpZGVzOiAzLFxuICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgIHNsaWRlTWFyZ2luOiAzMCxcbiAgICAgICBtb3ZlU2xpZGVzOiAxLFxuICAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICBpbmZpbml0ZUxvb3A6ZmFsc2UsXG4gICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgIG5leHRUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICBwcmV2VGV4dDonPHNwYW4+PC9zcGFuPicsXG5cbiAgICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICBvblNsaWRlQmVmb3JlOmZ1bmN0aW9uKCRzbGlkZUVsZW1lbnQsIG9sZEluZGV4LCBuZXdJbmRleCl7XG4gICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgIH1cbiAgICAgfSk7XG5cbiAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIscmVhbFRodW1iU2xpZGVyKTtcblxuICAgIC8vICBpZigkaihcIiNieC1wYWdlcjEgbGlcIikubGVuZ3RoPDUpe1xuICAgIC8vICAgICRqKFwiI2J4LXBhZ2VyMSAuYngtbmV4dFwiKS5oaWRlKCk7XG4gICAgLy8gIH1cblxuICAgIC8vIHNpbmNyb25penphIHNsaWRlcnMgcmVhbGl6emF6aW9uaVxuICBmdW5jdGlvbiBsaW5rUmVhbFNsaWRlcnMoYmlnUyx0aHVtYlMpe1xuXG4gICAkaihcInVsI2J4LXBhZ2VyMlwiKS5vbihcImNsaWNrXCIsXCJhXCIsZnVuY3Rpb24oZXZlbnQpe1xuICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICB2YXIgbmV3SW5kZXg9JGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgIGJpZ1MuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgIH0pO1xuICB9XG5cbiAgLy9zbGlkZXIhPSR0aHVtYlNsaWRlci4gc2xpZGVyIGlzIHRoZSByZWFsc2xpZGVyXG4gIGZ1bmN0aW9uIGNoYW5nZVJlYWxUaHVtYihzbGlkZXIsbmV3SW5kZXgpe1xuXG4gICB2YXIgJHRodW1iUz0kaihcIiNieC1wYWdlcjJcIik7XG4gICAkdGh1bWJTLmZpbmQoJy5hY3RpdmUnKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICR0aHVtYlMuZmluZCgnbGlbZGF0YS1zbGlkZUluZGV4PVwiJytuZXdJbmRleCsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgIGlmKHNsaWRlci5nZXRTbGlkZUNvdW50KCktbmV3SW5kZXg+PTQpIHtcbiAgICAgc2xpZGVyLmdvVG9TbGlkZShuZXdJbmRleCk7XG4gICB9IGVsc2Uge1xuICAgICBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCktNCk7XG4gICB9XG5cblxuXG4gIH1cbn0pKCk7XG59XG5cbi8vIEVPRiBieCBzbGlkZXJcblxuXG4gIC8vIGZhcSB0b2dnbGUgcGFnZVxuXG5pZiAoJCggXCIuZmFxLWl0ZW0tdGl0bGVcIiApLmxlbmd0aCkge1xuICAkKCBcIi5mYXEtaXRlbS10aXRsZVwiICkuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuICAkKCcucHJvZHVjdHMtbmF2LW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICQoJy5qc1Byb2RNZW51Q29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgJCgnLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG4gIC8vIEVPRiBmYXEgdG9nZ2xlIHBhZ2VcblxuLy8gdG9nZ2xlIGRvY3VtZW50YXRpb24tZ3JpZCB0YWJsZXRcblxuaWYgKCQoIFwiLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5qc0NvbHVtblRpdGxlXCIgKS5sZW5ndGgpIHtcbiAgJCggXCIucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLmpzQ29sdW1uVGl0bGVcIiApLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAucHJvZHVjdHMtbmF2LWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICQoJy5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgLy8gJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xufVxuXG4vLyBFT0YgdG9nZ2xlIGRvY3VtZW50YXRpb24tZ3JpZCB0YWJsZXRcblxuXG4gIC8vIGJ1cmdlclxuXG4gIC8vIGJ1cmdlciBhbmltYXRpb24gaXRzZWxmOlxuJCgnYS5idXJnZXItbWVudSwgLm1lbnUtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG59KTtcblxuJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG5cbiAgLy8gaGlkZSBtZW51IHRvZ2dsZSBhbmQgY29udmVydCB0byBidXJnZXJcbiAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xufSk7XG5cblxuICAgIHNob3dNYWluTW9kYWwoKTtcbiAgICBmdW5jdGlvbiBzaG93TWFpbk1vZGFsKCl7XG4gICAgICAkKCcucmVxdWVzdC1jYWxsYmFjaycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2xvc2VNYWluTW9kYWwoKTtcbiAgICBmdW5jdGlvbiBjbG9zZU1haW5Nb2RhbCgpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaGlkZU1haW5PdmVybGF5KCk7XG4gICAgZnVuY3Rpb24gaGlkZU1haW5PdmVybGF5KCl7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBjaGVja0Zvcm1WYWx1ZXMoKTtcbiAgICBmdW5jdGlvbiBjaGVja0Zvcm1WYWx1ZXMoKXtcbiAgICAgICQoJy5jYWxsYmFjay1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgICAgaWYgKCEoJCgnW25hbWU9bG9naW5dJykudmFsKCkpIHx8ICEoJCgnW25hbWU9cGhvbmVdJykudmFsKCkpKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgJCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSl7XG4gICAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgIH1cblxuICAgICAgfVxuICAgIH0pO1xuICAvLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cbiAgLy8gZHJvcERvd24gbWVudVxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWVudGVyKFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuXG4gICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlbGVhdmUoXG4gICAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQuZGF0YSh0aGlzLCAndGltZXInLCBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSwgdGhpcyksIDIwMCkpO1xuXG4gICAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH0pKCk7XG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzcxMzUxMy9qcXVlcnktZHJvcGRvd24tbWVudS11c2luZy1zbGlkZXVwLWFuZC1zbGlkZWRvd24tb24taG92ZXItaXMtanVtcHlcbiAgLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG5cbiAgLy8gZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgIC8vIHlvdXIgcGFnZSBpbml0aWFsaXphdGlvbiBjb2RlIGhlcmVcbiAgICAgLy8gdGhlIERPTSB3aWxsIGJlIGF2YWlsYWJsZSBoZXJlXG5cbiAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgICAgXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICBcdFx0dmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICBcdFx0JCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgICAgXHR9IGVsc2Uge1xuICAgICAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4gICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4gICAgICB9XG4gICAgIH0pO1xuXG5cbiAgfSkoKTtcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAn0JfQsNC60LDQt9Cw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0sIC5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWZvcm0nKS50ZXh0KCBzdHJpbmcgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9ICfQl9Cw0LrQsNC30LDRgtGMINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5idG4tZm9ybSwgLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZm9ybScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgLy8gcHJvZHVjdC1kZXNjIHBhZ2VcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgdmFyIHN0cmluZyA9ICfQkdC10YHQv9C70LDRgtC90LDRjyDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y8nO1xuICAgICAgJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5idG4tZGVzYycpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LHQtdGB0L/Qu9Cw0YLQvdGD0Y4g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICAgIHZhciBzdHJpbmcgPSAn0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y4nO1xuICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBzdHJpbmcgKTtcbiAgICB9IGVsc2Uge1xuICAgICB2YXIgb3JpZ2luID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XG4gICAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBkb2N1bWVudGF0aW9uLWdyaWQgdGl0bGVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICB2YXIgc3RyaW5nID0gJ9CU0L7QutGD0LzQtdC90YLQsNGG0LjRjyc7XG4gICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAucGFnZS10aXRsZSBoMScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgIHZhciBvcmlnaW4gPSAn0JTQvtC60YPQvNC10L3RgtCw0YbQuNGPINC00LvRjyDQvtCx0L7RgNGD0LTQvtCy0LDQvdC40Y8nO1xuICAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uLWdyaWQgLnBhZ2UtdGl0bGUgaDEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gZG9jdW1lbnRhdGlvbi1ncmlkIHRpdGxlXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24tZ3JpZCAuY29sdW1uLWxlZnQgLmNvbHVtbi10aXRsZScpLnRleHQoIHN0cmluZyApO1xuICAgIH0gZWxzZSB7XG4gICAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbi1ncmlkIC5jb2x1bW4tbGVmdCAuY29sdW1uLXRpdGxlJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG4gIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxMjIzMzYvamF2YXNjcmlwdC1yZXNpemUtZXZlbnQtbm90LXdvcmtpbmc/bm9yZWRpcmVjdD0xJmxxPTFcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgLy9BZGQgeW91ciBqYXZhc2NyaXB0IGZvciBsYXJnZSBzY3JlZW5zIGhlcmVcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgICAgfSkoKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gaHR0cDovL3d3dy5jb2FsbWFyY2guY29tL2Jsb2cvaG93LXRvLWV4ZWN1dGUtamF2YXNjcmlwdC1iYXNlZC1vbi1zY3JlZW4tc2l6ZS11c2luZy1qcXVlcnlcblxuICAvLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cblxuICAvLyBwYXJhbGxheFxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IDAsXG4gICAgICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4gICAgLy8gcGFyYWxsYXggZWZmZWN0IGZ1bmN0aW9uXG4gICAgZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3Ipe1xuICAgICAgaWYgKGlzSUUpIHtcbiAgICAgICQocHJseEJnKS5jc3Moe1xuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYoKHdTY3JvbGwgKyAkKHdpbmRvdykuaGVpZ2h0KCkpID49ICQocHJseEJnKS5vZmZzZXQoKS50b3ApIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ0cnVlIVwiKTtcbiAgICAgICQocHJseEJnKS5jc3Moe1xuICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoJyArICgoJChwcmx4Q29udGFpbmVyKS5vZmZzZXQoKS50b3AgLSB3U2Nyb2xsKSAvICQod2luZG93KS5oZWlnaHQoKSAqIDEwMCkgKiBmYWN0b3IgKyclKSdcbiAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgICAgIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gICAgICBpZigkKCcucGFyYWxsYXgtaW5kZXgnKS5sZW5ndGggPiAwKXtcbiAgICAgICAgcGFyYWxsYXgoJy5ib3R0b20tbGluZScsICcucGFyYWxsYXgtaW5kZXgnLCAwLjYpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KSgpO1xuICAvLyBFT0ZwYXJhbGxheFxuXG5cbiAgLy8gaG9tZSBzbGlkZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgICQoJy5ob21lLXNsaWRlciAuc2xpZGUnKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgICAgICQoJy5uZXh0ZW5kLWFycm93JykuZmFkZVRvZ2dsZSggMzAwICk7XG4gICAgfSk7XG4gIH0pKCk7XG4gIC8vIEVPRiBob21lIHNsaWRlclxuXG5cblxuXG5cbiAgLy8gdGFicyBtb2R1bGVcbiAgKGZ1bmN0aW9uKCkge1xuICAgICQoJy5qcy10YWJzIGxpW2RhdGEtaWRdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgIGlmKCQodGhpcykuaGFzQ2xhc3MoJ2FjdGl2ZScpKXsgcmV0dXJuOyB9XG5cbiAgICAgICQoJyMnICsgJCh0aGlzKS5hdHRyKCdkYXRhLWlkJykpLmZhZGVJbigwKS5zaWJsaW5ncygpLmZhZGVPdXQoMCk7XG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH0pKCk7XG5cbiAgLy8gdGFicyBmb3IgbW9iaWxlXG4gIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAoZnVuY3Rpb24oJCkge1xuICAgICAgICAgICAvLyBZb3UgcGFzcy1pbiBqUXVlcnkgYW5kIHRoZW4gYWxpYXMgaXQgd2l0aCB0aGUgJC1zaWduXG4gICAgICAgICAgIC8vIFNvIHlvdXIgaW50ZXJuYWwgY29kZSBkb2Vzbid0IGNoYW5nZVxuXG4gICAgICAgICAgIHZhciBwYXJlbnRXID0gJCgnLmRlc2MtbmF2Lm1vZHVsZS1oZWFkZXInKS53aWR0aCgpO1xuICAgICAgICAgICB2YXIgYWN0aXZlVyA9ICQoJy5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICB2YXIgcmVzdFcgPSBwYXJlbnRXIC0gYWN0aXZlVztcbiAgICAgICAgICAgdmFyIGV2ZXJ5UmVzdFcgPSByZXN0VyAvIDIgLSAwLjU7XG4gICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGU6bm90KC5hY3RpdmUpJykub3V0ZXJXaWR0aCggZXZlcnlSZXN0VyApO1xuXG4gICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGU6bm90KC5hY3RpdmUpJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICAgICAgICB2YXIgcGFyZW50VyA9ICQoJy5kZXNjLW5hdi5tb2R1bGUtaGVhZGVyJykud2lkdGgoKTtcbiAgICAgICAgICAgICAgICAgICAkKCcuZGVzYy1mdWxsLXRpdGxlLmFjdGl2ZScpLmNzcyggJ3dpZHRoJywnYXV0bycgKTtcbiAgICAgICAgICAgICAgICAgICB2YXIgYWN0aXZlVyA9ICQoJy5kZXNjLWZ1bGwtdGl0bGUuYWN0aXZlJykub3V0ZXJXaWR0aCgpO1xuICAgICAgICAgICAgICAgICAgIHZhciByZXN0VyA9IHBhcmVudFcgLSBhY3RpdmVXO1xuICAgICAgICAgICAgICAgICAgIHZhciBldmVyeVJlc3RXID0gcmVzdFcgLyAyIC0gMC41O1xuICAgICAgICAgICAgICAgICAgICQoJy5kZXNjLWZ1bGwtdGl0bGU6bm90KC5hY3RpdmUpJykub3V0ZXJXaWR0aCggZXZlcnlSZXN0VyApO1xuICAgICAgICAgICB9KTtcblxuICAgIH0pKGpRdWVyeSk7XG4gIH1cblxuXG4vLyBFT0Z0YWJzIG1vZHVsZVxuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
