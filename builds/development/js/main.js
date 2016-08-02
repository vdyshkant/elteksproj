(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');


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
  (function() {
    function slide(offset) {
      index = Math.min( Math.max( index + offset, 0 ), total - 1 );

      document.querySelector( '.cntr' ).innerHTML = ( index + 1 ) + ' / ' + total;

      pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
      pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
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
  // eof pagination



  // // bxSlider
  // #slider1
  // var slider = $('#slider1').bxSlider({
    // mode: 'fade',
    // pagerCustom: '#bx-pager1',
    // auto: false,
    // speed: 500,
    // pause: 800,
    // pager: false,
    // infiniteLoop: true,
    // controls: false,
  // });

  // var slider = $(".bxslider").bxSlider({
  //   mode: 'slide',
  //   auto: true,
  //   controls: false,
  //   pager: false,
  // });

  // var sliderPager = $(".bxslider-pager").bxSlider({
  //   minSlides: 2,
  //   maxSlides: 3,
  //   slideWidth: 45,
  //   slideMargin: 5,
  //   moveSlides: 1,
  //   auto: false,
  //   pager: false,
  //   prevSelector:('.slider-prev'),
  //   nextSelector:('.slider-next'),
  //   prevText:'',
  //   nextText:'',
  // });
  //
  // $('.bxslider-pager li').on('click', 'a', function(e){
  //   e.preventDefault();
  //   slider.stopAuto();
  //   slider.goToSlide($(this).attr('data-slideIndex'));
  // });




  // new brand slider
  (function() {
    var $j = jQuery.noConflict();

   var realSlider= $j("ul#slider1, ul#slider2").bxSlider({
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


       var realThumbSlider=$j("ul#bx-pager1, ul#bx-pager2").bxSlider({
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

      //  window.addEventListener("resize", function(){
      //    if (window.matchMedia("(max-width: 1199px)").matches) {
      //      realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //        slideWidth: 88,
      //        slideMargin: 30
      //      });
      //    } else if (window.matchMedia("(max-width: 767px)").matches) {
      //      realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //        slideWidth: 72,
      //        slideMargin: 8
      //      });
      //    }
      //  });
      //  if ( $(window).width() < 1200 & $(window).width() >= 768 ) {
      //    realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      slideWidth: 88,
      //      slideMargin: 30
      //    });
      //  } else if ($(window).width() < 768) {
      //    realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //           minSlides: 2,
      //           maxSlides: 2,
      //           slideWidth: 72,
      //           slideMargin: 8,
      //           moveSlides: 1,
      //           pager:false,
      //           speed:300,
      //           infiniteLoop:false,
      //           hideControlOnEnd:true,
      //           nextText:'<span></span>',
      //           prevText:'<span></span>',
       //
      //           prevSelector:('.slider-prev'),
      //           nextSelector:('.slider-next'),
      //           onSlideBefore:function($slideElement, oldIndex, newIndex){
      //             /*$j("#sliderThumbReal ul .active").removeClass("active");
      //             $slideElement.addClass("active"); */
       //
      //           }
      //    });
      //  }

      //  if ( $(window).width() < 1200 & $(window).width() >= 768 ) {
      //    var realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      minSlides: 2,
      //      maxSlides: 2,
      //      slideWidth: 88,
      //      slideMargin: 10,
      //      moveSlides: 1,
      //      pager:false,
      //      speed:300,
      //      infiniteLoop:false,
      //      hideControlOnEnd:true,
      //      nextText:'<span></span>',
      //      prevText:'<span></span>',
       //
      //      prevSelector:('.slider-prev'),
      //      nextSelector:('.slider-next'),
      //      onSlideBefore:function($slideElement, oldIndex, newIndex){
      //        /*$j("#sliderThumbReal ul .active").removeClass("active");
      //        $slideElement.addClass("active"); */
       //
      //      }
      //    });
      //  } else if ($(window).width() < 768) {
      //    var realThumbSlider=$j("ul#bx-pager1").bxSlider({
      //      minSlides: 2,
      //      maxSlides: 2,
      //      slideWidth: 72,
      //      slideMargin: 8,
      //      moveSlides: 1,
      //      pager:false,
      //      speed:300,
      //      infiniteLoop:false,
      //      hideControlOnEnd:true,
      //      nextText:'<span></span>',
      //      prevText:'<span></span>',
       //
      //      prevSelector:('.slider-prev'),
      //      nextSelector:('.slider-next'),
      //      onSlideBefore:function($slideElement, oldIndex, newIndex){
      //        /*$j("#sliderThumbReal ul .active").removeClass("active");
      //        $slideElement.addClass("active"); */
       //
      //      }
      //    });
      //  }

       linkRealSliders(realSlider,realThumbSlider);

      //  if($j("#bx-pager1 li").length<5){
      //    $j("#bx-pager1 .bx-next").hide();
      //  }

      // sincronizza sliders realizzazioni
    function linkRealSliders(bigS,thumbS){

     $j("ul#bx-pager1, ul#bx-pager2").on("click","a",function(event){
       event.preventDefault();
       var newIndex=$j(this).parent().attr("data-slideIndex");
           bigS.goToSlide(newIndex);
     });
    }

    //slider!=$thumbSlider. slider is the realslider
    function changeRealThumb(slider,newIndex){

     var $thumbS=$j("#bx-pager1, ul#bx-pager2");
     $thumbS.find('.active').removeClass("active");
     $thumbS.find('li[data-slideIndex="'+newIndex+'"]').addClass("active");

     if(slider.getSlideCount()-newIndex>=4)slider.goToSlide(newIndex);
     else slider.goToSlide(slider.getSlideCount()-4);

    }
  })();




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
    $('.slide').hover(function() {
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
// EOFtabs module


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV9hZjQwYjBkLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXG5cbi8vIHNlYXJjaCBmaWVsZFxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwODA3MjAwL2pxdWVyeS11bmNhdWdodC10eXBlZXJyb3ItcHJvcGVydHktb2Ytb2JqZWN0LW9iamVjdC13aW5kb3ctaXMtbm90LWEtZnVuY3RcblxuICAoZnVuY3Rpb24oKSB7XG4gICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pKCk7XG4gIC8vIGVvZiBzZWFyY2ggZmllbGRcblxuICAvLyBjb3VudGVyXG4gIChmdW5jdGlvbigpIHtcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcbiAgICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcblxuICAgIGZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCl7XG4gICAgICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgICAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIGNvdW50ZXJcblxuXG4gIC8vIHByb2R1Y3RzIGhvdmVyXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSkoKTtcbiAgLy8gZW9mIHByb2R1Y3RzIGhvdmVyXG5cblxuXG4gIC8vIHBhZ2luYXRpb25cbiAgKGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgaW5kZXggPSBNYXRoLm1pbiggTWF0aC5tYXgoIGluZGV4ICsgb2Zmc2V0LCAwICksIHRvdGFsIC0gMSApO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICAgIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgICAgcGwuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSB0b3RhbCAtIDEgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICB9XG5cbiAgICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gICAgdmFyIHBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5yaWdodCcgKTtcblxuICAgIGlmIChwciAmJiBwbCkge1xuXG4gICAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICAgIHBsLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAxICk7XG5cbiAgICAgIHZhciBpbmRleCA9IDAsIHRvdGFsID0gNTtcblxuXG4gICAgICBzbGlkZSgwKTtcbiAgICB9XG4gIH0pKCk7XG4gIC8vIGVvZiBwYWdpbmF0aW9uXG5cblxuXG4gIC8vIC8vIGJ4U2xpZGVyXG4gIC8vICNzbGlkZXIxXG4gIC8vIHZhciBzbGlkZXIgPSAkKCcjc2xpZGVyMScpLmJ4U2xpZGVyKHtcbiAgICAvLyBtb2RlOiAnZmFkZScsXG4gICAgLy8gcGFnZXJDdXN0b206ICcjYngtcGFnZXIxJyxcbiAgICAvLyBhdXRvOiBmYWxzZSxcbiAgICAvLyBzcGVlZDogNTAwLFxuICAgIC8vIHBhdXNlOiA4MDAsXG4gICAgLy8gcGFnZXI6IGZhbHNlLFxuICAgIC8vIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAvLyBjb250cm9sczogZmFsc2UsXG4gIC8vIH0pO1xuXG4gIC8vIHZhciBzbGlkZXIgPSAkKFwiLmJ4c2xpZGVyXCIpLmJ4U2xpZGVyKHtcbiAgLy8gICBtb2RlOiAnc2xpZGUnLFxuICAvLyAgIGF1dG86IHRydWUsXG4gIC8vICAgY29udHJvbHM6IGZhbHNlLFxuICAvLyAgIHBhZ2VyOiBmYWxzZSxcbiAgLy8gfSk7XG5cbiAgLy8gdmFyIHNsaWRlclBhZ2VyID0gJChcIi5ieHNsaWRlci1wYWdlclwiKS5ieFNsaWRlcih7XG4gIC8vICAgbWluU2xpZGVzOiAyLFxuICAvLyAgIG1heFNsaWRlczogMyxcbiAgLy8gICBzbGlkZVdpZHRoOiA0NSxcbiAgLy8gICBzbGlkZU1hcmdpbjogNSxcbiAgLy8gICBtb3ZlU2xpZGVzOiAxLFxuICAvLyAgIGF1dG86IGZhbHNlLFxuICAvLyAgIHBhZ2VyOiBmYWxzZSxcbiAgLy8gICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgLy8gICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgLy8gICBwcmV2VGV4dDonJyxcbiAgLy8gICBuZXh0VGV4dDonJyxcbiAgLy8gfSk7XG4gIC8vXG4gIC8vICQoJy5ieHNsaWRlci1wYWdlciBsaScpLm9uKCdjbGljaycsICdhJywgZnVuY3Rpb24oZSl7XG4gIC8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAvLyAgIHNsaWRlci5zdG9wQXV0bygpO1xuICAvLyAgIHNsaWRlci5nb1RvU2xpZGUoJCh0aGlzKS5hdHRyKCdkYXRhLXNsaWRlSW5kZXgnKSk7XG4gIC8vIH0pO1xuXG5cblxuXG4gIC8vIG5ldyBicmFuZCBzbGlkZXJcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciAkaiA9IGpRdWVyeS5ub0NvbmZsaWN0KCk7XG5cbiAgIHZhciByZWFsU2xpZGVyPSAkaihcInVsI3NsaWRlcjEsIHVsI3NsaWRlcjJcIikuYnhTbGlkZXIoe1xuICAgICAgICAgc3BlZWQ6MzAwLFxuICAgICAgICAgcGFnZXI6ZmFsc2UsXG4gICAgICAgICBuZXh0VGV4dDonJyxcbiAgICAgICAgIHByZXZUZXh0OicnLFxuICAgICAgICAgaW5maW5pdGVMb29wOmZhbHNlLFxuICAgICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgICAgIGNvbnRyb2xzOiBmYWxzZSxcbiAgICAgICAgLy8gIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgLy8gICAgY2hhbmdlUmVhbFRodW1iKHJlYWxUaHVtYlNsaWRlcixuZXdJbmRleCk7XG4gICAgICAgICAvL1xuICAgICAgICAvLyAgfVxuXG4gICAgICAgfSk7XG5cblxuICAgICAgIHZhciByZWFsVGh1bWJTbGlkZXI9JGooXCJ1bCNieC1wYWdlcjEsIHVsI2J4LXBhZ2VyMlwiKS5ieFNsaWRlcih7XG4gICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAgICBtYXhTbGlkZXM6IDMsXG4gICAgICAgICBzbGlkZVdpZHRoOiA4OCxcbiAgICAgICAgIHNsaWRlTWFyZ2luOiAzMCxcbiAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAgICBwYWdlcjpmYWxzZSxcbiAgICAgICAgIHNwZWVkOjMwMCxcbiAgICAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgICAgIGhpZGVDb250cm9sT25FbmQ6dHJ1ZSxcbiAgICAgICAgIG5leHRUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAgIHByZXZUZXh0Oic8c3Bhbj48L3NwYW4+JyxcblxuICAgICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgICAgIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgICAgICAgLyokaihcIiNzbGlkZXJUaHVtYlJlYWwgdWwgLmFjdGl2ZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgJHNsaWRlRWxlbWVudC5hZGRDbGFzcyhcImFjdGl2ZVwiKTsgKi9cblxuICAgICAgICAgfVxuICAgICAgIH0pO1xuXG4gICAgICAvLyAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgICAgIC8vICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICAgLy8gICAgICByZWFsVGh1bWJTbGlkZXI9JGooXCJ1bCNieC1wYWdlcjFcIikuYnhTbGlkZXIoe1xuICAgICAgLy8gICAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgLy8gICAgICAgIHNsaWRlTWFyZ2luOiAzMFxuICAgICAgLy8gICAgICB9KTtcbiAgICAgIC8vICAgIH0gZWxzZSBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgICAgLy8gICAgICByZWFsVGh1bWJTbGlkZXI9JGooXCJ1bCNieC1wYWdlcjFcIikuYnhTbGlkZXIoe1xuICAgICAgLy8gICAgICAgIHNsaWRlV2lkdGg6IDcyLFxuICAgICAgLy8gICAgICAgIHNsaWRlTWFyZ2luOiA4XG4gICAgICAvLyAgICAgIH0pO1xuICAgICAgLy8gICAgfVxuICAgICAgLy8gIH0pO1xuICAgICAgLy8gIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPCAxMjAwICYgJCh3aW5kb3cpLndpZHRoKCkgPj0gNzY4ICkge1xuICAgICAgLy8gICAgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgIC8vICAgICAgc2xpZGVXaWR0aDogODgsXG4gICAgICAvLyAgICAgIHNsaWRlTWFyZ2luOiAzMFxuICAgICAgLy8gICAgfSk7XG4gICAgICAvLyAgfSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgLy8gICAgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgIC8vICAgICAgICAgICBtaW5TbGlkZXM6IDIsXG4gICAgICAvLyAgICAgICAgICAgbWF4U2xpZGVzOiAyLFxuICAgICAgLy8gICAgICAgICAgIHNsaWRlV2lkdGg6IDcyLFxuICAgICAgLy8gICAgICAgICAgIHNsaWRlTWFyZ2luOiA4LFxuICAgICAgLy8gICAgICAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAvLyAgICAgICAgICAgcGFnZXI6ZmFsc2UsXG4gICAgICAvLyAgICAgICAgICAgc3BlZWQ6MzAwLFxuICAgICAgLy8gICAgICAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgIC8vICAgICAgICAgICBoaWRlQ29udHJvbE9uRW5kOnRydWUsXG4gICAgICAvLyAgICAgICAgICAgbmV4dFRleHQ6JzxzcGFuPjwvc3Bhbj4nLFxuICAgICAgLy8gICAgICAgICAgIHByZXZUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAvL1xuICAgICAgLy8gICAgICAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgLy8gICAgICAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuICAgICAgLy8gICAgICAgICAgIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgIC8vICAgICAgICAgICAgIC8qJGooXCIjc2xpZGVyVGh1bWJSZWFsIHVsIC5hY3RpdmVcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAvLyAgICAgICAgICAgICAkc2xpZGVFbGVtZW50LmFkZENsYXNzKFwiYWN0aXZlXCIpOyAqL1xuICAgICAgIC8vXG4gICAgICAvLyAgICAgICAgICAgfVxuICAgICAgLy8gICAgfSk7XG4gICAgICAvLyAgfVxuXG4gICAgICAvLyAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDEyMDAgJiAkKHdpbmRvdykud2lkdGgoKSA+PSA3NjggKSB7XG4gICAgICAvLyAgICB2YXIgcmVhbFRodW1iU2xpZGVyPSRqKFwidWwjYngtcGFnZXIxXCIpLmJ4U2xpZGVyKHtcbiAgICAgIC8vICAgICAgbWluU2xpZGVzOiAyLFxuICAgICAgLy8gICAgICBtYXhTbGlkZXM6IDIsXG4gICAgICAvLyAgICAgIHNsaWRlV2lkdGg6IDg4LFxuICAgICAgLy8gICAgICBzbGlkZU1hcmdpbjogMTAsXG4gICAgICAvLyAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAvLyAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgLy8gICAgICBzcGVlZDozMDAsXG4gICAgICAvLyAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgIC8vICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgLy8gICAgICBuZXh0VGV4dDonPHNwYW4+PC9zcGFuPicsXG4gICAgICAvLyAgICAgIHByZXZUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAvL1xuICAgICAgLy8gICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgIC8vICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICAvLyAgICAgIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgIC8vICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgLy8gICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG4gICAgICAgLy9cbiAgICAgIC8vICAgICAgfVxuICAgICAgLy8gICAgfSk7XG4gICAgICAvLyAgfSBlbHNlIGlmICgkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgLy8gICAgdmFyIHJlYWxUaHVtYlNsaWRlcj0kaihcInVsI2J4LXBhZ2VyMVwiKS5ieFNsaWRlcih7XG4gICAgICAvLyAgICAgIG1pblNsaWRlczogMixcbiAgICAgIC8vICAgICAgbWF4U2xpZGVzOiAyLFxuICAgICAgLy8gICAgICBzbGlkZVdpZHRoOiA3MixcbiAgICAgIC8vICAgICAgc2xpZGVNYXJnaW46IDgsXG4gICAgICAvLyAgICAgIG1vdmVTbGlkZXM6IDEsXG4gICAgICAvLyAgICAgIHBhZ2VyOmZhbHNlLFxuICAgICAgLy8gICAgICBzcGVlZDozMDAsXG4gICAgICAvLyAgICAgIGluZmluaXRlTG9vcDpmYWxzZSxcbiAgICAgIC8vICAgICAgaGlkZUNvbnRyb2xPbkVuZDp0cnVlLFxuICAgICAgLy8gICAgICBuZXh0VGV4dDonPHNwYW4+PC9zcGFuPicsXG4gICAgICAvLyAgICAgIHByZXZUZXh0Oic8c3Bhbj48L3NwYW4+JyxcbiAgICAgICAvL1xuICAgICAgLy8gICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgIC8vICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICAvLyAgICAgIG9uU2xpZGVCZWZvcmU6ZnVuY3Rpb24oJHNsaWRlRWxlbWVudCwgb2xkSW5kZXgsIG5ld0luZGV4KXtcbiAgICAgIC8vICAgICAgICAvKiRqKFwiI3NsaWRlclRodW1iUmVhbCB1bCAuYWN0aXZlXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgLy8gICAgICAgICRzbGlkZUVsZW1lbnQuYWRkQ2xhc3MoXCJhY3RpdmVcIik7ICovXG4gICAgICAgLy9cbiAgICAgIC8vICAgICAgfVxuICAgICAgLy8gICAgfSk7XG4gICAgICAvLyAgfVxuXG4gICAgICAgbGlua1JlYWxTbGlkZXJzKHJlYWxTbGlkZXIscmVhbFRodW1iU2xpZGVyKTtcblxuICAgICAgLy8gIGlmKCRqKFwiI2J4LXBhZ2VyMSBsaVwiKS5sZW5ndGg8NSl7XG4gICAgICAvLyAgICAkaihcIiNieC1wYWdlcjEgLmJ4LW5leHRcIikuaGlkZSgpO1xuICAgICAgLy8gIH1cblxuICAgICAgLy8gc2luY3Jvbml6emEgc2xpZGVycyByZWFsaXp6YXppb25pXG4gICAgZnVuY3Rpb24gbGlua1JlYWxTbGlkZXJzKGJpZ1MsdGh1bWJTKXtcblxuICAgICAkaihcInVsI2J4LXBhZ2VyMSwgdWwjYngtcGFnZXIyXCIpLm9uKFwiY2xpY2tcIixcImFcIixmdW5jdGlvbihldmVudCl7XG4gICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICB2YXIgbmV3SW5kZXg9JGoodGhpcykucGFyZW50KCkuYXR0cihcImRhdGEtc2xpZGVJbmRleFwiKTtcbiAgICAgICAgICAgYmlnUy5nb1RvU2xpZGUobmV3SW5kZXgpO1xuICAgICB9KTtcbiAgICB9XG5cbiAgICAvL3NsaWRlciE9JHRodW1iU2xpZGVyLiBzbGlkZXIgaXMgdGhlIHJlYWxzbGlkZXJcbiAgICBmdW5jdGlvbiBjaGFuZ2VSZWFsVGh1bWIoc2xpZGVyLG5ld0luZGV4KXtcblxuICAgICB2YXIgJHRodW1iUz0kaihcIiNieC1wYWdlcjEsIHVsI2J4LXBhZ2VyMlwiKTtcbiAgICAgJHRodW1iUy5maW5kKCcuYWN0aXZlJykucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICR0aHVtYlMuZmluZCgnbGlbZGF0YS1zbGlkZUluZGV4PVwiJytuZXdJbmRleCsnXCJdJykuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAgaWYoc2xpZGVyLmdldFNsaWRlQ291bnQoKS1uZXdJbmRleD49NClzbGlkZXIuZ29Ub1NsaWRlKG5ld0luZGV4KTtcbiAgICAgZWxzZSBzbGlkZXIuZ29Ub1NsaWRlKHNsaWRlci5nZXRTbGlkZUNvdW50KCktNCk7XG5cbiAgICB9XG4gIH0pKCk7XG5cblxuXG5cbmlmICgkKCBcIi5mYXEtaXRlbS10aXRsZVwiICkubGVuZ3RoKSB7XG4gICQoIFwiLmZhcS1pdGVtLXRpdGxlXCIgKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxLWl0ZW0tY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gIH0pO1xuXG4gICQoJy5wcm9kdWN0cy1uYXYtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgJCgnLmpzUHJvZE1lbnVDb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAkKCcuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgfSk7XG59XG5cblxuICAvLyBFT0YgZmFxIHRvZ2dsZSBwYWdlXG5cblxuICAvLyBidXJnZXJcblxuICAvLyBidXJnZXIgYW5pbWF0aW9uIGl0c2VsZjpcbiQoJ2EuYnVyZ2VyLW1lbnUsIC5tZW51LW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xufSk7XG5cbiQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuXG4gIC8vIGhpZGUgbWVudSB0b2dnbGUgYW5kIGNvbnZlcnQgdG8gYnVyZ2VyXG4gICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbn0pO1xuXG5cbiAgICBzaG93TWFpbk1vZGFsKCk7XG4gICAgZnVuY3Rpb24gc2hvd01haW5Nb2RhbCgpe1xuICAgICAgJCgnLnJlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsb3NlTWFpbk1vZGFsKCk7XG4gICAgZnVuY3Rpb24gY2xvc2VNYWluTW9kYWwoKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGhpZGVNYWluT3ZlcmxheSgpO1xuICAgIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpe1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2hlY2tGb3JtVmFsdWVzKCk7XG4gICAgZnVuY3Rpb24gY2hlY2tGb3JtVmFsdWVzKCl7XG4gICAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICAgIGlmICghKCQoJ1tuYW1lPWxvZ2luXScpLnZhbCgpKSB8fCAhKCQoJ1tuYW1lPXBob25lXScpLnZhbCgpKSkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgICQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcbiAgLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG4gIC8vIGRyb3BEb3duIG1lbnVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAgICQoICcuZHJvcGRvd24nICkubW91c2VlbnRlcihcbiAgICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcblxuICAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9XG4gICAgICApO1xuICAgICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWxlYXZlKFxuICAgICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkLmRhdGEodGhpcywgJ3RpbWVyJywgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0sIHRoaXMpLCAyMDApKTtcblxuICAgICAgICAgIH1cbiAgICAgICk7XG4gICAgfVxuICB9KSgpO1xuICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3MTM1MTMvanF1ZXJ5LWRyb3Bkb3duLW1lbnUtdXNpbmctc2xpZGV1cC1hbmQtc2xpZGVkb3duLW9uLWhvdmVyLWlzLWp1bXB5XG4gIC8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuXG4gIC8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcbiAgKGZ1bmN0aW9uKCkge1xuICAgICAvLyB5b3VyIHBhZ2UgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gICAgIC8vIHRoZSBET00gd2lsbCBiZSBhdmFpbGFibGUgaGVyZVxuXG4gICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICAgIFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgXHRcdHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAgXHRcdCQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICAgIFx0fSBlbHNlIHtcbiAgICAgICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuICAgICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuICAgICAgfVxuICAgICB9KTtcblxuXG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICAgICB2YXIgc3RyaW5nID0gJ9CX0LDQutCw0LfQsNGC0Ywg0LrQvtC90YHRg9C70YzRgtCw0YbQuNGOJztcbiAgICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtLCAucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1mb3JtJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0JfQsNC60LDQt9Cw0YLRjCDQsdC10YHQv9C70LDRgtC90YPRjiDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0sIC5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWZvcm0nKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIC8vIHByb2R1Y3QtZGVzYyBwYWdlXG4gICAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgICAgIHZhciBzdHJpbmcgPSAn0JHQtdGB0L/Qu9Cw0YLQvdCw0Y8g0LrQvtC90YHRg9C70YzRgtCw0YbQuNGPJztcbiAgICAgICQoJy5wYWdlLXByb2R1Y3QtZGVzYyAuYnRuLWRlc2MnKS50ZXh0KCBzdHJpbmcgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9ICfQl9Cw0LrQsNC30LDRgtGMINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgICAkKCcucGFnZS1wcm9kdWN0LWRlc2MgLmJ0bi1kZXNjJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICB9KSgpO1xuXG5cbiAgKGZ1bmN0aW9uKCkge1xuICAgIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dCggc3RyaW5nICk7XG4gICAgfSBlbHNlIHtcbiAgICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gIH0pKCk7XG5cbiAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG4gIChmdW5jdGlvbigpIHtcbiAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgfSkoKTtcblxuICAvLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4gIC8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4gIC8vIHBhcmFsbGF4XG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgICAgIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbiAgICAvLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbiAgICBmdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcil7XG4gICAgICBpZiAoaXNJRSkge1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICAgICAgfSk7XG4gICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRydWUhXCIpO1xuICAgICAgJChwcmx4QmcpLmNzcyh7XG4gICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICAgICAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgICAgIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgICAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pKCk7XG4gIC8vIEVPRnBhcmFsbGF4XG5cblxuICAvLyBob21lIHNsaWRlclxuICAoZnVuY3Rpb24oKSB7XG4gICAgJCgnLnNsaWRlJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICAgICAkKCcubmV4dGVuZC1hcnJvdycpLmZhZGVUb2dnbGUoIDMwMCApO1xuICAgIH0pO1xuICB9KSgpO1xuICAvLyBFT0YgaG9tZSBzbGlkZXJcblxuXG5cblxuXG4gIC8vIHRhYnMgbW9kdWxlXG4gIChmdW5jdGlvbigpIHtcbiAgICAkKCcuanMtdGFicyBsaVtkYXRhLWlkXScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7IHJldHVybjsgfVxuXG4gICAgICAkKCcjJyArICQodGhpcykuYXR0cignZGF0YS1pZCcpKS5mYWRlSW4oMCkuc2libGluZ3MoKS5mYWRlT3V0KDApO1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9KSgpO1xuLy8gRU9GdGFicyBtb2R1bGVcblxuXG59KTsgLy8gRU9GIGRvY3VtZW50LnJlYWR5IE1BSU5cbiJdfQ==
