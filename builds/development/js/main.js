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
      $('.modal-content').addClass('active');
      $('.modal-overlay').addClass('active');
    });
  }

  closeMainModal();
  function closeMainModal(){
    $('.modal-content-close').click(function(){
      $('.modal-content').fadeOut( 300 );
      $('.modal-overlay').fadeOut( 300 );
      $('.modal-content').removeClass('active');
      $('.modal-overlay').removeClass('active');
    });
  }

  hideMainOverlay();
  function hideMainOverlay(){
    $('.modal-overlay').click(function(){
      $('.modal-content').fadeOut( 300 );
      $('.modal-overlay').fadeOut( 300 );
      $('.modal-content').removeClass('active');
      $('.modal-overlay').removeClass('active');
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
      if ($('.modal-content').hasClass( 'active' ) || $('.modal-overlay').hasClass( 'active' )) {
        $('.modal-content').fadeOut( 300 );
        $('.modal-overlay').fadeOut( 300 );
        $('.modal-content').removeClass('active');
        $('.modal-overlay').removeClass('active');
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


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV84ZmNmM2JjOC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8gdGhlIGVudHJ5IHBvaW50IGZvciBicm93c2VyaWZ5XG4vLyB2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcbi8vXG4vLyBsb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcHJrcyEgQW1kIGl0IGNoYW5nZWQgYXMgd2VsbC4gOiknKTtcblxuLy8gc2VhcmNoIGZpZWxkXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cblxuICBhbmltYXRlSGVhZGVyU2VhcmNoKCk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZUhlYWRlclNlYXJjaCgpe1xuICAgIGlmICgkKFwiI2lucHQtc2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuLy8gZW9mIHNlYXJjaCBmaWVsZFxuXG4vLyBjb3VudGVyXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcbiAgICAgICAgYW5pbWF0ZUNvdW50ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCl7XG4gIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgdmFyIG51bWJlcnMgPSBbOCwgNDUwMDAwLCAxMCwgMjVdLFxuICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXAgPSAkLmFuaW1hdGVOdW1iZXIubnVtYmVyU3RlcEZhY3Rvcmllcy5zZXBhcmF0b3IoJyAnKTtcblxuICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICBudW1iZXI6IG51bWJlcnNbaV0sXG4gICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBlb2YgY291bnRlclxuXG5cbi8vIHByb2R1Y3RzIGhvdmVyXG5cbmFuaW1hdGVQcm9kdWN0SXRlbSgpO1xuXG5mdW5jdGlvbiBhbmltYXRlUHJvZHVjdEl0ZW0oKXtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gZW9mIHByb2R1Y3RzIGhvdmVyXG5cblxuXG4vLyBwYWdpbmF0aW9uXG5cbmFuaW1hdGVQYWdpbmF0aW9uKCk7XG5mdW5jdGlvbiBhbmltYXRlUGFnaW5hdGlvbigpIHtcbiAgZnVuY3Rpb24gc2xpZGUob2Zmc2V0KSB7XG4gICAgaW5kZXggPSBNYXRoLm1pbiggTWF0aC5tYXgoIGluZGV4ICsgb2Zmc2V0LCAwICksIHRvdGFsIC0gMSApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jbnRyJyApLmlubmVySFRNTCA9ICggaW5kZXggKyAxICkgKyAnIC8gJyArIHRvdGFsO1xuXG4gICAgcHIuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSAwID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgcGwuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSB0b3RhbCAtIDEgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgfVxuICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgaWYgKHByICE9PSAndW5kZWZpbmVkJyAmJiBwbCAhPT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG5cblxuICAgIHNsaWRlKDApO1xuICB9XG59XG4vLyBlb2YgcGFnaW5hdGlvblxuXG4vLyBieFNsaWRlclxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgICAkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmJ4U2xpZGVyKHtcbiAgICAgIGF1dG86ZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6ODAwLFxuICAgICAgcGFnZXI6dHJ1ZSxcbiAgICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgIHByZXZUZXh0OicnLFxuICAgICAgbmV4dFRleHQ6JycsXG4gICAgICBidWlsZFBhZ2VyOiBmdW5jdGlvbihzbGlkZUluZGV4KXtcbiAgICAgICAgc3dpdGNoKHNsaWRlSW5kZXgpe1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0xLmpwZycpO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0yLmpwZycpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0zLmpwZycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcGFnZXJDdXN0b206JyNieC1wYWdlcjInXG4gICAgfSk7XG5cbiAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5ieC13cmFwcGVyJykuYWRkQ2xhc3MoJ2J4LWRvY3VtZW50YXRpb24nKTtcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gc2V0SW1nKGlucHV0SW1nU3JjKSB7XG4gIHZhciBpbWdTcmMgPSAnPGltZyBzcmM9XCIuLi9pbWcvJyArIGlucHV0SW1nU3JjICsgJ1wiPic7XG4gIHJldHVybiBpbWdTcmM7XG59XG5cbi8vIGVvZiBieFNsaWRlclxuXG5cbi8vIGZhcSB0b2dnbGUgcGFnZVxuXG4vLyAkKCcubGlzdC1pdGVtIC50aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbi8vICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuLy8gfSlcblxuZHJvcERvd25Db250ZW50SXRlbSgpO1xuXG5mdW5jdGlvbiBkcm9wRG93bkNvbnRlbnRJdGVtKCl7XG4gIGlmICgkKCcuanNGYXFJdGVtJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5mYXEtaXRlbS10aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuc2libGluZ3MoJy5mYXEtaXRlbS1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vLyBFT0YgZmFxIHRvZ2dsZSBwYWdlXG5cblxuLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG5cblxuXG4kKFwiYS5idXJnZXItbWVudSwgLm1lbnUtb3ZlcmxheVwiKS5jbGljayhmdW5jdGlvbihlKXtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xufSk7XG5cbiQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuXG4gIC8vIGhpZGUgbWVudSB0b2dnbGUgYW5kIGNvbnZlcnQgdG8gYnVyZ2VyXG4gICQoJy5idXJnZXItbGluaycpLnJlbW92ZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVPdXQoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gIC8vICQoJy5tb2RhbC1vdmVybGF5JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cbi8vICQoJy5tZW51LW92ZXJsYXknKS5jbGljayhmdW5jdGlvbihlKXtcbi8vICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICAkKCcuYnVyZ2VyLWxpbmsnKS50b2dnbGVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4vLyAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlVG9nZ2xlKDIwMCwgJ2xpbmVhcicpO1xuLy8gICAkKCcubWFpbi1uYXYnKS5zbGlkZVRvZ2dsZSgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuLy8gfSk7XG4gIC8vIG1haW4tbmF2LWJhciBhcHBlYXJlbmNlOlxuXG4vLyBFT0YgYnVyZ2VyXG5cbi8vIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyAkKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKTtcbiAgLy8gJCgnLm1haW4tbmF2Jyk7XG4gIC8vICQoJy5tZW51LW92ZXJsYXknKTtcbiAgLy9cbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQnKTtcbiAgLy8gJCgnLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy8gJCgnLmNhbGxiYWNrLWZvcm0nKTtcbiAgLy8gJCgnW25hbWU9bG9naW5dJyk7XG4gIC8vICQoJ1tuYW1lPXBob25lXScpO1xuICAvLyAkKCcubG9naW4nKTtcbiAgLy9cbiAgLy8gJCgnLnZhcnZhcnZhcicpO1xuICAvLyAkKCcudmFydmFydmFyJyk7XG5cblxuXG5cbiAgc2hvd01haW5Nb2RhbCgpO1xuICBmdW5jdGlvbiBzaG93TWFpbk1vZGFsKCl7XG4gICAgJCgnLnJlcXVlc3QtY2FsbGJhY2snKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlSW4oIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTWFpbk1vZGFsKCk7XG4gIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCl7XG4gICAgJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZU1haW5PdmVybGF5KCk7XG4gIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpe1xuICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNoZWNrRm9ybVZhbHVlcygpO1xuICBmdW5jdGlvbiBjaGVja0Zvcm1WYWx1ZXMoKXtcbiAgICAkKCcuY2FsbGJhY2stZm9ybScpLnN1Ym1pdChmdW5jdGlvbiggZXZlbnQgKSB7XG4gICAgICBpZiAoISgkKCdbbmFtZT1sb2dpbl0nKS52YWwoKSkgfHwgISgkKCdbbmFtZT1waG9uZV0nKS52YWwoKSkpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gICQoJ2h0bWwgYm9keScpLm9uKCdrZXl1cCcsIGZ1bmN0aW9uKGUpe1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBpZiAoJCgnLm1vZGFsLWNvbnRlbnQnKS5oYXNDbGFzcyggJ2FjdGl2ZScgKSB8fCAkKCcubW9kYWwtb3ZlcmxheScpLmhhc0NsYXNzKCAnYWN0aXZlJyApKSB7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgICAgICQoJy5tb2RhbC1jb250ZW50JykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JykpIHtcbiAgbW9kYWxDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsQ29udGVudCgpIHtcbiAgLy8gdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyB2YXIgbGlua05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdk92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1vdmVybGF5Jyk7XG4gIC8vXG4gIC8vIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIC8vIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy9cbiAgLy8gdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2stZm9ybScpO1xuICAvLyB2YXIgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1sb2dpbl0nKTtcbiAgLy8gdmFyIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9cGhvbmVdJyk7XG4gIC8vIHZhciBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJyk7XG5cblxuXG5cbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgLy8gICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHwgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gIC8vICAgICAgIGZhZGVJbihwb3B1cCk7XG4gIC8vICAgICAgIGZhZGVJbihvdmVybGF5KTtcbiAgLy8gICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICAvLyBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgLy8gICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBpZiAob3AgPD0gMC4xKSB7XG4gIC8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAvLyAgICAgb3AgLT0gb3AgKiAwLjE7XG4gIC8vICAgfSwgMTApXG4gIC8vIH07XG4gIC8vXG4gIC8vIGZ1bmN0aW9uIGZhZGVPdXQoZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDAuMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAvLyAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIC8vICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vICAgICBpZiAob3AgPj0gMSkge1xuICAvLyAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAvLyAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gIC8vICAgICBvcCArPSBvcCAqIDAuMTtcbiAgLy8gICAgIC8vIGFsZXJ0KCdoZXJlJyk7XG4gIC8vICAgfSwgMTApO1xuICAvLyB9O1xuXG59XG5cblxuLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG4vLyBkcm9wRG93biBtZW51XG5cblxuXG4vLyB2MlxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VlbnRlcihcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkLmRhdGEodGhpcywgJ3RpbWVyJywgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0sIHRoaXMpLCAyMDApKTtcblxuICAgICAgICB9XG4gICAgKTtcbiAgfVxufSk7IC8vIGVuZCByZWFkeVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3MTM1MTMvanF1ZXJ5LWRyb3Bkb3duLW1lbnUtdXNpbmctc2xpZGV1cC1hbmQtc2xpZGVkb3duLW9uLWhvdmVyLWlzLWp1bXB5XG5cblxuXG5cblxuLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAvLyB5b3VyIHBhZ2UgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgIFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICBcdFx0JCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgIFx0fSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICAgfSk7XG5cblxufSkoKTtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG5cbmlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgLy9BZGQgeW91ciBqYXZhc2NyaXB0IGZvciBsYXJnZSBzY3JlZW5zIGhlcmVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICB9KSgpO1xufVxuLy8gaHR0cDovL3d3dy5jb2FsbWFyY2guY29tL2Jsb2cvaG93LXRvLWV4ZWN1dGUtamF2YXNjcmlwdC1iYXNlZC1vbi1zY3JlZW4tc2l6ZS11c2luZy1qcXVlcnlcblxuLy8gRU9GIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG59KTsgLy8gRU9GIGRvY3VtZW50LnJlYWR5IE1BSU5cbiJdfQ==
