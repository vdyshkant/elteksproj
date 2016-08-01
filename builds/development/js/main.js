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


  // if ($('.jsFaqItem').length > 0) {
$('.faq-item-title').click(function(){
  $(this).siblings('.faq-item-content').slideToggle();
  $(this).parent('.jsFaqItem').toggleClass('active');
});


$('.products-nav-menu').click(function(){
  $('.jsProdMenuContent').slideToggle();
  $('.jsColumnTitle').toggleClass('active');
});
  // }



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

 if (window.matchMedia("(max-width: 1199px)").matches) {
   var string = 'Выберите категорию';
   $('.page-solutions .products-nav-menu .column-title').text( string );
 } else {
   var origin = 'Категории';
   $('.page-solutions .products-nav-menu .column-title').text( origin );
 }

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV8zYjVlMWQ1NC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXG4vLyBzZWFyY2ggZmllbGRcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXG4gIGFuaW1hdGVIZWFkZXJTZWFyY2goKTtcblxuICBmdW5jdGlvbiBhbmltYXRlSGVhZGVyU2VhcmNoKCl7XG4gICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4vLyBlb2Ygc2VhcmNoIGZpZWxkXG5cbi8vIGNvdW50ZXJcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICQodGhpcykuYW5pbWF0ZU51bWJlcih7XG4gICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGVvZiBjb3VudGVyXG5cblxuLy8gcHJvZHVjdHMgaG92ZXJcblxuYW5pbWF0ZVByb2R1Y3RJdGVtKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVQcm9kdWN0SXRlbSgpe1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgaWYgKCQoJy5pdGVtIC5tYWtlM2QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcuaXRlbSAubWFrZTNkJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMjBcIik7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbi8vIHBhZ2luYXRpb25cblxuICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICBpbmRleCA9IE1hdGgubWluKCBNYXRoLm1heCggaW5kZXggKyBvZmZzZXQsIDAgKSwgdG90YWwgLSAxICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICBwci5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICBwbC5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICB9XG5cbiAgdmFyIHByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5sZWZ0JyApO1xuICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLnJpZ2h0JyApO1xuXG4gIGlmIChwciAmJiBwbCkge1xuXG4gICAgcHIub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIC0xICk7XG4gICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIDEgKTtcblxuICAgIHZhciBpbmRleCA9IDAsIHRvdGFsID0gNTtcblxuXG5cbiAgICBzbGlkZSgwKTtcbiAgfVxuLy8gZW9mIHBhZ2luYXRpb25cblxuLy8gYnhTbGlkZXJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYoJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5sZW5ndGggPiAwKSB7XG4gICAgJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5ieFNsaWRlcih7XG4gICAgICBhdXRvOmZhbHNlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHBhdXNlOjgwMCxcbiAgICAgIHBhZ2VyOnRydWUsXG4gICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICBwcmV2VGV4dDonJyxcbiAgICAgIG5leHRUZXh0OicnLFxuICAgICAgYnVpbGRQYWdlcjogZnVuY3Rpb24oc2xpZGVJbmRleCl7XG4gICAgICAgIHN3aXRjaChzbGlkZUluZGV4KXtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMS5qcGcnKTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMi5qcGcnKTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMy5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHBhZ2VyQ3VzdG9tOicjYngtcGFnZXIyJ1xuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYngtd3JhcHBlcicpLmFkZENsYXNzKCdieC1kb2N1bWVudGF0aW9uJyk7XG4gIH1cbn0pO1xuXG5cbmZ1bmN0aW9uIHNldEltZyhpbnB1dEltZ1NyYykge1xuICB2YXIgaW1nU3JjID0gJzxpbWcgc3JjPVwiLi4vaW1nLycgKyBpbnB1dEltZ1NyYyArICdcIj4nO1xuICByZXR1cm4gaW1nU3JjO1xufVxuXG4vLyBlb2YgYnhTbGlkZXJcblxuXG4vLyBmYXEgdG9nZ2xlIHBhZ2VcblxuLy8gJCgnLmxpc3QtaXRlbSAudGl0bGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICQodGhpcykuc2libGluZ3MoJy5jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbi8vIH0pXG5cblxuICAvLyBpZiAoJCgnLmpzRmFxSXRlbScpLmxlbmd0aCA+IDApIHtcbiQoJy5mYXEtaXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQodGhpcykuc2libGluZ3MoJy5mYXEtaXRlbS1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuXG4kKCcucHJvZHVjdHMtbmF2LW1lbnUnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcuanNQcm9kTWVudUNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAkKCcuanNDb2x1bW5UaXRsZScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbn0pO1xuICAvLyB9XG5cblxuXG4vLyBFT0YgZmFxIHRvZ2dsZSBwYWdlXG5cblxuLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG5cblxuXG4kKFwiYS5idXJnZXItbWVudSwgLm1lbnUtb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xufSk7XG5cbiQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuXG4gIC8vIGhpZGUgbWVudSB0b2dnbGUgYW5kIGNvbnZlcnQgdG8gYnVyZ2VyXG4gICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIC8vICQoJy5tb2RhbC1vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4vLyAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbi8vICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbi8vICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4vLyAgfSBlbHNlIHtcbi8vICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbi8vICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4vLyAgfVxuLy8gfSk7XG5cbi8vICQoJy5tZW51LW92ZXJsYXknKS5jbGljayhmdW5jdGlvbihlKXtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4vLyAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuLy8gICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuLy8gfSk7XG4gIC8vIG1haW4tbmF2LWJhciBhcHBlYXJlbmNlOlxuXG4vLyBFT0YgYnVyZ2VyXG5cbi8vIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKTtcbiAgLy8gJCgnLm1haW4tbmF2Jyk7XG4gIC8vICQoJy5tZW51LW92ZXJsYXknKTtcbiAgLy9cbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKTtcbiAgLy8gJCgnLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy8gJCgnLmNhbGxiYWNrLWZvcm0nKTtcbiAgLy8gJCgnW25hbWU9bG9naW5dJyk7XG4gIC8vICQoJ1tuYW1lPXBob25lXScpO1xuICAvLyAkKCcubG9naW4nKTtcbiAgLy9cbiAgLy8gJCgnLnZhcnZhcnZhcicpO1xuICAvLyAkKCcudmFydmFydmFyJyk7XG5cblxuXG5cbiAgc2hvd01haW5Nb2RhbCgpO1xuICBmdW5jdGlvbiBzaG93TWFpbk1vZGFsKCl7XG4gICAgJCgnLnJlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNYWluTW9kYWwoKTtcbiAgZnVuY3Rpb24gY2xvc2VNYWluTW9kYWwoKXtcbiAgICAkKCcubW9kYWwtY29udGVudC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVNYWluT3ZlcmxheSgpO1xuICBmdW5jdGlvbiBoaWRlTWFpbk92ZXJsYXkoKXtcbiAgICAkKCcubW9kYWwtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRm9ybVZhbHVlcygpO1xuICBmdW5jdGlvbiBjaGVja0Zvcm1WYWx1ZXMoKXtcbiAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSk7XG5cblxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKSkge1xuICBtb2RhbENvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxDb250ZW50KCkge1xuICAvLyB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrJyk7XG4gIC8vXG4gIC8vIHZhciBsaW5rTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY2FsbGJhY2stbmF2Jyk7XG4gIC8vIHZhciBtYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XG4gIC8vIHZhciBtYWluTmF2T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW92ZXJsYXknKTtcbiAgLy9cbiAgLy8gdmFyIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcbiAgLy8gdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAvLyB2YXIgY2xvc2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC1jbG9zZScpO1xuICAvL1xuICAvLyB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsYmFjay1mb3JtJyk7XG4gIC8vIHZhciBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWxvZ2luXScpO1xuICAvLyB2YXIgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1waG9uZV0nKTtcbiAgLy8gdmFyIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKTtcblxuXG5cblxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgLy8gICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAvLyAgICAgaWYocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fCBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgLy8gICAgICAgZmFkZUluKHBvcHVwKTtcbiAgLy8gICAgICAgZmFkZUluKG92ZXJsYXkpO1xuICAvLyAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgLy8gICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0pO1xuXG4gIC8vIGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50KSB7XG4gIC8vICAgdmFyIG9wID0gMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAvLyAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIGlmIChvcCA8PSAwLjEpIHtcbiAgLy8gICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAvLyAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gIC8vICAgICBvcCAtPSBvcCAqIDAuMTtcbiAgLy8gICB9LCAxMClcbiAgLy8gfTtcbiAgLy9cbiAgLy8gZnVuY3Rpb24gZmFkZU91dChlbGVtZW50KSB7XG4gIC8vICAgdmFyIG9wID0gMC4xOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gIC8vICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgLy8gICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICAgIGlmIChvcCA+PSAxKSB7XG4gIC8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgLy8gICAgIG9wICs9IG9wICogMC4xO1xuICAvLyAgICAgLy8gYWxlcnQoJ2hlcmUnKTtcbiAgLy8gICB9LCAxMCk7XG4gIC8vIH07XG5cbn1cblxuXG4vLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cbi8vIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIHYyXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBpZiAoICQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWVudGVyKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWxlYXZlKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICQuZGF0YSh0aGlzLCAndGltZXInLCBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfSwgdGhpcyksIDIwMCkpO1xuXG4gICAgICAgIH1cbiAgICApO1xuICB9XG59KTsgLy8gZW5kIHJlYWR5XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzcxMzUxMy9qcXVlcnktZHJvcGRvd24tbWVudS11c2luZy1zbGlkZXVwLWFuZC1zbGlkZWRvd24tb24taG92ZXItaXMtanVtcHlcblxuXG5cblxuXG4vLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuLy8gZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cbihmdW5jdGlvbigpIHtcbiAgIC8vIHlvdXIgcGFnZSBpbml0aWFsaXphdGlvbiBjb2RlIGhlcmVcbiAgIC8vIHRoZSBET00gd2lsbCBiZSBhdmFpbGFibGUgaGVyZVxuXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgXHRcdHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgIFx0XHQkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgXHR9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gICB9KTtcblxuXG59KSgpO1xuXG4gaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogMTE5OXB4KVwiKS5tYXRjaGVzKSB7XG4gICB2YXIgc3RyaW5nID0gJ9CS0YvQsdC10YDQuNGC0LUg0LrQsNGC0LXQs9C+0YDQuNGOJztcbiAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIHN0cmluZyApO1xuIH0gZWxzZSB7XG4gICB2YXIgb3JpZ2luID0gJ9Ca0LDRgtC10LPQvtGA0LjQuCc7XG4gICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBvcmlnaW4gKTtcbiB9XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxMjIzMzYvamF2YXNjcmlwdC1yZXNpemUtZXZlbnQtbm90LXdvcmtpbmc/bm9yZWRpcmVjdD0xJmxxPTFcblxuXG5pZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gIC8vQWRkIHlvdXIgamF2YXNjcmlwdCBmb3IgbGFyZ2Ugc2NyZWVucyBoZXJlXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgfSkoKTtcbn1cbi8vIGh0dHA6Ly93d3cuY29hbG1hcmNoLmNvbS9ibG9nL2hvdy10by1leGVjdXRlLWphdmFzY3JpcHQtYmFzZWQtb24tc2NyZWVuLXNpemUtdXNpbmctanF1ZXJ5XG5cbi8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuXG4vLyBwYXJhbGxheFxuXG52YXIgaXNJRSA9IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIk1TSUUgXCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJUcmlkZW50XCIpID4gMCB8fCBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJFZGdlXCIpID4gMCxcbiAgd1Njcm9sbCA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcblxuLy8gcGFyYWxsYXggZWZmZWN0IGZ1bmN0aW9uXG5mdW5jdGlvbiBwYXJhbGxheChwcmx4QmcsIHBybHhDb250YWluZXIsIGZhY3Rvcil7XG4gIGlmIChpc0lFKSB7XG4gICQocHJseEJnKS5jc3Moe1xuICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwcHgpJ1xuICB9KTtcbiAgcmV0dXJuO1xuICB9XG4gIGlmKCh3U2Nyb2xsICsgJCh3aW5kb3cpLmhlaWdodCgpKSA+PSAkKHBybHhCZykub2Zmc2V0KCkudG9wKSB7XG4gICAgY29uc29sZS5sb2coXCJ0cnVlIVwiKTtcbiAgJChwcmx4QmcpLmNzcyh7XG4gICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKCcgKyAoKCQocHJseENvbnRhaW5lcikub2Zmc2V0KCkudG9wIC0gd1Njcm9sbCkgLyAkKHdpbmRvdykuaGVpZ2h0KCkgKiAxMDApICogZmFjdG9yICsnJSknXG4gIH0pO1xuICB9XG59XG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKXtcbiAgd1Njcm9sbCA9ICQodGhpcykuc2Nyb2xsVG9wKCk7XG5cbiAgaWYoJCgnLnBhcmFsbGF4LWluZGV4JykubGVuZ3RoID4gMCl7XG4gICAgcGFyYWxsYXgoJy5ib3R0b20tbGluZScsICcucGFyYWxsYXgtaW5kZXgnLCAwLjYpO1xuICB9XG59KTtcblxuLy8gRU9GcGFyYWxsYXhcblxuXG4vLyBob21lIHNsaWRlclxuXG4kKCcuc2xpZGUgLmNvbnRhaW5lcicpLmhvdmVyKGZ1bmN0aW9uKCkge1xuICAkKCcubmV4dGVuZC1hcnJvdycpLmZhZGVUb2dnbGUoIDMwMCApO1xufSk7XG5cblxuLy8gRU9GIGhvbWUgc2xpZGVyXG5cblxufSk7IC8vIEVPRiBkb2N1bWVudC5yZWFkeSBNQUlOXG4iXX0=
