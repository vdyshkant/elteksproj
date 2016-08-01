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
    pagerCustom: '#bx-pager',
      auto: false,
      speed: 500,
      pause: 800,
      pager:true,
      infiniteLoop: true,
      controls: true,
      prevSelector:('.slider-prev'),
      nextSelector:('.slider-next'),
      prevText:'',
      nextText:'',
  });

$('.page-documentation .bx-wrapper').addClass('bx-documentation');
$('.page-documentation #bx-pager').addClass('bx-pager-documentation');
  }
});
// bxSlider
$(document).ready(function(){
  if($('.bxslider.product-desc').length > 0) {
  $('.bxslider.product-desc').bxSlider({
    pagerCustom: '#bx-pager',
      auto: false,
      speed: 500,
      pause: 800,
      pager:true,
      infiniteLoop: true,
      controls: true,
      prevSelector:('.slider-prev'),
      nextSelector:('.slider-next'),
      prevText:'',
      nextText:'',
  });

$('.page-product-desc .bx-wrapper').addClass('bx-product-desc');
$('.page-product-desc #bx-pager').addClass('bx-pager-product-desc');
  }
});


// $('.bx-next').click(function(){
//   $('.page-documentation .column a').
// });


// поиск крошек
//
// если количетво крошек в массиве больше-равно трем,
//  тогда для второй и последующих крошек (кроме последней,
//    мы заменяем тексты на троеточия)

                      var quantity = $('.breadcrumbs > li').toArray();
                      if ( $(window).width() < 768) {
                        if (quantity.length >= 3) {
                          for (var i = 1; i < quantity.length; i++) {
                            $('#breadcrumbs').addClass('overcrumbs');
                          }
                        }
                      }

// $(document).ready(function(){
//   if($('.bxslider.documentation').length > 0) {
//     $('.bxslider.documentation').bxSlider({
//       auto: false,
//       speed: 500,
//       pause: 800,
//       pager:true,
//       infiniteLoop: true,
//       controls: true,
//       prevSelector:('.slider-prev'),
//       nextSelector:('.slider-next'),
//       prevText:'',
//       nextText:'',
//       // buildPager: function(slideIndex){
//       //   switch(slideIndex){
//       //     case 0:
//       //       return setImg('slider-thumb-1.jpg');
//       //     case 1:
//       //       return setImg('slider-thumb-2.jpg');
//       //     case 2:
//       //       return setImg('slider-thumb-3.jpg');
//       //   }
//       // },
//       // pagerCustom:'#bx-pager2'
//     });

//     $('.page-documentation .bx-wrapper').addClass('bx-documentation');
//   }
// });


// function setImg(inputImgSrc) {
//   var imgSrc = '<img src="../img/' + inputImgSrc + '">';
//   return imgSrc;
// }

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

(function() {
  if (window.matchMedia("(max-width: 767px)").matches) {
    var string = 'Заказать консультацию';
    $('.page-documentation .btn-form').text( string );
  } else {
    var origin = 'Заказать бесплатную консультацию';
    $('.page-documentation .btn-form').text( origin );
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

$('.slide').hover(function() {
  $('.nextend-arrow').fadeToggle( 300 );
});


// EOF home slider





// tabs module

  $('.tabs li[data-id]').click(function(){
    if($(this).hasClass('active')){ return; }

    $('#' + $(this).attr('data-id')).fadeIn(0).siblings().fadeOut(0);
    $(this).siblings().removeClass('active');
    $(this).addClass('active');
  });

// EOFtabs module


}); // EOF document.ready MAIN

},{}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV80NGEyZmE3LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIlwidXNlIHN0cmljdFwiO1xuLy8gdGhlIGVudHJ5IHBvaW50IGZvciBicm93c2VyaWZ5XG4vLyB2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcbi8vXG4vLyBsb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcHJrcyEgQW1kIGl0IGNoYW5nZWQgYXMgd2VsbC4gOiknKTtcblxuLy8gc2VhcmNoIGZpZWxkXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoKSB7XG5cblxuICBhbmltYXRlSGVhZGVyU2VhcmNoKCk7XG5cbiAgZnVuY3Rpb24gYW5pbWF0ZUhlYWRlclNlYXJjaCgpe1xuICAgIGlmICgkKFwiI2lucHQtc2VhcmNoXCIpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICB9KTtcblxuICAgICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggPT09IDApe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cblxuLy8gZW9mIHNlYXJjaCBmaWVsZFxuXG4vLyBjb3VudGVyXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcbiAgICAgICAgYW5pbWF0ZUNvdW50ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCl7XG4gIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgdmFyIG51bWJlcnMgPSBbOCwgNDUwMDAwLCAxMCwgMjVdLFxuICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXAgPSAkLmFuaW1hdGVOdW1iZXIubnVtYmVyU3RlcEZhY3Rvcmllcy5zZXBhcmF0b3IoJyAnKTtcblxuICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICBudW1iZXI6IG51bWJlcnNbaV0sXG4gICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBlb2YgY291bnRlclxuXG5cbi8vIHByb2R1Y3RzIGhvdmVyXG5cbmFuaW1hdGVQcm9kdWN0SXRlbSgpO1xuXG5mdW5jdGlvbiBhbmltYXRlUHJvZHVjdEl0ZW0oKXtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gZW9mIHByb2R1Y3RzIGhvdmVyXG5cblxuXG4vLyBwYWdpbmF0aW9uXG5cbiAgZnVuY3Rpb24gc2xpZGUob2Zmc2V0KSB7XG4gICAgaW5kZXggPSBNYXRoLm1pbiggTWF0aC5tYXgoIGluZGV4ICsgb2Zmc2V0LCAwICksIHRvdGFsIC0gMSApO1xuXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jbnRyJyApLmlubmVySFRNTCA9ICggaW5kZXggKyAxICkgKyAnIC8gJyArIHRvdGFsO1xuXG4gICAgcHIuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSAwID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgcGwuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSB0b3RhbCAtIDEgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgfVxuXG4gIHZhciBwciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUubGVmdCcgKTtcbiAgdmFyIHBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5yaWdodCcgKTtcblxuICBpZiAocHIgJiYgcGwpIHtcblxuICAgIHByLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAtMSApO1xuICAgIHBsLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAxICk7XG5cbiAgICB2YXIgaW5kZXggPSAwLCB0b3RhbCA9IDU7XG5cblxuXG4gICAgc2xpZGUoMCk7XG4gIH1cbi8vIGVvZiBwYWdpbmF0aW9uXG5cbi8vIGJ4U2xpZGVyXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgJCgnLmJ4c2xpZGVyLmRvY3VtZW50YXRpb24nKS5ieFNsaWRlcih7XG4gICAgcGFnZXJDdXN0b206ICcjYngtcGFnZXInLFxuICAgICAgYXV0bzogZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6IDgwMCxcbiAgICAgIHBhZ2VyOnRydWUsXG4gICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICBwcmV2VGV4dDonJyxcbiAgICAgIG5leHRUZXh0OicnLFxuICB9KTtcblxuJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYngtd3JhcHBlcicpLmFkZENsYXNzKCdieC1kb2N1bWVudGF0aW9uJyk7XG4kKCcucGFnZS1kb2N1bWVudGF0aW9uICNieC1wYWdlcicpLmFkZENsYXNzKCdieC1wYWdlci1kb2N1bWVudGF0aW9uJyk7XG4gIH1cbn0pO1xuLy8gYnhTbGlkZXJcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIGlmKCQoJy5ieHNsaWRlci5wcm9kdWN0LWRlc2MnKS5sZW5ndGggPiAwKSB7XG4gICQoJy5ieHNsaWRlci5wcm9kdWN0LWRlc2MnKS5ieFNsaWRlcih7XG4gICAgcGFnZXJDdXN0b206ICcjYngtcGFnZXInLFxuICAgICAgYXV0bzogZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6IDgwMCxcbiAgICAgIHBhZ2VyOnRydWUsXG4gICAgICBpbmZpbml0ZUxvb3A6IHRydWUsXG4gICAgICBjb250cm9sczogdHJ1ZSxcbiAgICAgIHByZXZTZWxlY3RvcjooJy5zbGlkZXItcHJldicpLFxuICAgICAgbmV4dFNlbGVjdG9yOignLnNsaWRlci1uZXh0JyksXG4gICAgICBwcmV2VGV4dDonJyxcbiAgICAgIG5leHRUZXh0OicnLFxuICB9KTtcblxuJCgnLnBhZ2UtcHJvZHVjdC1kZXNjIC5ieC13cmFwcGVyJykuYWRkQ2xhc3MoJ2J4LXByb2R1Y3QtZGVzYycpO1xuJCgnLnBhZ2UtcHJvZHVjdC1kZXNjICNieC1wYWdlcicpLmFkZENsYXNzKCdieC1wYWdlci1wcm9kdWN0LWRlc2MnKTtcbiAgfVxufSk7XG5cblxuLy8gJCgnLmJ4LW5leHQnKS5jbGljayhmdW5jdGlvbigpe1xuLy8gICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5jb2x1bW4gYScpLlxuLy8gfSk7XG5cblxuLy8g0L/QvtC40YHQuiDQutGA0L7RiNC10Lpcbi8vXG4vLyDQtdGB0LvQuCDQutC+0LvQuNGH0LXRgtCy0L4g0LrRgNC+0YjQtdC6INCyINC80LDRgdGB0LjQstC1INCx0L7Qu9GM0YjQtS3RgNCw0LLQvdC+INGC0YDQtdC8LFxuLy8gINGC0L7Qs9C00LAg0LTQu9GPINCy0YLQvtGA0L7QuSDQuCDQv9C+0YHQu9C10LTRg9GO0YnQuNGFINC60YDQvtGI0LXQuiAo0LrRgNC+0LzQtSDQv9C+0YHQu9C10LTQvdC10LksXG4vLyAgICDQvNGLINC30LDQvNC10L3Rj9C10Lwg0YLQtdC60YHRgtGLINC90LAg0YLRgNC+0LXRgtC+0YfQuNGPKVxuXG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHF1YW50aXR5ID0gJCgnLmJyZWFkY3J1bWJzID4gbGknKS50b0FycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF1YW50aXR5Lmxlbmd0aCA+PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgcXVhbnRpdHkubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKCcjYnJlYWRjcnVtYnMnKS5hZGRDbGFzcygnb3ZlcmNydW1icycpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfVxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuLy8gICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbi8vICAgICAkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmJ4U2xpZGVyKHtcbi8vICAgICAgIGF1dG86IGZhbHNlLFxuLy8gICAgICAgc3BlZWQ6IDUwMCxcbi8vICAgICAgIHBhdXNlOiA4MDAsXG4vLyAgICAgICBwYWdlcjp0cnVlLFxuLy8gICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxuLy8gICAgICAgY29udHJvbHM6IHRydWUsXG4vLyAgICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbi8vICAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuLy8gICAgICAgcHJldlRleHQ6JycsXG4vLyAgICAgICBuZXh0VGV4dDonJyxcbi8vICAgICAgIC8vIGJ1aWxkUGFnZXI6IGZ1bmN0aW9uKHNsaWRlSW5kZXgpe1xuLy8gICAgICAgLy8gICBzd2l0Y2goc2xpZGVJbmRleCl7XG4vLyAgICAgICAvLyAgICAgY2FzZSAwOlxuLy8gICAgICAgLy8gICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTEuanBnJyk7XG4vLyAgICAgICAvLyAgICAgY2FzZSAxOlxuLy8gICAgICAgLy8gICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTIuanBnJyk7XG4vLyAgICAgICAvLyAgICAgY2FzZSAyOlxuLy8gICAgICAgLy8gICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTMuanBnJyk7XG4vLyAgICAgICAvLyAgIH1cbi8vICAgICAgIC8vIH0sXG4vLyAgICAgICAvLyBwYWdlckN1c3RvbTonI2J4LXBhZ2VyMidcbi8vICAgICB9KTtcblxuLy8gICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ4LXdyYXBwZXInKS5hZGRDbGFzcygnYngtZG9jdW1lbnRhdGlvbicpO1xuLy8gICB9XG4vLyB9KTtcblxuXG4vLyBmdW5jdGlvbiBzZXRJbWcoaW5wdXRJbWdTcmMpIHtcbi8vICAgdmFyIGltZ1NyYyA9ICc8aW1nIHNyYz1cIi4uL2ltZy8nICsgaW5wdXRJbWdTcmMgKyAnXCI+Jztcbi8vICAgcmV0dXJuIGltZ1NyYztcbi8vIH1cblxuLy8gZW9mIGJ4U2xpZGVyXG5cblxuLy8gZmFxIHRvZ2dsZSBwYWdlXG5cbi8vICQoJy5saXN0LWl0ZW0gLnRpdGxlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4vLyB9KVxuXG5cbiAgLy8gaWYgKCQoJy5qc0ZhcUl0ZW0nKS5sZW5ndGggPiAwKSB7XG4kKCcuZmFxLWl0ZW0tdGl0bGUnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKHRoaXMpLnNpYmxpbmdzKCcuZmFxLWl0ZW0tY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4gICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xufSk7XG5cblxuJCgnLnByb2R1Y3RzLW5hdi1tZW51JykuY2xpY2soZnVuY3Rpb24oKXtcbiAgJCgnLmpzUHJvZE1lbnVDb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgJCgnLmpzQ29sdW1uVGl0bGUnKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG59KTtcbiAgLy8gfVxuXG5cblxuLy8gRU9GIGZhcSB0b2dnbGUgcGFnZVxuXG5cbi8vIGJ1cmdlclxuXG4gIC8vIGJ1cmdlciBhbmltYXRpb24gaXRzZWxmOlxuXG5cblxuJChcImEuYnVyZ2VyLW1lbnUsIC5tZW51LW92ZXJsYXlcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbiAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbn0pO1xuXG4kKCcucmVxdWVzdC1jYWxsYmFjay1uYXYnKS5jbGljayhmdW5jdGlvbigpe1xuICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVJbiggMzAwICk7XG4gICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcblxuICAvLyBoaWRlIG1lbnUgdG9nZ2xlIGFuZCBjb252ZXJ0IHRvIGJ1cmdlclxuICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAkKCcubWFpbi1uYXYnKS5zbGlkZVVwKDIwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gIC8vICQoJy5tb2RhbC1jb250ZW50JykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAvLyAkKCcubW9kYWwtb3ZlcmxheScpLmFkZENsYXNzKCdhY3RpdmUnKTtcbn0pO1xuXG4vLyB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuLy8gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4vLyAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4vLyAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuLy8gIH0gZWxzZSB7XG4vLyAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4vLyAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuLy8gIH1cbi8vIH0pO1xuXG4vLyAkKCcubWVudS1vdmVybGF5JykuY2xpY2soZnVuY3Rpb24oZSl7XG4vLyAgIGUucHJldmVudERlZmF1bHQoKTtcbi8vICAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xuLy8gICAkKCcubWVudS1vdmVybGF5JykuZmFkZVRvZ2dsZSgyMDAsICdsaW5lYXInKTtcbi8vICAgJCgnLm1haW4tbmF2Jykuc2xpZGVUb2dnbGUoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbi8vIH0pO1xuICAvLyBtYWluLW5hdi1iYXIgYXBwZWFyZW5jZTpcblxuLy8gRU9GIGJ1cmdlclxuXG4vLyBpbmRleCBtb2RhbCBjb250ZW50XG5cbiAgLy8gJCgnLnJlcXVlc3QtY2FsbGJhY2snKTtcbiAgLy9cbiAgLy8gJCgnLnJlcXVlc3QtY2FsbGJhY2stbmF2Jyk7XG4gIC8vICQoJy5tYWluLW5hdicpO1xuICAvLyAkKCcubWVudS1vdmVybGF5Jyk7XG4gIC8vXG4gIC8vICQoJy5tb2RhbC1jb250ZW50Jyk7XG4gIC8vICQoJy5tb2RhbC1vdmVybGF5Jyk7XG4gIC8vICQoJy5tb2RhbC1jb250ZW50LWNsb3NlJyk7XG4gIC8vICQoJy5jYWxsYmFjay1mb3JtJyk7XG4gIC8vICQoJ1tuYW1lPWxvZ2luXScpO1xuICAvLyAkKCdbbmFtZT1waG9uZV0nKTtcbiAgLy8gJCgnLmxvZ2luJyk7XG4gIC8vXG4gIC8vICQoJy52YXJ2YXJ2YXInKTtcbiAgLy8gJCgnLnZhcnZhcnZhcicpO1xuXG5cblxuXG4gIHNob3dNYWluTW9kYWwoKTtcbiAgZnVuY3Rpb24gc2hvd01haW5Nb2RhbCgpe1xuICAgICQoJy5yZXF1ZXN0LWNhbGxiYWNrJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICAgICQoJy5tb2RhbC1jb250ZW50JykuZmFkZUluKCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZUluKCAzMDAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNsb3NlTWFpbk1vZGFsKCk7XG4gIGZ1bmN0aW9uIGNsb3NlTWFpbk1vZGFsKCl7XG4gICAgJCgnLm1vZGFsLWNvbnRlbnQtY2xvc2UnKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBoaWRlTWFpbk92ZXJsYXkoKTtcbiAgZnVuY3Rpb24gaGlkZU1haW5PdmVybGF5KCl7XG4gICAgJCgnLm1vZGFsLW92ZXJsYXknKS5jbGljayhmdW5jdGlvbigpe1xuICAgICAgJCgnLm1vZGFsLWNvbnRlbnQnKS5mYWRlT3V0KCAzMDAgKTtcbiAgICAgICQoJy5tb2RhbC1vdmVybGF5JykuZmFkZU91dCggMzAwICk7XG4gICAgfSk7XG4gIH1cblxuICBjaGVja0Zvcm1WYWx1ZXMoKTtcbiAgZnVuY3Rpb24gY2hlY2tGb3JtVmFsdWVzKCl7XG4gICAgJCgnLmNhbGxiYWNrLWZvcm0nKS5zdWJtaXQoZnVuY3Rpb24oIGV2ZW50ICkge1xuICAgICAgaWYgKCEoJCgnW25hbWU9bG9naW5dJykudmFsKCkpIHx8ICEoJCgnW25hbWU9cGhvbmVdJykudmFsKCkpKSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICAkKCdodG1sIGJvZHknKS5vbigna2V5dXAnLCBmdW5jdGlvbihlKXtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgICAkKCcubW9kYWwtY29udGVudCcpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcubW9kYWwtb3ZlcmxheScpLmZhZGVPdXQoIDMwMCApO1xuICAgICAgICAkKCcuYnVyZ2VyLWxpbmsnKS5yZW1vdmVDbGFzcyhcImJ1cmdlci1hY3RpdmVcIik7XG4gICAgICAgICQoJy5tZW51LW92ZXJsYXknKS5mYWRlT3V0KDIwMCwgJ2xpbmVhcicpO1xuICAgICAgICBpZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gICAgICAgICAgJCgnLm1haW4tbmF2Jykuc2xpZGVVcCgyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICB9XG5cbiAgICB9XG4gIH0pO1xuXG5cblxuaWYgKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50JykpIHtcbiAgbW9kYWxDb250ZW50KCk7XG59XG5cbmZ1bmN0aW9uIG1vZGFsQ29udGVudCgpIHtcbiAgLy8gdmFyIGxpbmsgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVxdWVzdC1jYWxsYmFjaycpO1xuICAvL1xuICAvLyB2YXIgbGlua05hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLW5hdicpO1xuICAvLyB2YXIgbWFpbk5hdk92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVudS1vdmVybGF5Jyk7XG4gIC8vXG4gIC8vIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIC8vIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgLy8gdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgLy9cbiAgLy8gdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2stZm9ybScpO1xuICAvLyB2YXIgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1sb2dpbl0nKTtcbiAgLy8gdmFyIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9cGhvbmVdJyk7XG4gIC8vIHZhciBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJyk7XG5cblxuXG5cbiAgLy8gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gIC8vICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgLy8gICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHwgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gIC8vICAgICAgIGZhZGVJbihwb3B1cCk7XG4gIC8vICAgICAgIGZhZGVJbihvdmVybGF5KTtcbiAgLy8gICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gIC8vICAgICB9XG4gIC8vICAgfVxuICAvLyB9KTtcblxuICAvLyBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgLy8gICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gIC8vICAgICBpZiAob3AgPD0gMC4xKSB7XG4gIC8vICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAvLyAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIC8vICAgICB9XG4gIC8vICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAvLyAgICAgb3AgLT0gb3AgKiAwLjE7XG4gIC8vICAgfSwgMTApXG4gIC8vIH07XG4gIC8vXG4gIC8vIGZ1bmN0aW9uIGZhZGVPdXQoZWxlbWVudCkge1xuICAvLyAgIHZhciBvcCA9IDAuMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAvLyAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gIC8vICAgdmFyIHRpbWVyID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XG4gIC8vICAgICBpZiAob3AgPj0gMSkge1xuICAvLyAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgLy8gICAgIH1cbiAgLy8gICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAvLyAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gIC8vICAgICBvcCArPSBvcCAqIDAuMTtcbiAgLy8gICAgIC8vIGFsZXJ0KCdoZXJlJyk7XG4gIC8vICAgfSwgMTApO1xuICAvLyB9O1xuXG59XG5cblxuLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG4vLyBkcm9wRG93biBtZW51XG5cblxuXG4vLyB2MlxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgaWYgKCAkKHdpbmRvdykud2lkdGgoKSA+IDc2OCkge1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VlbnRlcihcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCgkLmRhdGEodGhpcywgJ3RpbWVyJykpO1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlRG93bigyMDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAkLmRhdGEodGhpcywgJ3RpbWVyJywgc2V0VGltZW91dCgkLnByb3h5KGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zdG9wKHRydWUsIHRydWUpLnNsaWRlVXAoMjAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICAgICAgIH0sIHRoaXMpLCAyMDApKTtcblxuICAgICAgICB9XG4gICAgKTtcbiAgfVxufSk7IC8vIGVuZCByZWFkeVxuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3MTM1MTMvanF1ZXJ5LWRyb3Bkb3duLW1lbnUtdXNpbmctc2xpZGV1cC1hbmQtc2xpZGVkb3duLW9uLWhvdmVyLWlzLWp1bXB5XG5cblxuXG5cblxuLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIGZvb3Rlci1uYXYgdGV4dCBjaGFuZ2VcblxuXG4oZnVuY3Rpb24oKSB7XG4gICAvLyB5b3VyIHBhZ2UgaW5pdGlhbGl6YXRpb24gY29kZSBoZXJlXG4gICAvLyB0aGUgRE9NIHdpbGwgYmUgYXZhaWxhYmxlIGhlcmVcblxuICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgZnVuY3Rpb24oKXtcbiAgIFx0aWYgKHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1heC13aWR0aDogNzY3cHgpXCIpLm1hdGNoZXMpIHtcbiAgIFx0XHR2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICBcdFx0JCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgIFx0fSBlbHNlIHtcbiAgICAgIHZhciBvcmlnaW4gPSAn0KLQtdGF0L/QvtC00LTQtdGA0LbQutCwJztcbiAgICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggb3JpZ2luICk7XG4gICAgfVxuICAgfSk7XG5cblxufSkoKTtcblxuKGZ1bmN0aW9uKCkge1xuICBpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgIHZhciBzdHJpbmcgPSAn0JfQsNC60LDQt9Cw0YLRjCDQutC+0L3RgdGD0LvRjNGC0LDRhtC40Y4nO1xuICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ0bi1mb3JtJykudGV4dCggc3RyaW5nICk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIG9yaWdpbiA9ICfQl9Cw0LrQsNC30LDRgtGMINCx0LXRgdC/0LvQsNGC0L3Rg9GOINC60L7QvdGB0YPQu9GM0YLQsNGG0LjRjic7XG4gICAgJCgnLnBhZ2UtZG9jdW1lbnRhdGlvbiAuYnRuLWZvcm0nKS50ZXh0KCBvcmlnaW4gKTtcbiAgfVxufSkoKTtcblxuXG4oZnVuY3Rpb24oKSB7XG4gIGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDExOTlweClcIikubWF0Y2hlcykge1xuICAgdmFyIHN0cmluZyA9ICfQktGL0LHQtdGA0LjRgtC1INC60LDRgtC10LPQvtGA0LjRjic7XG4gICAkKCcucGFnZS1zb2x1dGlvbnMgLnByb2R1Y3RzLW5hdi1tZW51IC5jb2x1bW4tdGl0bGUnKS50ZXh0KCBzdHJpbmcgKTtcbiAgfSBlbHNlIHtcbiAgIHZhciBvcmlnaW4gPSAn0JrQsNGC0LXQs9C+0YDQuNC4JztcbiAgICQoJy5wYWdlLXNvbHV0aW9ucyAucHJvZHVjdHMtbmF2LW1lbnUgLmNvbHVtbi10aXRsZScpLnRleHQoIG9yaWdpbiApO1xuICB9XG59KSgpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTIyMzM2L2phdmFzY3JpcHQtcmVzaXplLWV2ZW50LW5vdC13b3JraW5nP25vcmVkaXJlY3Q9MSZscT0xXG5cblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gIH0pKCk7XG59XG4vLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4vLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cblxuLy8gcGFyYWxsYXhcblxudmFyIGlzSUUgPSBuYXZpZ2F0b3IudXNlckFnZW50LmluZGV4T2YoXCJNU0lFIFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiVHJpZGVudFwiKSA+IDAgfHwgbmF2aWdhdG9yLnVzZXJBZ2VudC5pbmRleE9mKFwiRWRnZVwiKSA+IDAsXG4gIHdTY3JvbGwgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG5cbi8vIHBhcmFsbGF4IGVmZmVjdCBmdW5jdGlvblxuZnVuY3Rpb24gcGFyYWxsYXgocHJseEJnLCBwcmx4Q29udGFpbmVyLCBmYWN0b3Ipe1xuICBpZiAoaXNJRSkge1xuICAkKHBybHhCZykuY3NzKHtcbiAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMHB4KSdcbiAgfSk7XG4gIHJldHVybjtcbiAgfVxuICBpZigod1Njcm9sbCArICQod2luZG93KS5oZWlnaHQoKSkgPj0gJChwcmx4QmcpLm9mZnNldCgpLnRvcCkge1xuICAgIGNvbnNvbGUubG9nKFwidHJ1ZSFcIik7XG4gICQocHJseEJnKS5jc3Moe1xuICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgnICsgKCgkKHBybHhDb250YWluZXIpLm9mZnNldCgpLnRvcCAtIHdTY3JvbGwpIC8gJCh3aW5kb3cpLmhlaWdodCgpICogMTAwKSAqIGZhY3RvciArJyUpJ1xuICB9KTtcbiAgfVxufVxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCl7XG4gIHdTY3JvbGwgPSAkKHRoaXMpLnNjcm9sbFRvcCgpO1xuXG4gIGlmKCQoJy5wYXJhbGxheC1pbmRleCcpLmxlbmd0aCA+IDApe1xuICAgIHBhcmFsbGF4KCcuYm90dG9tLWxpbmUnLCAnLnBhcmFsbGF4LWluZGV4JywgMC42KTtcbiAgfVxufSk7XG5cbi8vIEVPRnBhcmFsbGF4XG5cblxuLy8gaG9tZSBzbGlkZXJcblxuJCgnLnNsaWRlJykuaG92ZXIoZnVuY3Rpb24oKSB7XG4gICQoJy5uZXh0ZW5kLWFycm93JykuZmFkZVRvZ2dsZSggMzAwICk7XG59KTtcblxuXG4vLyBFT0YgaG9tZSBzbGlkZXJcblxuXG5cblxuXG4vLyB0YWJzIG1vZHVsZVxuXG4gICQoJy50YWJzIGxpW2RhdGEtaWRdJykuY2xpY2soZnVuY3Rpb24oKXtcbiAgICBpZigkKHRoaXMpLmhhc0NsYXNzKCdhY3RpdmUnKSl7IHJldHVybjsgfVxuXG4gICAgJCgnIycgKyAkKHRoaXMpLmF0dHIoJ2RhdGEtaWQnKSkuZmFkZUluKDApLnNpYmxpbmdzKCkuZmFkZU91dCgwKTtcbiAgICAkKHRoaXMpLnNpYmxpbmdzKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICB9KTtcblxuLy8gRU9GdGFicyBtb2R1bGVcblxuXG59KTsgLy8gRU9GIGRvY3VtZW50LnJlYWR5IE1BSU5cbiJdfQ==
