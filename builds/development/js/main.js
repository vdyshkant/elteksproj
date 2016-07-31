(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
// the entry point for browserify
// var logger = require('./logger');
//
// logger.log('Hurray, it woprks! Amd it changed as well. :)');

// search field

animateHeaderSearch();

function animateHeaderSearch(){
  if ($("#inpt-search").length > 0) {
    $("#inpt-search").on("focus", function () {
       $(this).parent('label').addClass('active');
    });

    $("#inpt-search").on('blur', function () {
      if($(this).val().length == 0)
        $(this).parent('label').removeClass('active');
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
  var pr = document.querySelector( '.paginate.left' );
  var pl = document.querySelector( '.paginate.right' );

  if (pr != 'undefined' && pl != 'undefined' ) {

    pr.onclick = slide.bind( this, -1 );
    pl.onclick = slide.bind( this, 1 );

    var index = 0, total = 5;

    function slide(offset) {
      index = Math.min( Math.max( index + offset, 0 ), total - 1 );

      document.querySelector( '.cntr' ).innerHTML = ( index + 1 ) + ' / ' + total;

      pr.setAttribute( 'data-state', index === 0 ? 'disabled' : '' );
      pl.setAttribute( 'data-state', index === total - 1 ? 'disabled' : '' );
    }

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
    })
  }
}



// EOF faq toggle page




// index modal content

if (document.querySelector('.modal-content')) {
  modalContent();
}

function modalContent() {
  var link = document.querySelector('.request-callback');
  var popup = document.querySelector('.modal-content');
  var overlay = document.querySelector('.modal-overlay');
  var close = popup.querySelector('.modal-content-close');
  var form = document.querySelector('.callback-form');
  var login = document.querySelector('[name=login]');
  var phone = document.querySelector('[name=phone]');
  var storage = localStorage.getItem('login');

  link.addEventListener('click', function(e) {
    e.preventDefault();
    fadeOut(popup);
    fadeOut(overlay);
    popup.classList.add('active');
    overlay.classList.add('active');
    if (storage) {
      login.value = storage;
      phone.focus();
    } else {
      login.focus();
    }
  });

  close.addEventListener('click', function(e) {
    e.preventDefault();
    fadeIn(popup);
    fadeIn(overlay);
    popup.classList.remove('active');
    overlay.classList.remove('active');
    // popup.classList.remove('.modal-error');
  });

  overlay.addEventListener('click', function(e){
    e.preventDefault();
    fadeIn(popup);
    fadeIn(overlay);
    popup.classList.remove('active');
    overlay.classList.remove('active');
  });

  form.addEventListener('submit', function(e) {
    if (!login.value || !phone.value) {
      e.preventDefault();
      // popup.classList.add('modal-error');
    } else {
      localStorage.setItem('login', login.value);
    }
  })

  window.addEventListener('keydown', function(e) {
    if (e.keyCode === 27) {
      if(popup.classList.contains('active') || overlay.classList.contains('active')) {
        fadeIn(popup);
        fadeIn(overlay);
        popup.classList.remove('active');
        overlay.classList.remove('active');
      }
    }
  });

  function fadeIn(element) {
    var op = 1; // initial opacity;
    var timer = setInterval(function () {
      if (op <= 0.1) {
        clearInterval(timer);
        element.style.display = 'none';
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op -= op * 0.1;
    }, 10)
  };

  function fadeOut(element) {
    var op = 0.1; // initial opacity;
    element.style.display = 'block';
    var timer = setInterval(function() {
      if (op >= 1) {
        clearInterval(timer);
      }
      element.style.opacity = op;
      element.style.filter = 'alpha(opacity=' + op * 100 + ')';
      op += op * 0.1;
      // alert('here');
    }, 10);
  };

};


// EOF index modal content


// dropDown menu



// v2

// $(document).ready(function() {
//     $( '.dropdown' ).hover(
//         function(){
//             $(this).children('.sub-menu').slideDown(500, 'easeInOutCubic');
//         },
//         function(){
//             $(this).children('.sub-menu').slideUp(500, 'easeInOutCubic');
//         }
//     );
// }); // end ready
$(document).ready(function() {
  if ( $(window).width() > 768) {
    $( '.dropdown' ).mouseenter(
        function(){
            $(this).children('.sub-menu').slideDown(500, 'easeInOutCubic');
            $(this).addClass('active');
        }
    );
    $( '.dropdown' ).mouseleave(
        function(){
            $(this).children('.sub-menu').slideUp(500, 'easeInOutCubic');
            $(this).removeClass('active');
        }
    );
  }
}); // end ready




// EOF dropDown menu


// burger

  // burger animation itself:
  $(document).ready(function(){


    $("a.burger-menu").click(function(e){
      e.preventDefault();
      $('.burger-link').toggleClass("burger-active");


      var open = false;
        if (open == false) {
            jQuery('.main-nav').slideDown(500, 'easeInOutCubic');
            open = true;
        } else {
            jQuery('.main-nav').slideUp(500, 'easeInOutCubic');
            open = false;
        }


    });


  });
  // main-nav-bar appearence:




// EOF burger


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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV8zYTFmM2ZiNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyB0aGUgZW50cnkgcG9pbnQgZm9yIGJyb3dzZXJpZnlcbi8vIHZhciBsb2dnZXIgPSByZXF1aXJlKCcuL2xvZ2dlcicpO1xuLy9cbi8vIGxvZ2dlci5sb2coJ0h1cnJheSwgaXQgd29wcmtzISBBbWQgaXQgY2hhbmdlZCBhcyB3ZWxsLiA6KScpO1xuXG4vLyBzZWFyY2ggZmllbGRcblxuYW5pbWF0ZUhlYWRlclNlYXJjaCgpO1xuXG5mdW5jdGlvbiBhbmltYXRlSGVhZGVyU2VhcmNoKCl7XG4gIGlmICgkKFwiI2lucHQtc2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcblxuICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICBpZigkKHRoaXMpLnZhbCgpLmxlbmd0aCA9PSAwKVxuICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG4gIH1cbn1cblxuXG4vLyBlb2Ygc2VhcmNoIGZpZWxkXG5cbi8vIGNvdW50ZXJcblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcbiAgICAkKCcjc3RhdHMnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgaW1hZ2VQb3MgPSAkKHRoaXMpLm9mZnNldCgpLnRvcDtcbiAgICAgIHZhciB0b3BPZldpbmRvdyA9ICQod2luZG93KS5zY3JvbGxUb3AoKTtcbiAgICAgIGlmIChpbWFnZVBvcyA8IHRvcE9mV2luZG93KzY1MCkge1xuICAgICAgICBhbmltYXRlQ291bnRlcigpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcblxuZnVuY3Rpb24gYW5pbWF0ZUNvdW50ZXIoKXtcbiAgaWYgKCQoJyNzdGF0cycpLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgbnVtYmVycyA9IFs4LCA0NTAwMDAsIDEwLCAyNV0sXG4gICAgICAgIGR1cmF0aW9uID0gWzEuNSwgNC41LCAzLjUsIDNdLFxuICAgICAgICBudW1iZXJwID0gJCgnI3N0YXRzIC5zdGF0IGgyJyksXG4gICAgICAgIGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcCA9ICQuYW5pbWF0ZU51bWJlci5udW1iZXJTdGVwRmFjdG9yaWVzLnNlcGFyYXRvcignICcpO1xuXG4gICAgbnVtYmVycC5lYWNoKGZ1bmN0aW9uKGkpIHtcbiAgICAgICQodGhpcykuYW5pbWF0ZU51bWJlcih7XG4gICAgICAgIG51bWJlcjogbnVtYmVyc1tpXSxcbiAgICAgICAgbnVtYmVyU3RlcDogY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwXG4gICAgICB9LCBkdXJhdGlvbltpXSAqIDEwMDApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIGVvZiBjb3VudGVyXG5cblxuLy8gcHJvZHVjdHMgaG92ZXJcblxuYW5pbWF0ZVByb2R1Y3RJdGVtKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVQcm9kdWN0SXRlbSgpe1xuICAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuXG4gICAgaWYgKCQoJy5pdGVtIC5tYWtlM2QnKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKCcuaXRlbSAubWFrZTNkJykuaG92ZXIoZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMjBcIik7XG4gICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBlb2YgcHJvZHVjdHMgaG92ZXJcblxuXG5cbi8vIHBhZ2luYXRpb25cblxuYW5pbWF0ZVBhZ2luYXRpb24oKTtcbmZ1bmN0aW9uIGFuaW1hdGVQYWdpbmF0aW9uKCkge1xuICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgaWYgKHByICE9ICd1bmRlZmluZWQnICYmIHBsICE9ICd1bmRlZmluZWQnICkge1xuXG4gICAgcHIub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIC0xICk7XG4gICAgcGwub25jbGljayA9IHNsaWRlLmJpbmQoIHRoaXMsIDEgKTtcblxuICAgIHZhciBpbmRleCA9IDAsIHRvdGFsID0gNTtcblxuICAgIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgICAgaW5kZXggPSBNYXRoLm1pbiggTWF0aC5tYXgoIGluZGV4ICsgb2Zmc2V0LCAwICksIHRvdGFsIC0gMSApO1xuXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLmNudHInICkuaW5uZXJIVE1MID0gKCBpbmRleCArIDEgKSArICcgLyAnICsgdG90YWw7XG5cbiAgICAgIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgICAgcGwuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSB0b3RhbCAtIDEgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICB9XG5cbiAgICBzbGlkZSgwKTtcbiAgfVxufVxuLy8gZW9mIHBhZ2luYXRpb25cblxuLy8gYnhTbGlkZXJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcbiAgaWYoJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5sZW5ndGggPiAwKSB7XG4gICAgJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5ieFNsaWRlcih7XG4gICAgICBhdXRvOmZhbHNlLFxuICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgIHBhdXNlOjgwMCxcbiAgICAgIHBhZ2VyOnRydWUsXG4gICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICBwcmV2VGV4dDonJyxcbiAgICAgIG5leHRUZXh0OicnLFxuICAgICAgYnVpbGRQYWdlcjogZnVuY3Rpb24oc2xpZGVJbmRleCl7XG4gICAgICAgIHN3aXRjaChzbGlkZUluZGV4KXtcbiAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMS5qcGcnKTtcbiAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMi5qcGcnKTtcbiAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICByZXR1cm4gc2V0SW1nKCdzbGlkZXItdGh1bWItMy5qcGcnKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIHBhZ2VyQ3VzdG9tOicjYngtcGFnZXIyJ1xuICAgIH0pO1xuXG4gICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYngtd3JhcHBlcicpLmFkZENsYXNzKCdieC1kb2N1bWVudGF0aW9uJyk7XG4gIH1cbn0pO1xuXG5cbmZ1bmN0aW9uIHNldEltZyhpbnB1dEltZ1NyYykge1xuICB2YXIgaW1nU3JjID0gJzxpbWcgc3JjPVwiLi4vaW1nLycgKyBpbnB1dEltZ1NyYyArICdcIj4nO1xuICByZXR1cm4gaW1nU3JjO1xufVxuXG4vLyBlb2YgYnhTbGlkZXJcblxuXG4vLyBmYXEgdG9nZ2xlIHBhZ2VcblxuLy8gJCgnLmxpc3QtaXRlbSAudGl0bGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4vLyAgICQodGhpcykuc2libGluZ3MoJy5jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbi8vIH0pXG5cbmRyb3BEb3duQ29udGVudEl0ZW0oKTtcblxuZnVuY3Rpb24gZHJvcERvd25Db250ZW50SXRlbSgpe1xuICBpZiAoJCgnLmpzRmFxSXRlbScpLmxlbmd0aCA+IDApIHtcbiAgICAkKCcuZmFxLWl0ZW0tdGl0bGUnKS5vbignY2xpY2snLGZ1bmN0aW9uKCl7XG4gICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxLWl0ZW0tY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KVxuICB9XG59XG5cblxuXG4vLyBFT0YgZmFxIHRvZ2dsZSBwYWdlXG5cblxuXG5cbi8vIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JykpIHtcbiAgbW9kYWxDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsQ29udGVudCgpIHtcbiAgdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICB2YXIgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuICB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gIHZhciBjbG9zZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50LWNsb3NlJyk7XG4gIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGxiYWNrLWZvcm0nKTtcbiAgdmFyIGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9bG9naW5dJyk7XG4gIHZhciBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXBob25lXScpO1xuICB2YXIgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbicpO1xuXG4gIGxpbmsuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZhZGVPdXQocG9wdXApO1xuICAgIGZhZGVPdXQob3ZlcmxheSk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBpZiAoc3RvcmFnZSkge1xuICAgICAgbG9naW4udmFsdWUgPSBzdG9yYWdlO1xuICAgICAgcGhvbmUuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9naW4uZm9jdXMoKTtcbiAgICB9XG4gIH0pO1xuXG4gIGNsb3NlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmYWRlSW4ocG9wdXApO1xuICAgIGZhZGVJbihvdmVybGF5KTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIC8vIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJy5tb2RhbC1lcnJvcicpO1xuICB9KTtcblxuICBvdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSl7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZhZGVJbihwb3B1cCk7XG4gICAgZmFkZUluKG92ZXJsYXkpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIH0pO1xuXG4gIGZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuICAgIGlmICghbG9naW4udmFsdWUgfHwgIXBob25lLnZhbHVlKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAvLyBwb3B1cC5jbGFzc0xpc3QuYWRkKCdtb2RhbC1lcnJvcicpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbG9naW4nLCBsb2dpbi52YWx1ZSk7XG4gICAgfVxuICB9KVxuXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gICAgICBpZihwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8IG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICBmYWRlSW4ocG9wdXApO1xuICAgICAgICBmYWRlSW4ob3ZlcmxheSk7XG4gICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgZnVuY3Rpb24gZmFkZUluKGVsZW1lbnQpIHtcbiAgICB2YXIgb3AgPSAxOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgaWYgKG9wIDw9IDAuMSkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgICAgIG9wIC09IG9wICogMC4xO1xuICAgIH0sIDEwKVxuICB9O1xuXG4gIGZ1bmN0aW9uIGZhZGVPdXQoZWxlbWVudCkge1xuICAgIHZhciBvcCA9IDAuMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gICAgICBpZiAob3AgPj0gMSkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gICAgICBvcCArPSBvcCAqIDAuMTtcbiAgICAgIC8vIGFsZXJ0KCdoZXJlJyk7XG4gICAgfSwgMTApO1xuICB9O1xuXG59O1xuXG5cbi8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuLy8gZHJvcERvd24gbWVudVxuXG5cblxuLy8gdjJcblxuLy8gJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4vLyAgICAgJCggJy5kcm9wZG93bicgKS5ob3Zlcihcbi8vICAgICAgICAgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnNsaWRlRG93big1MDAsICdlYXNlSW5PdXRDdWJpYycpO1xuLy8gICAgICAgICB9LFxuLy8gICAgICAgICBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVVcCg1MDAsICdlYXNlSW5PdXRDdWJpYycpO1xuLy8gICAgICAgICB9XG4vLyAgICAgKTtcbi8vIH0pOyAvLyBlbmQgcmVhZHlcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICBpZiAoICQod2luZG93KS53aWR0aCgpID4gNzY4KSB7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWVudGVyKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVEb3duKDUwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWxlYXZlKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVVcCg1MDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICB9XG59KTsgLy8gZW5kIHJlYWR5XG5cblxuXG5cbi8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuLy8gYnVyZ2VyXG5cbiAgLy8gYnVyZ2VyIGFuaW1hdGlvbiBpdHNlbGY6XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cblxuICAgICQoXCJhLmJ1cmdlci1tZW51XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuXG5cbiAgICAgIHZhciBvcGVuID0gZmFsc2U7XG4gICAgICAgIGlmIChvcGVuID09IGZhbHNlKSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5tYWluLW5hdicpLnNsaWRlRG93big1MDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgb3BlbiA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBqUXVlcnkoJy5tYWluLW5hdicpLnNsaWRlVXAoNTAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgIG9wZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuXG5cbiAgICB9KTtcblxuXG4gIH0pO1xuICAvLyBtYWluLW5hdi1iYXIgYXBwZWFyZW5jZTpcblxuXG5cblxuLy8gRU9GIGJ1cmdlclxuXG5cbi8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAvLyB5b3VyIHBhZ2UgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgIFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICBcdFx0JCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgIFx0fSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICAgfSk7XG5cblxufSkoKTtcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG5cbmlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgLy9BZGQgeW91ciBqYXZhc2NyaXB0IGZvciBsYXJnZSBzY3JlZW5zIGhlcmVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICB9KSgpO1xufVxuLy8gaHR0cDovL3d3dy5jb2FsbWFyY2guY29tL2Jsb2cvaG93LXRvLWV4ZWN1dGUtamF2YXNjcmlwdC1iYXNlZC1vbi1zY3JlZW4tc2l6ZS11c2luZy1qcXVlcnlcblxuLy8gRU9GIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcbiJdfQ==
