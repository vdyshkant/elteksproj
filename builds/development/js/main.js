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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV8xODE0OGZmNy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cbi8vIHNlYXJjaCBmaWVsZFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG5cbiAgYW5pbWF0ZUhlYWRlclNlYXJjaCgpO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVIZWFkZXJTZWFyY2goKXtcbiAgICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbi8vIGVvZiBzZWFyY2ggZmllbGRcblxuLy8gY291bnRlclxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICQoJyNzdGF0cycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3crNjUwKSB7XG4gICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5mdW5jdGlvbiBhbmltYXRlQ291bnRlcigpe1xuICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgZHVyYXRpb24gPSBbMS41LCA0LjUsIDMuNSwgM10sXG4gICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICBudW1iZXJwLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICBudW1iZXJTdGVwOiBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXBcbiAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZW9mIGNvdW50ZXJcblxuXG4vLyBwcm9kdWN0cyBob3ZlclxuXG5hbmltYXRlUHJvZHVjdEl0ZW0oKTtcblxuZnVuY3Rpb24gYW5pbWF0ZVByb2R1Y3RJdGVtKCl7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGVvZiBwcm9kdWN0cyBob3ZlclxuXG5cblxuLy8gcGFnaW5hdGlvblxuXG4gIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgIGluZGV4ID0gTWF0aC5taW4oIE1hdGgubWF4KCBpbmRleCArIG9mZnNldCwgMCApLCB0b3RhbCAtIDEgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY250cicgKS5pbm5lckhUTUwgPSAoIGluZGV4ICsgMSApICsgJyAvICcgKyB0b3RhbDtcblxuICAgIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgIHBsLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gIH1cblxuICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgaWYgKHByICYmIHBsKSB7XG5cbiAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG5cblxuICAgIHNsaWRlKDApO1xuICB9XG4vLyBlb2YgcGFnaW5hdGlvblxuXG4vLyBieFNsaWRlclxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgICAkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmJ4U2xpZGVyKHtcbiAgICAgIGF1dG86ZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6ODAwLFxuICAgICAgcGFnZXI6dHJ1ZSxcbiAgICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgIHByZXZUZXh0OicnLFxuICAgICAgbmV4dFRleHQ6JycsXG4gICAgICBidWlsZFBhZ2VyOiBmdW5jdGlvbihzbGlkZUluZGV4KXtcbiAgICAgICAgc3dpdGNoKHNsaWRlSW5kZXgpe1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0xLmpwZycpO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0yLmpwZycpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0zLmpwZycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcGFnZXJDdXN0b206JyNieC1wYWdlcjInXG4gICAgfSk7XG5cbiAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5ieC13cmFwcGVyJykuYWRkQ2xhc3MoJ2J4LWRvY3VtZW50YXRpb24nKTtcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gc2V0SW1nKGlucHV0SW1nU3JjKSB7XG4gIHZhciBpbWdTcmMgPSAnPGltZyBzcmM9XCIuLi9pbWcvJyArIGlucHV0SW1nU3JjICsgJ1wiPic7XG4gIHJldHVybiBpbWdTcmM7XG59XG5cbi8vIGVvZiBieFNsaWRlclxuXG5cbi8vIGZhcSB0b2dnbGUgcGFnZVxuXG4vLyAkKCcubGlzdC1pdGVtIC50aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbi8vICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuLy8gfSlcblxuXG4gIC8vIGlmICgkKCcuanNGYXFJdGVtJykubGVuZ3RoID4gMCkge1xuJCgnLmZhcS1pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbn0pO1xuICAvLyB9XG5cblxuXG4vLyBFT0YgZmFxIHRvZ2dsZSBwYWdlXG5cblxuLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG5cblxuXG4kKFwiYS5idXJnZXItbWVudSwgLm1lbnUtb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xufSk7XG5cbiQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuXG4gIC8vIGhpZGUgbWVudSB0b2dnbGUgYW5kIGNvbnZlcnQgdG8gYnVyZ2VyXG4gICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIC8vICQoJy5tb2RhbC1vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cbi8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4vLyAgaWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbi8vICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbi8vICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4vLyAgfSBlbHNlIHtcbi8vICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbi8vICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4vLyAgfVxuLy8gfSk7XG5cbi8vICQoJy5tZW51LW92ZXJsYXknKS5jbGljayhmdW5jdGlvbihlKXtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4vLyAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuLy8gICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuLy8gfSk7XG4gIC8vIG1haW4tbmF2LWJhciBhcHBlYXJlbmNlOlxuXG4vLyBFT0YgYnVyZ2VyXG5cbi8vIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKTtcbiAgLy8gJCgnLm1haW4tbmF2Jyk7XG4gIC8vICQoJy5tZW51LW92ZXJsYXknKTtcbiAgLy9cbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKTtcbiAgLy8gJCgnLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy8gJCgnLmNhbGxiYWNrLWZvcm0nKTtcbiAgLy8gJCgnW25hbWU9bG9naW5dJyk7XG4gIC8vICQoJ1tuYW1lPXBob25lXScpO1xuICAvLyAkKCcubG9naW4nKTtcbiAgLy9cbiAgLy8gJCgnLnZhcnZhcnZhcicpO1xuICAvLyAkKCcudmFydmFydmFyJyk7XG5cblxuXG5cbiAgc2hvd01haW5Nb2RhbCgpO1xuICBmdW5jdGlvbiBzaG93TWFpbk1vZGFsKCl7XG4gICAgJCgnLnJlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgY2xvc2VNYWluTW9kYWwoKTtcbiAgZnVuY3Rpb24gY2xvc2VNYWluTW9kYWwoKXtcbiAgICAkKCcubW9kYWwtY29udGVudC1jbG9zZScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGhpZGVNYWluT3ZlcmxheSgpO1xuICBmdW5jdGlvbiBoaWRlTWFpbk92ZXJsYXkoKXtcbiAgICAkKCcubW9kYWwtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRm9ybVZhbHVlcygpO1xuICBmdW5jdGlvbiBjaGVja0Zvcm1WYWx1ZXMoKXtcbiAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgICAgICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICAgICAgIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgICAgICAgICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgIH1cblxuICAgIH1cbiAgfSk7XG5cblxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKSkge1xuICBtb2RhbENvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxDb250ZW50KCkge1xuICAvLyB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrJyk7XG4gIC8vXG4gIC8vIHZhciBsaW5rTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY2FsbGJhY2stbmF2Jyk7XG4gIC8vIHZhciBtYWluTmF2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tbmF2Jyk7XG4gIC8vIHZhciBtYWluTmF2T3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZW51LW92ZXJsYXknKTtcbiAgLy9cbiAgLy8gdmFyIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcbiAgLy8gdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICAvLyB2YXIgY2xvc2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC1jbG9zZScpO1xuICAvL1xuICAvLyB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsYmFjay1mb3JtJyk7XG4gIC8vIHZhciBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWxvZ2luXScpO1xuICAvLyB2YXIgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1waG9uZV0nKTtcbiAgLy8gdmFyIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKTtcblxuXG5cblxuICAvLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgLy8gICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAvLyAgICAgaWYocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fCBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgLy8gICAgICAgZmFkZUluKHBvcHVwKTtcbiAgLy8gICAgICAgZmFkZUluKG92ZXJsYXkpO1xuICAvLyAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgLy8gICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgLy8gICAgIH1cbiAgLy8gICB9XG4gIC8vIH0pO1xuXG4gIC8vIGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50KSB7XG4gIC8vICAgdmFyIG9wID0gMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAvLyAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIGlmIChvcCA8PSAwLjEpIHtcbiAgLy8gICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAvLyAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gIC8vICAgICBvcCAtPSBvcCAqIDAuMTtcbiAgLy8gICB9LCAxMClcbiAgLy8gfTtcbiAgLy9cbiAgLy8gZnVuY3Rpb24gZmFkZU91dChlbGVtZW50KSB7XG4gIC8vICAgdmFyIG9wID0gMC4xOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gIC8vICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgLy8gICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgLy8gICAgIGlmIChvcCA+PSAxKSB7XG4gIC8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgLy8gICAgIG9wICs9IG9wICogMC4xO1xuICAvLyAgICAgLy8gYWxlcnQoJ2hlcmUnKTtcbiAgLy8gICB9LCAxMCk7XG4gIC8vIH07XG5cbn1cblxuXG4vLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cbi8vIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIHYyXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBpZiAoICQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWVudGVyKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KCQuZGF0YSh0aGlzLCAndGltZXInKSk7XG5cbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVEb3duKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWxlYXZlKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICQuZGF0YSh0aGlzLCAndGltZXInLCBzZXRUaW1lb3V0KCQucHJveHkoZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnN0b3AodHJ1ZSwgdHJ1ZSkuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgICAgfSwgdGhpcyksIDIwMCkpO1xuXG4gICAgICAgIH1cbiAgICApO1xuICB9XG59KTsgLy8gZW5kIHJlYWR5XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMzcxMzUxMy9qcXVlcnktZHJvcGRvd24tbWVudS11c2luZy1zbGlkZXVwLWFuZC1zbGlkZWRvd24tb24taG92ZXItaXMtanVtcHlcblxuXG5cblxuXG4vLyBFT0YgZHJvcERvd24gbWVudVxuXG5cblxuLy8gZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cbihmdW5jdGlvbigpIHtcbiAgIC8vIHlvdXIgcGFnZSBpbml0aWFsaXphdGlvbiBjb2RlIGhlcmVcbiAgIC8vIHRoZSBET00gd2lsbCBiZSBhdmFpbGFibGUgaGVyZVxuXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgXHRcdHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgIFx0XHQkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgXHR9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gICB9KTtcblxuXG59KSgpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTIyMzM2L2phdmFzY3JpcHQtcmVzaXplLWV2ZW50LW5vdC13b3JraW5nP25vcmVkaXJlY3Q9MSZscT0xXG5cblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gIH0pKCk7XG59XG4vLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4vLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cblxuLy8gcGFyYWxsYXhcblxudmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IDAsXG4gIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbi8vIHBhcmFsbGF4IGVmZmVjdCBmdW5jdGlvblxuZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3Ipe1xuICBpZiAoaXNJRSkge1xuICAkKHBybHhCZykuY3NzKHtcbiAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgfSk7XG4gIHJldHVybjtcbiAgfVxuICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgIGNvbnNvbGUubG9nKFwidHJ1ZSFcIik7XG4gICQocHJseEJnKS5jc3Moe1xuICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICB9KTtcbiAgfVxufVxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgIHBhcmFsbGF4KCcuYm90dG9tLWxpbmUnLCAnLnBhcmFsbGF4LWluZGV4JywgMC42KTtcbiAgfVxufSk7XG5cbi8vIEVPRnBhcmFsbGF4XG5cblxuLy8gaG9tZSBzbGlkZXJcblxuJCgnLnNsaWRlIC5jb250YWluZXInKS5ob3ZlcihmdW5jdGlvbigpIHtcbiAgJCgnLm5leHRlbmQtYXJyb3cnKS5mYWRlVG9nZ2xlKCAzMDAgKTtcbn0pO1xuXG5cbi8vIEVPRiBob21lIHNsaWRlclxuXG5cbn0pOyAvLyBFT0YgZG9jdW1lbnQucmVhZHkgTUFJTlxuIl19
