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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV8zNTJmYTk5NC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXG4vLyBzZWFyY2ggZmllbGRcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgpIHtcblxuXG4gIGFuaW1hdGVIZWFkZXJTZWFyY2goKTtcblxuICBmdW5jdGlvbiBhbmltYXRlSGVhZGVyU2VhcmNoKCl7XG4gICAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH0pO1xuXG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PT0gMCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuXG4vLyBlb2Ygc2VhcmNoIGZpZWxkXG5cbi8vIGNvdW50ZXJcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICQodGhpcykuYW5pbWF0ZU51bWJlcih7XG4gICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGVvZiBjb3VudGVyXG5cblxuLy8gcHJvZHVjdHMgaG92ZXJcblxuYW5pbWF0ZVByb2R1Y3RJdGVtKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVQcm9kdWN0SXRlbSgpe1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgaWYgKCQoJy5pdGVtIC5tYWtlM2QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcuaXRlbSAubWFrZTNkJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMjBcIik7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbi8vIHBhZ2luYXRpb25cblxuICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICBpbmRleCA9IE1hdGgubWluKCBNYXRoLm1heCggaW5kZXggKyBvZmZzZXQsIDAgKSwgdG90YWwgLSAxICk7XG5cbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICBwci5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICBwbC5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICB9XG5cbiAgdmFyIHByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5sZWZ0JyApO1xuICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLnJpZ2h0JyApO1xuXG4gIGlmIChwciAmJiBwbCkge1xuXG4gICAgcHIub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIC0xICk7XG4gICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIDEgKTtcblxuICAgIHZhciBpbmRleCA9IDAsIHRvdGFsID0gNTtcblxuXG5cbiAgICBzbGlkZSgwKTtcbiAgfVxuLy8gZW9mIHBhZ2luYXRpb25cblxuLy8gYnhTbGlkZXJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYoJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5sZW5ndGggPiAwKSB7XG4gICAgJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5ieFNsaWRlcih7XG4gICAgICBhdXRvOmZhbHNlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHBhdXNlOjgwMCxcbiAgICAgIHBhZ2VyOnRydWUsXG4gICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICBwcmV2VGV4dDonJyxcbiAgICAgIG5leHRUZXh0OicnLFxuICAgICAgYnVpbGRQYWdlcjogZnVuY3Rpb24oc2xpZGVJbmRleCl7XG4gICAgICAgIHN3aXRjaChzbGlkZUluZGV4KXtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMS5qcGcnKTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMi5qcGcnKTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMy5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHBhZ2VyQ3VzdG9tOicjYngtcGFnZXIyJ1xuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYngtd3JhcHBlcicpLmFkZENsYXNzKCdieC1kb2N1bWVudGF0aW9uJyk7XG4gIH1cbn0pO1xuXG5cbmZ1bmN0aW9uIHNldEltZyhpbnB1dEltZ1NyYykge1xuICB2YXIgaW1nU3JjID0gJzxpbWcgc3JjPVwiLi4vaW1nLycgKyBpbnB1dEltZ1NyYyArICdcIj4nO1xuICByZXR1cm4gaW1nU3JjO1xufVxuXG4vLyBlb2YgYnhTbGlkZXJcblxuXG4vLyBmYXEgdG9nZ2xlIHBhZ2VcblxuLy8gJCgnLmxpc3QtaXRlbSAudGl0bGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICQodGhpcykuc2libGluZ3MoJy5jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbi8vIH0pXG5cblxuICAvLyBpZiAoJCgnLmpzRmFxSXRlbScpLmxlbmd0aCA+IDApIHtcbiQoJy5mYXEtaXRlbS10aXRsZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQodGhpcykuc2libGluZ3MoJy5mYXEtaXRlbS1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcbiAgLy8gfVxuXG5cblxuLy8gRU9GIGZhcSB0b2dnbGUgcGFnZVxuXG5cbi8vIGJ1cmdlclxuXG4gIC8vIGJ1cmdlciBhbmltYXRpb24gaXRzZWxmOlxuXG5cblxuJChcImEuYnVyZ2VyLW1lbnUsIC5tZW51LW92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbn0pO1xuXG4kKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcblxuICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gIC8vICQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAvLyAkKCcubW9kYWwtb3ZlcmxheScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuLy8gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4vLyAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4vLyAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuLy8gIH0gZWxzZSB7XG4vLyAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4vLyAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuLy8gIH1cbi8vIH0pO1xuXG4vLyAkKCcubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuLy8gICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbi8vICAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbi8vIH0pO1xuICAvLyBtYWluLW5hdi1iYXIgYXBwZWFyZW5jZTpcblxuLy8gRU9GIGJ1cmdlclxuXG4vLyBpbmRleCBtb2RhbCBjb250ZW50XG5cbiAgLy8gJCgnLnJlcXVlc3QtY2FsbGJhY2snKTtcbiAgLy9cbiAgLy8gJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2Jyk7XG4gIC8vICQoJy5tYWluLW5hdicpO1xuICAvLyAkKCcubWVudS1vdmVybGF5Jyk7XG4gIC8vXG4gIC8vICQoJy5tb2RhbC1jb250ZW50Jyk7XG4gIC8vICQoJy5tb2RhbC1vdmVybGF5Jyk7XG4gIC8vICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJyk7XG4gIC8vICQoJy5jYWxsYmFjay1mb3JtJyk7XG4gIC8vICQoJ1tuYW1lPWxvZ2luXScpO1xuICAvLyAkKCdbbmFtZT1waG9uZV0nKTtcbiAgLy8gJCgnLmxvZ2luJyk7XG4gIC8vXG4gIC8vICQoJy52YXJ2YXJ2YXInKTtcbiAgLy8gJCgnLnZhcnZhcnZhcicpO1xuXG5cblxuXG4gIHNob3dNYWluTW9kYWwoKTtcbiAgZnVuY3Rpb24gc2hvd01haW5Nb2RhbCgpe1xuICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTWFpbk1vZGFsKCk7XG4gIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCl7XG4gICAgJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlTWFpbk92ZXJsYXkoKTtcbiAgZnVuY3Rpb24gaGlkZU1haW5PdmVybGF5KCl7XG4gICAgJCgnLm1vZGFsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0Zvcm1WYWx1ZXMoKTtcbiAgZnVuY3Rpb24gY2hlY2tGb3JtVmFsdWVzKCl7XG4gICAgJCgnLmNhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgaWYgKCEoJCgnW25hbWU9bG9naW5dJykudmFsKCkpIHx8ICEoJCgnW25hbWU9cGhvbmVdJykudmFsKCkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0pO1xuXG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JykpIHtcbiAgbW9kYWxDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsQ29udGVudCgpIHtcbiAgLy8gdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyB2YXIgbGlua05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdk92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1vdmVybGF5Jyk7XG4gIC8vXG4gIC8vIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIC8vIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy9cbiAgLy8gdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2stZm9ybScpO1xuICAvLyB2YXIgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1sb2dpbl0nKTtcbiAgLy8gdmFyIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9cGhvbmVdJyk7XG4gIC8vIHZhciBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJyk7XG5cblxuXG5cbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgLy8gICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHwgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gIC8vICAgICAgIGZhZGVJbihwb3B1cCk7XG4gIC8vICAgICAgIGZhZGVJbihvdmVybGF5KTtcbiAgLy8gICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICAvLyBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgLy8gICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBpZiAob3AgPD0gMC4xKSB7XG4gIC8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAvLyAgICAgb3AgLT0gb3AgKiAwLjE7XG4gIC8vICAgfSwgMTApXG4gIC8vIH07XG4gIC8vXG4gIC8vIGZ1bmN0aW9uIGZhZGVPdXQoZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDAuMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAvLyAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIC8vICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vICAgICBpZiAob3AgPj0gMSkge1xuICAvLyAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAvLyAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gIC8vICAgICBvcCArPSBvcCAqIDAuMTtcbiAgLy8gICAgIC8vIGFsZXJ0KCdoZXJlJyk7XG4gIC8vICAgfSwgMTApO1xuICAvLyB9O1xuXG59XG5cblxuLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG4vLyBkcm9wRG93biBtZW51XG5cblxuXG4vLyB2MlxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VlbnRlcihcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkLmRhdGEodGhpcywgJ3RpbWVyJywgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0sIHRoaXMpLCAyMDApKTtcblxuICAgICAgICB9XG4gICAgKTtcbiAgfVxufSk7IC8vIGVuZCByZWFkeVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3MTM1MTMvanF1ZXJ5LWRyb3Bkb3duLW1lbnUtdXNpbmctc2xpZGV1cC1hbmQtc2xpZGVkb3duLW9uLWhvdmVyLWlzLWp1bXB5XG5cblxuXG5cblxuLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAvLyB5b3VyIHBhZ2UgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgIFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICBcdFx0JCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgIFx0fSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICAgfSk7XG5cblxufSkoKTtcblxuIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBzdHJpbmcgKTtcbiB9IGVsc2Uge1xuICAgdmFyIG9yaWdpbiA9ICfQmtCw0YLQtdCz0L7RgNC40LgnO1xuICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dCggb3JpZ2luICk7XG4gfVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTIyMzM2L2phdmFzY3JpcHQtcmVzaXplLWV2ZW50LW5vdC13b3JraW5nP25vcmVkaXJlY3Q9MSZscT0xXG5cblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gIH0pKCk7XG59XG4vLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4vLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cblxuLy8gcGFyYWxsYXhcblxudmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IDAsXG4gIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbi8vIHBhcmFsbGF4IGVmZmVjdCBmdW5jdGlvblxuZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3Ipe1xuICBpZiAoaXNJRSkge1xuICAkKHBybHhCZykuY3NzKHtcbiAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgfSk7XG4gIHJldHVybjtcbiAgfVxuICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgIGNvbnNvbGUubG9nKFwidHJ1ZSFcIik7XG4gICQocHJseEJnKS5jc3Moe1xuICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICB9KTtcbiAgfVxufVxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgIHBhcmFsbGF4KCcuYm90dG9tLWxpbmUnLCAnLnBhcmFsbGF4LWluZGV4JywgMC42KTtcbiAgfVxufSk7XG5cbi8vIEVPRnBhcmFsbGF4XG5cblxuLy8gaG9tZSBzbGlkZXJcblxuJCgnLnNsaWRlIC5jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgJCgnLm5leHRlbmQtYXJyb3cnKS5mYWRlVG9nZ2xlKCAzMDAgKTtcbn0pO1xuXG5cbi8vIEVPRiBob21lIHNsaWRlclxuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
