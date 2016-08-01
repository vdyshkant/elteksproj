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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3d3L0RvY3VtZW50cy93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9ub2RlX21vZHVsZXMvYnJvd3Nlci1wYWNrL19wcmVsdWRlLmpzIiwiL2hvbWUvd3cvRG9jdW1lbnRzL3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L3NyYy9qcy9mYWtlXzJhYjBjMWM5LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJcInVzZSBzdHJpY3RcIjtcbi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cbi8vIHNlYXJjaCBmaWVsZFxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCkge1xuXG5cbiAgYW5pbWF0ZUhlYWRlclNlYXJjaCgpO1xuXG4gIGZ1bmN0aW9uIGFuaW1hdGVIZWFkZXJTZWFyY2goKXtcbiAgICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKFwiZm9jdXNcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgfSk7XG5cbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oJ2JsdXInLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoID09PSAwKXtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG5cbi8vIGVvZiBzZWFyY2ggZmllbGRcblxuLy8gY291bnRlclxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICQoJyNzdGF0cycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3crNjUwKSB7XG4gICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5mdW5jdGlvbiBhbmltYXRlQ291bnRlcigpe1xuICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgZHVyYXRpb24gPSBbMS41LCA0LjUsIDMuNSwgM10sXG4gICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICBudW1iZXJwLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICBudW1iZXJTdGVwOiBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXBcbiAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZW9mIGNvdW50ZXJcblxuXG4vLyBwcm9kdWN0cyBob3ZlclxuXG5hbmltYXRlUHJvZHVjdEl0ZW0oKTtcblxuZnVuY3Rpb24gYW5pbWF0ZVByb2R1Y3RJdGVtKCl7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGVvZiBwcm9kdWN0cyBob3ZlclxuXG5cblxuLy8gcGFnaW5hdGlvblxuXG4gIGZ1bmN0aW9uIHNsaWRlKG9mZnNldCkge1xuICAgIGluZGV4ID0gTWF0aC5taW4oIE1hdGgubWF4KCBpbmRleCArIG9mZnNldCwgMCApLCB0b3RhbCAtIDEgKTtcblxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY250cicgKS5pbm5lckhUTUwgPSAoIGluZGV4ICsgMSApICsgJyAvICcgKyB0b3RhbDtcblxuICAgIHByLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gMCA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgIHBsLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gIH1cblxuICB2YXIgcHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLmxlZnQnICk7XG4gIHZhciBwbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUucmlnaHQnICk7XG5cbiAgaWYgKHByICYmIHBsKSB7XG5cbiAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG5cblxuICAgIHNsaWRlKDApO1xuICB9XG4vLyBlb2YgcGFnaW5hdGlvblxuXG4vLyBieFNsaWRlclxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgICAkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmJ4U2xpZGVyKHtcbiAgICAgIGF1dG86ZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6ODAwLFxuICAgICAgcGFnZXI6dHJ1ZSxcbiAgICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgIHByZXZUZXh0OicnLFxuICAgICAgbmV4dFRleHQ6JycsXG4gICAgICBidWlsZFBhZ2VyOiBmdW5jdGlvbihzbGlkZUluZGV4KXtcbiAgICAgICAgc3dpdGNoKHNsaWRlSW5kZXgpe1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0xLmpwZycpO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0yLmpwZycpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0zLmpwZycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcGFnZXJDdXN0b206JyNieC1wYWdlcjInXG4gICAgfSk7XG5cbiAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5ieC13cmFwcGVyJykuYWRkQ2xhc3MoJ2J4LWRvY3VtZW50YXRpb24nKTtcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gc2V0SW1nKGlucHV0SW1nU3JjKSB7XG4gIHZhciBpbWdTcmMgPSAnPGltZyBzcmM9XCIuLi9pbWcvJyArIGlucHV0SW1nU3JjICsgJ1wiPic7XG4gIHJldHVybiBpbWdTcmM7XG59XG5cbi8vIGVvZiBieFNsaWRlclxuXG5cbi8vIGZhcSB0b2dnbGUgcGFnZVxuXG4vLyAkKCcubGlzdC1pdGVtIC50aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbi8vICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuLy8gfSlcblxuXG4gIC8vIGlmICgkKCcuanNGYXFJdGVtJykubGVuZ3RoID4gMCkge1xuJCgnLmZhcS1pdGVtLXRpdGxlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAkKHRoaXMpLnBhcmVudCgnLmpzRmFxSXRlbScpLnRvZ2dsZUNsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG5cbiQoJy5wcm9kdWN0cy1uYXYtbWVudScpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICQoJy5qc1Byb2RNZW51Q29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICQoJy5qc0NvbHVtblRpdGxlJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG4gIC8vIH1cblxuXG5cbi8vIEVPRiBmYXEgdG9nZ2xlIHBhZ2VcblxuXG4vLyBidXJnZXJcblxuICAvLyBidXJnZXIgYW5pbWF0aW9uIGl0c2VsZjpcblxuXG5cbiQoXCJhLmJ1cmdlci1tZW51LCAubWVudS1vdmVybGF5XCIpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbiAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4gICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG59KTtcblxuJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlSW4oIDMwMCApO1xuICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG5cbiAgLy8gaGlkZSBtZW51IHRvZ2dsZSBhbmQgY29udmVydCB0byBidXJnZXJcbiAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAvLyAkKCcubW9kYWwtY29udGVudCcpLmFkZENsYXNzKCdhY3RpdmUnKTtcbiAgLy8gJCgnLm1vZGFsLW92ZXJsYXknKS5hZGRDbGFzcygnYWN0aXZlJyk7XG59KTtcblxuLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbi8vICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuLy8gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuLy8gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbi8vICB9IGVsc2Uge1xuLy8gICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuLy8gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbi8vICB9XG4vLyB9KTtcblxuLy8gJCgnLm1lbnUtb3ZlcmxheScpLmNsaWNrKGZ1bmN0aW9uKGUpe1xuLy8gICBlLnByZXZlbnREZWZhdWx0KCk7XG4vLyAgICQoJy5idXJnZXItbGluaycpLnRvZ2dsZUNsYXNzKFwiYnVyZ2VyLWFjdGl2ZVwiKTtcbi8vICAgJCgnLm1lbnUtb3ZlcmxheScpLmZhZGVUb2dnbGUoMjAwLCAnbGluZWFyJyk7XG4vLyAgICQoJy5tYWluLW5hdicpLnNsaWRlVG9nZ2xlKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4vLyB9KTtcbiAgLy8gbWFpbi1uYXYtYmFyIGFwcGVhcmVuY2U6XG5cbi8vIEVPRiBidXJnZXJcblxuLy8gaW5kZXggbW9kYWwgY29udGVudFxuXG4gIC8vICQoJy5yZXF1ZXN0LWNhbGxiYWNrJyk7XG4gIC8vXG4gIC8vICQoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpO1xuICAvLyAkKCcubWFpbi1uYXYnKTtcbiAgLy8gJCgnLm1lbnUtb3ZlcmxheScpO1xuICAvL1xuICAvLyAkKCcubW9kYWwtY29udGVudCcpO1xuICAvLyAkKCcubW9kYWwtb3ZlcmxheScpO1xuICAvLyAkKCcubW9kYWwtY29udGVudC1jbG9zZScpO1xuICAvLyAkKCcuY2FsbGJhY2stZm9ybScpO1xuICAvLyAkKCdbbmFtZT1sb2dpbl0nKTtcbiAgLy8gJCgnW25hbWU9cGhvbmVdJyk7XG4gIC8vICQoJy5sb2dpbicpO1xuICAvL1xuICAvLyAkKCcudmFydmFydmFyJyk7XG4gIC8vICQoJy52YXJ2YXJ2YXInKTtcblxuXG5cblxuICBzaG93TWFpbk1vZGFsKCk7XG4gIGZ1bmN0aW9uIHNob3dNYWluTW9kYWwoKXtcbiAgICAkKCcucmVxdWVzdC1jYWxsYmFjaycpLmNsaWNrKGZ1bmN0aW9uKCl7XG4gICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVJbiggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBjbG9zZU1haW5Nb2RhbCgpO1xuICBmdW5jdGlvbiBjbG9zZU1haW5Nb2RhbCgpe1xuICAgICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgaGlkZU1haW5PdmVybGF5KCk7XG4gIGZ1bmN0aW9uIGhpZGVNYWluT3ZlcmxheSgpe1xuICAgICQoJy5tb2RhbC1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZU91dCggMzAwICk7XG4gICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgIH0pO1xuICB9XG5cbiAgY2hlY2tGb3JtVmFsdWVzKCk7XG4gIGZ1bmN0aW9uIGNoZWNrRm9ybVZhbHVlcygpe1xuICAgICQoJy5jYWxsYmFjay1mb3JtJykuc3VibWl0KGZ1bmN0aW9uKCBldmVudCApIHtcbiAgICAgIGlmICghKCQoJ1tuYW1lPWxvZ2luXScpLnZhbCgpKSB8fCAhKCQoJ1tuYW1lPXBob25lXScpLnZhbCgpKSkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgJCgnaHRtbCBib2R5Jykub24oJ2tleXVwJywgZnVuY3Rpb24oZSl7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLm1vZGFsLW92ZXJsYXknKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICAgJCgnLmJ1cmdlci1saW5rJykucmVtb3ZlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAgICAgICAkKCcubWVudS1vdmVybGF5JykuZmFkZU91dCgyMDAsICdsaW5lYXInKTtcbiAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICQoJy5tYWluLW5hdicpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICB9KTtcblxuXG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpKSB7XG4gIG1vZGFsQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKSB7XG4gIC8vIHZhciBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY2FsbGJhY2snKTtcbiAgLy9cbiAgLy8gdmFyIGxpbmtOYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKTtcbiAgLy8gdmFyIG1haW5OYXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1uYXYnKTtcbiAgLy8gdmFyIG1haW5OYXZPdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1lbnUtb3ZlcmxheScpO1xuICAvL1xuICAvLyB2YXIgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpO1xuICAvLyB2YXIgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1vdmVybGF5Jyk7XG4gIC8vIHZhciBjbG9zZSA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50LWNsb3NlJyk7XG4gIC8vXG4gIC8vIHZhciBmb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhbGxiYWNrLWZvcm0nKTtcbiAgLy8gdmFyIGxvZ2luID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9bG9naW5dJyk7XG4gIC8vIHZhciBwaG9uZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPXBob25lXScpO1xuICAvLyB2YXIgc3RvcmFnZSA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsb2dpbicpO1xuXG5cblxuXG4gIC8vIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZnVuY3Rpb24oZSkge1xuICAvLyAgIGlmIChlLmtleUNvZGUgPT09IDI3KSB7XG4gIC8vICAgICBpZihwb3B1cC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpIHx8IG92ZXJsYXkuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAvLyAgICAgICBmYWRlSW4ocG9wdXApO1xuICAvLyAgICAgICBmYWRlSW4ob3ZlcmxheSk7XG4gIC8vICAgICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAvLyAgICAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAvLyAgICAgfVxuICAvLyAgIH1cbiAgLy8gfSk7XG5cbiAgLy8gZnVuY3Rpb24gZmFkZUluKGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgb3AgPSAxOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gIC8vICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAvLyAgICAgaWYgKG9wIDw9IDAuMSkge1xuICAvLyAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICAgICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAvLyAgICAgfVxuICAvLyAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgLy8gICAgIG9wIC09IG9wICogMC4xO1xuICAvLyAgIH0sIDEwKVxuICAvLyB9O1xuICAvL1xuICAvLyBmdW5jdGlvbiBmYWRlT3V0KGVsZW1lbnQpIHtcbiAgLy8gICB2YXIgb3AgPSAwLjE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgLy8gICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAvLyAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAvLyAgICAgaWYgKG9wID49IDEpIHtcbiAgLy8gICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAvLyAgICAgb3AgKz0gb3AgKiAwLjE7XG4gIC8vICAgICAvLyBhbGVydCgnaGVyZScpO1xuICAvLyAgIH0sIDEwKTtcbiAgLy8gfTtcblxufVxuXG5cbi8vIEVPRiBpbmRleCBtb2RhbCBjb250ZW50XG5cblxuLy8gZHJvcERvd24gbWVudVxuXG5cblxuLy8gdjJcblxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gIGlmICggJCh3aW5kb3cpLndpZHRoKCkgPiA3NjgpIHtcbiAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlZW50ZXIoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQoJC5kYXRhKHRoaXMsICd0aW1lcicpKTtcblxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZURvd24oMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICB9XG4gICAgKTtcbiAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlbGVhdmUoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJC5kYXRhKHRoaXMsICd0aW1lcicsIHNldFRpbWVvdXQoJC5wcm94eShmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc3RvcCh0cnVlLCB0cnVlKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgICB9LCB0aGlzKSwgMjAwKSk7XG5cbiAgICAgICAgfVxuICAgICk7XG4gIH1cbn0pOyAvLyBlbmQgcmVhZHlcblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8zNzEzNTEzL2pxdWVyeS1kcm9wZG93bi1tZW51LXVzaW5nLXNsaWRldXAtYW5kLXNsaWRlZG93bi1vbi1ob3Zlci1pcy1qdW1weVxuXG5cblxuXG5cbi8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuXG4vLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuKGZ1bmN0aW9uKCkge1xuICAgLy8geW91ciBwYWdlIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICAgLy8gdGhlIERPTSB3aWxsIGJlIGF2YWlsYWJsZSBoZXJlXG5cbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICBcdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICBcdFx0dmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgXHRcdCQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICBcdH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4gICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgIH0pO1xuXG5cbn0pKCk7XG5cbiBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiAxMTk5cHgpXCIpLm1hdGNoZXMpIHtcbiAgIHZhciBzdHJpbmcgPSAn0JLRi9Cx0LXRgNC40YLQtSDQutCw0YLQtdCz0L7RgNC40Y4nO1xuICAgJCgnLnBhZ2Utc29sdXRpb25zIC5wcm9kdWN0cy1uYXYtbWVudSAuY29sdW1uLXRpdGxlJykudGV4dCggc3RyaW5nICk7XG4gfSBlbHNlIHtcbiAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIG9yaWdpbiApO1xuIH1cblxuLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8yMzEyMjMzNi9qYXZhc2NyaXB0LXJlc2l6ZS1ldmVudC1ub3Qtd29ya2luZz9ub3JlZGlyZWN0PTEmbHE9MVxuXG5cbmlmICggJCh3aW5kb3cpLndpZHRoKCkgPCA3NjgpIHtcbiAgLy9BZGQgeW91ciBqYXZhc2NyaXB0IGZvciBsYXJnZSBzY3JlZW5zIGhlcmVcbiAgKGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICB9KSgpO1xufVxuLy8gaHR0cDovL3d3dy5jb2FsbWFyY2guY29tL2Jsb2cvaG93LXRvLWV4ZWN1dGUtamF2YXNjcmlwdC1iYXNlZC1vbi1zY3JlZW4tc2l6ZS11c2luZy1qcXVlcnlcblxuLy8gRU9GIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG5cbi8vIHBhcmFsbGF4XG5cbnZhciBpc0lFID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiTVNJRSBcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIlRyaWRlbnRcIikgPiAwIHx8IG5hdmlnYXRvci51c2VyQWdlbnQuaW5kZXhPZihcIkVkZ2VcIikgPiAwLFxuICB3U2Nyb2xsID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuXG4vLyBwYXJhbGxheCBlZmZlY3QgZnVuY3Rpb25cbmZ1bmN0aW9uIHBhcmFsbGF4KHBybHhCZywgcHJseENvbnRhaW5lciwgZmFjdG9yKXtcbiAgaWYgKGlzSUUpIHtcbiAgJChwcmx4QmcpLmNzcyh7XG4gICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBweCknXG4gIH0pO1xuICByZXR1cm47XG4gIH1cbiAgaWYoKHdTY3JvbGwgKyAkKHdpbmRvdykuaGVpZ2h0KCkpID49ICQocHJseEJnKS5vZmZzZXQoKS50b3ApIHtcbiAgICBjb25zb2xlLmxvZyhcInRydWUhXCIpO1xuICAkKHBybHhCZykuY3NzKHtcbiAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoJyArICgoJChwcmx4Q29udGFpbmVyKS5vZmZzZXQoKS50b3AgLSB3U2Nyb2xsKSAvICQod2luZG93KS5oZWlnaHQoKSAqIDEwMCkgKiBmYWN0b3IgKyclKSdcbiAgfSk7XG4gIH1cbn1cblxuJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuICB3U2Nyb2xsID0gJCh0aGlzKS5zY3JvbGxUb3AoKTtcblxuICBpZigkKCcucGFyYWxsYXgtaW5kZXgnKS5sZW5ndGggPiAwKXtcbiAgICBwYXJhbGxheCgnLmJvdHRvbS1saW5lJywgJy5wYXJhbGxheC1pbmRleCcsIDAuNik7XG4gIH1cbn0pO1xuXG4vLyBFT0ZwYXJhbGxheFxuXG5cbi8vIGhvbWUgc2xpZGVyXG5cbiQoJy5zbGlkZSAuY29udGFpbmVyJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICQoJy5uZXh0ZW5kLWFycm93JykuZmFkZVRvZ2dsZSggMzAwICk7XG59KTtcblxuXG4vLyBFT0YgaG9tZSBzbGlkZXJcblxuXG59KTsgLy8gRU9GIGRvY3VtZW50LnJlYWR5IE1BSU5cbiJdfQ==
