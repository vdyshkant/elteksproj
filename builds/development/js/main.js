(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');

// search field
$(document).ready(function () {


  animateHeaderSearch();

  function animateHeaderSearch(){
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
  }


// eof search field

// counter

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

// eof counter


// products hover

animateProductItem();

function animateProductItem(){
  $(document).ready(function(){

    if ($('.item .make3d').length > 0) {
      $('.item .make3d').hover(function(){
          $(this).parent().css('z-index', "20");
          $(this).addClass('animate');
         }, function(){
          $(this).removeClass('animate');
          $(this).parent().css('z-index', "1");
      });
    }
  });
}

// eof products hover



// pagination

animatePagination();
function animatePagination() {
  function slide(offset) {
    index = Math.min( Math.max( index + offset, 0 ), total - 1 );

    document.querySelector( '.cntr' ).innerHTML = ( index + 1 ) + ' / ' + total;

    pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
    pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
  }
  var pr = document.querySelector( '.paginate.left' );
  var pl = document.querySelector( '.paginate.right' );

  if (pr !== 'undefined' && pl !== 'undefined' ) {

    pr.onclick = slide.bind( this, -1 );
    pl.onclick = slide.bind( this, 1 );

    var index = 0, total = 5;



    slide(0);
  }
}
// eof pagination

// bxSlider

$(document).ready(function(){
  if($('.bxslider.documentation').length > 0) {
    $('.bxslider.documentation').bxSlider({
      auto:false,
      speed: 500,
      pause:800,
      pager:true,
      infiniteLoop: true,
      controls: true,
      prevSelector:('.slider-prev'),
      nextSelector:('.slider-next'),
      prevText:'',
      nextText:'',
      buildPager: function(slideIndex){
        switch(slideIndex){
          case 0:
            return setImg('slider-thumb-1.jpg');
          case 1:
            return setImg('slider-thumb-2.jpg');
          case 2:
            return setImg('slider-thumb-3.jpg');
        }
      },
      // pagerCustom:'#bx-pager2'
    });

    $('.page-documentation .bx-wrapper').addClass('bx-documentation');
  }
});


function setImg(inputImgSrc) {
  var imgSrc = '<img src="../img/' + inputImgSrc + '">';
  return imgSrc;
}

// eof bxSlider


// faq toggle page

// $('.list-item .title').on('click',function(){
//   $(this).siblings('.content').slideToggle();
// })

dropDownContentItem();

function dropDownContentItem(){
  if ($('.jsFaqItem').length > 0) {
    $('.faq-item-title').on('click',function(){
      $(this).siblings('.faq-item-content').slideToggle();
      $(this).parent('.jsFaqItem').toggleClass('active');
    });
  }
}



// EOF faq toggle page


// burger

  // burger animation itself:



$("a.burger-menu, .menu-overlay").click(function(e){
  e.preventDefault();
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
  // $('.modal-content').addClass('active');
  // $('.modal-overlay').addClass('active');
});

// window.addEventListener("resize", function(){
//  if (window.matchMedia("(max-width: 767px)").matches) {
//    var string = 'Техпомощь';
//    $('.footer-nav ul li:nth-child(3) a').text( string );
//  } else {
//    var origin = 'Техподдержка';
//    $('.footer-nav ul li:nth-child(3) a').text( origin );
//  }
// });

// $('.menu-overlay').click(function(e){
//   e.preventDefault();
//   $('.burger-link').toggleClass("burger-active");
//   $('.menu-overlay').fadeToggle(200, 'linear');
//   $('.main-nav').slideToggle(200, 'easeInOutCubic');
// });
  // main-nav-bar appearence:

// EOF burger

// index modal content

  // $('.request-callback');
  //
  // $('.request-callback-nav');
  // $('.main-nav');
  // $('.menu-overlay');
  //
  // $('.modal-content');
  // $('.modal-overlay');
  // $('.modal-content-close');
  // $('.callback-form');
  // $('[name=login]');
  // $('[name=phone]');
  // $('.login');
  //
  // $('.varvarvar');
  // $('.varvarvar');




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



if (document.querySelector('.modal-content')) {
  modalContent();
}

function modalContent() {
  // var link = document.querySelector('.request-callback');
  //
  // var linkNav = document.querySelector('.request-callback-nav');
  // var mainNav = document.querySelector('.main-nav');
  // var mainNavOverlay = document.querySelector('.menu-overlay');
  //
  // var popup = document.querySelector('.modal-content');
  // var overlay = document.querySelector('.modal-overlay');
  // var close = popup.querySelector('.modal-content-close');
  //
  // var form = document.querySelector('.callback-form');
  // var login = document.querySelector('[name=login]');
  // var phone = document.querySelector('[name=phone]');
  // var storage = localStorage.getItem('login');




  // window.addEventListener('keydown', function(e) {
  //   if (e.keyCode === 27) {
  //     if(popup.classList.contains('active') || overlay.classList.contains('active')) {
  //       fadeIn(popup);
  //       fadeIn(overlay);
  //       popup.classList.remove('active');
  //       overlay.classList.remove('active');
  //     }
  //   }
  // });

  // function fadeIn(element) {
  //   var op = 1; // initial opacity;
  //   var timer = setInterval(function () {
  //     if (op <= 0.1) {
  //       clearInterval(timer);
  //       element.style.display = 'none';
  //     }
  //     element.style.opacity = op;
  //     element.style.filter = 'alpha(opacity=' + op * 100 + ')';
  //     op -= op * 0.1;
  //   }, 10)
  // };
  //
  // function fadeOut(element) {
  //   var op = 0.1; // initial opacity;
  //   element.style.display = 'block';
  //   var timer = setInterval(function() {
  //     if (op >= 1) {
  //       clearInterval(timer);
  //     }
  //     element.style.opacity = op;
  //     element.style.filter = 'alpha(opacity=' + op * 100 + ')';
  //     op += op * 0.1;
  //     // alert('here');
  //   }, 10);
  // };

}


// EOF index modal content


// dropDown menu



// v2

$(document).ready(function() {
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
}); // end ready

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

// http://stackoverflow.com/questions/23122336/javascript-resize-event-not-working?noredirect=1&lq=1


if ( $(window).width() < 768) {
  //Add your javascript for large screens here
  (function() {
    var string = 'Техпомощь';
    $('.footer-nav ul li:nth-child(3) a').text( string );
  })();
}
// http://www.coalmarch.com/blog/how-to-execute-javascript-based-on-screen-size-using-jquery

// EOF footer-nav text change



// parallax

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

// EOFparallax


// home slider

$('.slide .container').hover(function() {
  $('.nextend-arrow').fadeToggle( 300 );
});


// EOF home slider


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV84YTliMTZiMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXG4vLyBzZWFyY2ggZmllbGRcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXG4gIGFuaW1hdGVIZWFkZXJTZWFyY2goKTtcblxuICBmdW5jdGlvbiBhbmltYXRlSGVhZGVyU2VhcmNoKCl7XG4gICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4vLyBlb2Ygc2VhcmNoIGZpZWxkXG5cbi8vIGNvdW50ZXJcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICQodGhpcykuYW5pbWF0ZU51bWJlcih7XG4gICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGVvZiBjb3VudGVyXG5cblxuLy8gcHJvZHVjdHMgaG92ZXJcblxuYW5pbWF0ZVByb2R1Y3RJdGVtKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVQcm9kdWN0SXRlbSgpe1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgaWYgKCQoJy5pdGVtIC5tYWtlM2QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcuaXRlbSAubWFrZTNkJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMjBcIik7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbi8vIHBhZ2luYXRpb25cblxuYW5pbWF0ZVBhZ2luYXRpb24oKTtcbmZ1bmN0aW9uIGFuaW1hdGVQYWdpbmF0aW9uKCkge1xuICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICBpbmRleCA9IE1hdGgubWluKCBNYXRoLm1heCggaW5kZXggKyBvZmZzZXQsIDAgKSwgdG90YWwgLSAxICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICBwci5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICBwbC5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICB9XG4gIHZhciBwciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUubGVmdCcgKTtcbiAgdmFyIHBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5yaWdodCcgKTtcblxuICBpZiAocHIgIT09ICd1bmRlZmluZWQnICYmIHBsICE9PSAndW5kZWZpbmVkJyApIHtcblxuICAgIHByLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAtMSApO1xuICAgIHBsLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAxICk7XG5cbiAgICB2YXIgaW5kZXggPSAwLCB0b3RhbCA9IDU7XG5cblxuXG4gICAgc2xpZGUoMCk7XG4gIH1cbn1cbi8vIGVvZiBwYWdpbmF0aW9uXG5cbi8vIGJ4U2xpZGVyXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIGlmKCQoJy5ieHNsaWRlci5kb2N1bWVudGF0aW9uJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5ieHNsaWRlci5kb2N1bWVudGF0aW9uJykuYnhTbGlkZXIoe1xuICAgICAgYXV0bzpmYWxzZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBwYXVzZTo4MDAsXG4gICAgICBwYWdlcjp0cnVlLFxuICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuICAgICAgcHJldlRleHQ6JycsXG4gICAgICBuZXh0VGV4dDonJyxcbiAgICAgIGJ1aWxkUGFnZXI6IGZ1bmN0aW9uKHNsaWRlSW5kZXgpe1xuICAgICAgICBzd2l0Y2goc2xpZGVJbmRleCl7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTEuanBnJyk7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTIuanBnJyk7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTMuanBnJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwYWdlckN1c3RvbTonI2J4LXBhZ2VyMidcbiAgICB9KTtcblxuICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ4LXdyYXBwZXInKS5hZGRDbGFzcygnYngtZG9jdW1lbnRhdGlvbicpO1xuICB9XG59KTtcblxuXG5mdW5jdGlvbiBzZXRJbWcoaW5wdXRJbWdTcmMpIHtcbiAgdmFyIGltZ1NyYyA9ICc8aW1nIHNyYz1cIi4uL2ltZy8nICsgaW5wdXRJbWdTcmMgKyAnXCI+JztcbiAgcmV0dXJuIGltZ1NyYztcbn1cblxuLy8gZW9mIGJ4U2xpZGVyXG5cblxuLy8gZmFxIHRvZ2dsZSBwYWdlXG5cbi8vICQoJy5saXN0LWl0ZW0gLnRpdGxlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4vLyB9KVxuXG5kcm9wRG93bkNvbnRlbnRJdGVtKCk7XG5cbmZ1bmN0aW9uIGRyb3BEb3duQ29udGVudEl0ZW0oKXtcbiAgaWYgKCQoJy5qc0ZhcUl0ZW0nKS5sZW5ndGggPiAwKSB7XG4gICAgJCgnLmZhcS1pdGVtLXRpdGxlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8vIEVPRiBmYXEgdG9nZ2xlIHBhZ2VcblxuXG4vLyBidXJnZXJcblxuICAvLyBidXJnZXIgYW5pbWF0aW9uIGl0c2VsZjpcblxuXG5cbiQoXCJhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG59KTtcblxuJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG5cbiAgLy8gaGlkZSBtZW51IHRvZ2dsZSBhbmQgY29udmVydCB0byBidXJnZXJcbiAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAvLyAkKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgLy8gJCgnLm1vZGFsLW92ZXJsYXknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbi8vICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuLy8gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuLy8gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbi8vICB9IGVsc2Uge1xuLy8gICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuLy8gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbi8vICB9XG4vLyB9KTtcblxuLy8gJCgnLm1lbnUtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbi8vICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4vLyAgICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4vLyB9KTtcbiAgLy8gbWFpbi1uYXYtYmFyIGFwcGVhcmVuY2U6XG5cbi8vIEVPRiBidXJnZXJcblxuLy8gaW5kZXggbW9kYWwgY29udGVudFxuXG4gIC8vICQoJy5yZXF1ZXN0LWNhbGxiYWNrJyk7XG4gIC8vXG4gIC8vICQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpO1xuICAvLyAkKCcubWFpbi1uYXYnKTtcbiAgLy8gJCgnLm1lbnUtb3ZlcmxheScpO1xuICAvL1xuICAvLyAkKCcubW9kYWwtY29udGVudCcpO1xuICAvLyAkKCcubW9kYWwtb3ZlcmxheScpO1xuICAvLyAkKCcubW9kYWwtY29udGVudC1jbG9zZScpO1xuICAvLyAkKCcuY2FsbGJhY2stZm9ybScpO1xuICAvLyAkKCdbbmFtZT1sb2dpbl0nKTtcbiAgLy8gJCgnW25hbWU9cGhvbmVdJyk7XG4gIC8vICQoJy5sb2dpbicpO1xuICAvL1xuICAvLyAkKCcudmFydmFydmFyJyk7XG4gIC8vICQoJy52YXJ2YXJ2YXInKTtcblxuXG5cblxuICBzaG93TWFpbk1vZGFsKCk7XG4gIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKXtcbiAgICAkKCcucmVxdWVzdC1jYWxsYmFjaycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1haW5Nb2RhbCgpO1xuICBmdW5jdGlvbiBjbG9zZU1haW5Nb2RhbCgpe1xuICAgICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZU1haW5PdmVybGF5KCk7XG4gIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpe1xuICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tGb3JtVmFsdWVzKCk7XG4gIGZ1bmN0aW9uIGNoZWNrRm9ybVZhbHVlcygpe1xuICAgICQoJy5jYWxsYmFjay1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGlmICghKCQoJ1tuYW1lPWxvZ2luXScpLnZhbCgpKSB8fCAhKCQoJ1tuYW1lPXBob25lXScpLnZhbCgpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgJCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9KTtcblxuXG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpKSB7XG4gIG1vZGFsQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKSB7XG4gIC8vIHZhciBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY2FsbGJhY2snKTtcbiAgLy9cbiAgLy8gdmFyIGxpbmtOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKTtcbiAgLy8gdmFyIG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbiAgLy8gdmFyIG1haW5OYXZPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtb3ZlcmxheScpO1xuICAvL1xuICAvLyB2YXIgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuICAvLyB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gIC8vIHZhciBjbG9zZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50LWNsb3NlJyk7XG4gIC8vXG4gIC8vIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGxiYWNrLWZvcm0nKTtcbiAgLy8gdmFyIGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9bG9naW5dJyk7XG4gIC8vIHZhciBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXBob25lXScpO1xuICAvLyB2YXIgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbicpO1xuXG5cblxuXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAvLyAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gIC8vICAgICBpZihwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8IG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAvLyAgICAgICBmYWRlSW4ocG9wdXApO1xuICAvLyAgICAgICBmYWRlSW4ob3ZlcmxheSk7XG4gIC8vICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAvLyAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gZnVuY3Rpb24gZmFkZUluKGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgb3AgPSAxOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gIC8vICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAvLyAgICAgaWYgKG9wIDw9IDAuMSkge1xuICAvLyAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgLy8gICAgIG9wIC09IG9wICogMC4xO1xuICAvLyAgIH0sIDEwKVxuICAvLyB9O1xuICAvL1xuICAvLyBmdW5jdGlvbiBmYWRlT3V0KGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgb3AgPSAwLjE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgLy8gICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAvLyAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAvLyAgICAgaWYgKG9wID49IDEpIHtcbiAgLy8gICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAvLyAgICAgb3AgKz0gb3AgKiAwLjE7XG4gIC8vICAgICAvLyBhbGVydCgnaGVyZScpO1xuICAvLyAgIH0sIDEwKTtcbiAgLy8gfTtcblxufVxuXG5cbi8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuLy8gZHJvcERvd24gbWVudVxuXG5cblxuLy8gdjJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlZW50ZXIoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlbGVhdmUoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJC5kYXRhKHRoaXMsICd0aW1lcicsIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9LCB0aGlzKSwgMjAwKSk7XG5cbiAgICAgICAgfVxuICAgICk7XG4gIH1cbn0pOyAvLyBlbmQgcmVhZHlcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzEzNTEzL2pxdWVyeS1kcm9wZG93bi1tZW51LXVzaW5nLXNsaWRldXAtYW5kLXNsaWRlZG93bi1vbi1ob3Zlci1pcy1qdW1weVxuXG5cblxuXG5cbi8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuXG4vLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuKGZ1bmN0aW9uKCkge1xuICAgLy8geW91ciBwYWdlIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICAgLy8gdGhlIERPTSB3aWxsIGJlIGF2YWlsYWJsZSBoZXJlXG5cbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICBcdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICBcdFx0dmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgXHRcdCQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICBcdH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4gICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgIH0pO1xuXG5cbn0pKCk7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxMjIzMzYvamF2YXNjcmlwdC1yZXNpemUtZXZlbnQtbm90LXdvcmtpbmc/bm9yZWRpcmVjdD0xJmxxPTFcblxuXG5pZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gIC8vQWRkIHlvdXIgamF2YXNjcmlwdCBmb3IgbGFyZ2Ugc2NyZWVucyBoZXJlXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgfSkoKTtcbn1cbi8vIGh0dHA6Ly93d3cuY29hbG1hcmNoLmNvbS9ibG9nL2hvdy10by1leGVjdXRlLWphdmFzY3JpcHQtYmFzZWQtb24tc2NyZWVuLXNpemUtdXNpbmctanF1ZXJ5XG5cbi8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4vLyBwYXJhbGxheFxuXG52YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gcGFyYWxsYXggZWZmZWN0IGZ1bmN0aW9uXG5mdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcil7XG4gIGlmIChpc0lFKSB7XG4gICQocHJseEJnKS5jc3Moe1xuICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICB9KTtcbiAgcmV0dXJuO1xuICB9XG4gIGlmKCh3U2Nyb2xsICsgJCh3aW5kb3cpLmhlaWdodCgpKSA+PSAkKHBybHhCZykub2Zmc2V0KCkudG9wKSB7XG4gICAgY29uc29sZS5sb2coXCJ0cnVlIVwiKTtcbiAgJChwcmx4QmcpLmNzcyh7XG4gICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKCcgKyAoKCQocHJseENvbnRhaW5lcikub2Zmc2V0KCkudG9wIC0gd1Njcm9sbCkgLyAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDApICogZmFjdG9yICsnJSknXG4gIH0pO1xuICB9XG59XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgaWYoJCgnLnBhcmFsbGF4LWluZGV4JykubGVuZ3RoID4gMCl7XG4gICAgcGFyYWxsYXgoJy5ib3R0b20tbGluZScsICcucGFyYWxsYXgtaW5kZXgnLCAwLjYpO1xuICB9XG59KTtcblxuLy8gRU9GcGFyYWxsYXhcblxuXG4vLyBob21lIHNsaWRlclxuXG4kKCcuc2xpZGUgLmNvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAkKCcubmV4dGVuZC1hcnJvdycpLmZhZGVUb2dnbGUoIDMwMCApO1xufSk7XG5cblxuLy8gRU9GIGhvbWUgc2xpZGVyXG5cblxufSk7IC8vIEVPRiBkb2N1bWVudC5yZWFkeSBNQUlOXG4iXX0=
