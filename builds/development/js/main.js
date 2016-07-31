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
    $( '.dropdown' ).mouseenter(
        function(){
            $(this).children('.sub-menu').slideDown(500, 'easeInOutCubic');
        }
    );
    $( '.dropdown' ).mouseleave(
        function(){
            $(this).children('.sub-menu').slideUp(500, 'easeInOutCubic');
        }
    );
}); // end ready

// EOF dropDown menu


// burger

function handleMenu(toggler){

	function onToggleClick(event){
		event.preventDefault();
		toggler.classList.toggle("burger-active");
	}
	toggler.addEventListener("click", onToggleClick);

	// если окно вьюпорта больше таблета - убираем toggle классы меню:
	window.addEventListener("resize", function(){
	if (window.matchMedia("(min-width: 1020px)").matches) {
		toggler.classList.remove("burger-active");
	}
})
}

(function(){
	// defining vars && selecting elements:
	var burger = document.querySelector(".burger");

	// invoking menu-toggler func:
	handleMenu(burger);

})();

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV83OWM5OTJkNC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gdGhlIGVudHJ5IHBvaW50IGZvciBicm93c2VyaWZ5XG4vLyB2YXIgbG9nZ2VyID0gcmVxdWlyZSgnLi9sb2dnZXInKTtcbi8vXG4vLyBsb2dnZXIubG9nKCdIdXJyYXksIGl0IHdvcHJrcyEgQW1kIGl0IGNoYW5nZWQgYXMgd2VsbC4gOiknKTtcblxuLy8gc2VhcmNoIGZpZWxkXG5cbmFuaW1hdGVIZWFkZXJTZWFyY2goKTtcblxuZnVuY3Rpb24gYW5pbWF0ZUhlYWRlclNlYXJjaCgpe1xuICBpZiAoJChcIiNpbnB0LXNlYXJjaFwiKS5sZW5ndGggPiAwKSB7XG4gICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbihcImZvY3VzXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAkKHRoaXMpLnBhcmVudCgnbGFiZWwnKS5hZGRDbGFzcygnYWN0aXZlJyk7XG4gICAgfSk7XG5cbiAgICAkKFwiI2lucHQtc2VhcmNoXCIpLm9uKCdibHVyJywgZnVuY3Rpb24gKCkge1xuICAgICAgaWYoJCh0aGlzKS52YWwoKS5sZW5ndGggPT0gMClcbiAgICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuICB9XG59XG5cblxuLy8gZW9mIHNlYXJjaCBmaWVsZFxuXG4vLyBjb3VudGVyXG5cbiQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XG4gICAgJCgnI3N0YXRzJykuZWFjaChmdW5jdGlvbigpe1xuICAgICAgdmFyIGltYWdlUG9zID0gJCh0aGlzKS5vZmZzZXQoKS50b3A7XG4gICAgICB2YXIgdG9wT2ZXaW5kb3cgPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgICBpZiAoaW1hZ2VQb3MgPCB0b3BPZldpbmRvdys2NTApIHtcbiAgICAgICAgYW5pbWF0ZUNvdW50ZXIoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVDb3VudGVyKCl7XG4gIGlmICgkKCcjc3RhdHMnKS5sZW5ndGggPiAwKSB7XG4gICAgdmFyIG51bWJlcnMgPSBbOCwgNDUwMDAwLCAxMCwgMjVdLFxuICAgICAgICBkdXJhdGlvbiA9IFsxLjUsIDQuNSwgMy41LCAzXSxcbiAgICAgICAgbnVtYmVycCA9ICQoJyNzdGF0cyAuc3RhdCBoMicpLFxuICAgICAgICBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXAgPSAkLmFuaW1hdGVOdW1iZXIubnVtYmVyU3RlcEZhY3Rvcmllcy5zZXBhcmF0b3IoJyAnKTtcblxuICAgIG51bWJlcnAuZWFjaChmdW5jdGlvbihpKSB7XG4gICAgICAkKHRoaXMpLmFuaW1hdGVOdW1iZXIoe1xuICAgICAgICBudW1iZXI6IG51bWJlcnNbaV0sXG4gICAgICAgIG51bWJlclN0ZXA6IGNvbW1hX3NlcGFyYXRvcl9udW1iZXJfc3RlcFxuICAgICAgfSwgZHVyYXRpb25baV0gKiAxMDAwKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyBlb2YgY291bnRlclxuXG5cbi8vIHByb2R1Y3RzIGhvdmVyXG5cbmFuaW1hdGVQcm9kdWN0SXRlbSgpO1xuXG5mdW5jdGlvbiBhbmltYXRlUHJvZHVjdEl0ZW0oKXtcbiAgJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtcblxuICAgIGlmICgkKCcuaXRlbSAubWFrZTNkJykubGVuZ3RoID4gMCkge1xuICAgICAgJCgnLml0ZW0gLm1ha2UzZCcpLmhvdmVyKGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5jc3MoJ3otaW5kZXgnLCBcIjIwXCIpO1xuICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcygnYW5pbWF0ZScpO1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIxXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gZW9mIHByb2R1Y3RzIGhvdmVyXG5cblxuXG4vLyBwYWdpbmF0aW9uXG5cbmFuaW1hdGVQYWdpbmF0aW9uKCk7XG5mdW5jdGlvbiBhbmltYXRlUGFnaW5hdGlvbigpIHtcbiAgdmFyIHByID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5sZWZ0JyApO1xuICB2YXIgcGwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnLnBhZ2luYXRlLnJpZ2h0JyApO1xuXG4gIGlmIChwciAhPSAndW5kZWZpbmVkJyAmJiBwbCAhPSAndW5kZWZpbmVkJyApIHtcblxuICAgIHByLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAtMSApO1xuICAgIHBsLm9uY2xpY2sgPSBzbGlkZS5iaW5kKCB0aGlzLCAxICk7XG5cbiAgICB2YXIgaW5kZXggPSAwLCB0b3RhbCA9IDU7XG5cbiAgICBmdW5jdGlvbiBzbGlkZShvZmZzZXQpIHtcbiAgICAgIGluZGV4ID0gTWF0aC5taW4oIE1hdGgubWF4KCBpbmRleCArIG9mZnNldCwgMCApLCB0b3RhbCAtIDEgKTtcblxuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5jbnRyJyApLmlubmVySFRNTCA9ICggaW5kZXggKyAxICkgKyAnIC8gJyArIHRvdGFsO1xuXG4gICAgICBwci5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IDAgPyAnZGlzYWJsZWQnIDogJycgKTtcbiAgICAgIHBsLnNldEF0dHJpYnV0ZSggJ2RhdGEtc3RhdGUnLCBpbmRleCA9PT0gdG90YWwgLSAxID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgfVxuXG4gICAgc2xpZGUoMCk7XG4gIH1cbn1cbi8vIGVvZiBwYWdpbmF0aW9uXG5cbi8vIGJ4U2xpZGVyXG5cbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG4gIGlmKCQoJy5ieHNsaWRlci5kb2N1bWVudGF0aW9uJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5ieHNsaWRlci5kb2N1bWVudGF0aW9uJykuYnhTbGlkZXIoe1xuICAgICAgYXV0bzpmYWxzZSxcbiAgICAgIHNwZWVkOiA1MDAsXG4gICAgICBwYXVzZTo4MDAsXG4gICAgICBwYWdlcjp0cnVlLFxuICAgICAgaW5maW5pdGVMb29wOiB0cnVlLFxuICAgICAgY29udHJvbHM6IHRydWUsXG4gICAgICBwcmV2U2VsZWN0b3I6KCcuc2xpZGVyLXByZXYnKSxcbiAgICAgIG5leHRTZWxlY3RvcjooJy5zbGlkZXItbmV4dCcpLFxuICAgICAgcHJldlRleHQ6JycsXG4gICAgICBuZXh0VGV4dDonJyxcbiAgICAgIGJ1aWxkUGFnZXI6IGZ1bmN0aW9uKHNsaWRlSW5kZXgpe1xuICAgICAgICBzd2l0Y2goc2xpZGVJbmRleCl7XG4gICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTEuanBnJyk7XG4gICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTIuanBnJyk7XG4gICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgcmV0dXJuIHNldEltZygnc2xpZGVyLXRodW1iLTMuanBnJyk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyBwYWdlckN1c3RvbTonI2J4LXBhZ2VyMidcbiAgICB9KTtcblxuICAgICQoJy5wYWdlLWRvY3VtZW50YXRpb24gLmJ4LXdyYXBwZXInKS5hZGRDbGFzcygnYngtZG9jdW1lbnRhdGlvbicpO1xuICB9XG59KTtcblxuXG5mdW5jdGlvbiBzZXRJbWcoaW5wdXRJbWdTcmMpIHtcbiAgdmFyIGltZ1NyYyA9ICc8aW1nIHNyYz1cIi4uL2ltZy8nICsgaW5wdXRJbWdTcmMgKyAnXCI+JztcbiAgcmV0dXJuIGltZ1NyYztcbn1cblxuLy8gZW9mIGJ4U2xpZGVyXG5cblxuLy8gZmFxIHRvZ2dsZSBwYWdlXG5cbi8vICQoJy5saXN0LWl0ZW0gLnRpdGxlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuLy8gICAkKHRoaXMpLnNpYmxpbmdzKCcuY29udGVudCcpLnNsaWRlVG9nZ2xlKCk7XG4vLyB9KVxuXG5kcm9wRG93bkNvbnRlbnRJdGVtKCk7XG5cbmZ1bmN0aW9uIGRyb3BEb3duQ29udGVudEl0ZW0oKXtcbiAgaWYgKCQoJy5qc0ZhcUl0ZW0nKS5sZW5ndGggPiAwKSB7XG4gICAgJCgnLmZhcS1pdGVtLXRpdGxlJykub24oJ2NsaWNrJyxmdW5jdGlvbigpe1xuICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmZhcS1pdGVtLWNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgJCh0aGlzKS5wYXJlbnQoJy5qc0ZhcUl0ZW0nKS50b2dnbGVDbGFzcygnYWN0aXZlJyk7XG4gICAgfSlcbiAgfVxufVxuXG5cblxuLy8gRU9GIGZhcSB0b2dnbGUgcGFnZVxuXG5cblxuXG4vLyBpbmRleCBtb2RhbCBjb250ZW50XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudCcpKSB7XG4gIG1vZGFsQ29udGVudCgpO1xufVxuXG5mdW5jdGlvbiBtb2RhbENvbnRlbnQoKSB7XG4gIHZhciBsaW5rID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlcXVlc3QtY2FsbGJhY2snKTtcbiAgdmFyIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKTtcbiAgdmFyIG92ZXJsYXkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtb3ZlcmxheScpO1xuICB2YXIgY2xvc2UgPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcubW9kYWwtY29udGVudC1jbG9zZScpO1xuICB2YXIgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYWxsYmFjay1mb3JtJyk7XG4gIHZhciBsb2dpbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWxvZ2luXScpO1xuICB2YXIgcGhvbmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1waG9uZV0nKTtcbiAgdmFyIHN0b3JhZ2UgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnbG9naW4nKTtcblxuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmYWRlT3V0KHBvcHVwKTtcbiAgICBmYWRlT3V0KG92ZXJsYXkpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgaWYgKHN0b3JhZ2UpIHtcbiAgICAgIGxvZ2luLnZhbHVlID0gc3RvcmFnZTtcbiAgICAgIHBob25lLmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ2luLmZvY3VzKCk7XG4gICAgfVxuICB9KTtcblxuICBjbG9zZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmFkZUluKHBvcHVwKTtcbiAgICBmYWRlSW4ob3ZlcmxheSk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAvLyBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCcubW9kYWwtZXJyb3InKTtcbiAgfSk7XG5cbiAgb3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpe1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBmYWRlSW4ocG9wdXApO1xuICAgIGZhZGVJbihvdmVybGF5KTtcbiAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9KTtcblxuICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoIWxvZ2luLnZhbHVlIHx8ICFwaG9uZS52YWx1ZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgLy8gcG9wdXAuY2xhc3NMaXN0LmFkZCgnbW9kYWwtZXJyb3InKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2xvZ2luJywgbG9naW4udmFsdWUpO1xuICAgIH1cbiAgfSlcblxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGZ1bmN0aW9uKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNykge1xuICAgICAgaWYocG9wdXAuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSB8fCBvdmVybGF5LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgZmFkZUluKHBvcHVwKTtcbiAgICAgICAgZmFkZUluKG92ZXJsYXkpO1xuICAgICAgICBwb3B1cC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGZhZGVJbihlbGVtZW50KSB7XG4gICAgdmFyIG9wID0gMTsgLy8gaW5pdGlhbCBvcGFjaXR5O1xuICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChvcCA8PSAwLjEpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgIH1cbiAgICAgIGVsZW1lbnQuc3R5bGUub3BhY2l0eSA9IG9wO1xuICAgICAgZWxlbWVudC5zdHlsZS5maWx0ZXIgPSAnYWxwaGEob3BhY2l0eT0nICsgb3AgKiAxMDAgKyAnKSc7XG4gICAgICBvcCAtPSBvcCAqIDAuMTtcbiAgICB9LCAxMClcbiAgfTtcblxuICBmdW5jdGlvbiBmYWRlT3V0KGVsZW1lbnQpIHtcbiAgICB2YXIgb3AgPSAwLjE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgaWYgKG9wID49IDEpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAgICAgb3AgKz0gb3AgKiAwLjE7XG4gICAgICAvLyBhbGVydCgnaGVyZScpO1xuICAgIH0sIDEwKTtcbiAgfTtcblxufTtcblxuXG4vLyBFT0YgaW5kZXggbW9kYWwgY29udGVudFxuXG5cbi8vIGRyb3BEb3duIG1lbnVcblxuXG5cbi8vIHYyXG5cbi8vICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuLy8gICAgICQoICcuZHJvcGRvd24nICkuaG92ZXIoXG4vLyAgICAgICAgIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zbGlkZURvd24oNTAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbi8vICAgICAgICAgfSxcbi8vICAgICAgICAgZnVuY3Rpb24oKXtcbi8vICAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnNsaWRlVXAoNTAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbi8vICAgICAgICAgfVxuLy8gICAgICk7XG4vLyB9KTsgLy8gZW5kIHJlYWR5XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAkKCAnLmRyb3Bkb3duJyApLm1vdXNlZW50ZXIoXG4gICAgICAgIGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zbGlkZURvd24oNTAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgfVxuICAgICk7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWxlYXZlKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVVcCg1MDAsICdlYXNlSW5PdXRDdWJpYycpO1xuICAgICAgICB9XG4gICAgKTtcbn0pOyAvLyBlbmQgcmVhZHlcblxuLy8gRU9GIGRyb3BEb3duIG1lbnVcblxuXG4vLyBidXJnZXJcblxuZnVuY3Rpb24gaGFuZGxlTWVudSh0b2dnbGVyKXtcblxuXHRmdW5jdGlvbiBvblRvZ2dsZUNsaWNrKGV2ZW50KXtcblx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcdHRvZ2dsZXIuY2xhc3NMaXN0LnRvZ2dsZShcImJ1cmdlci1hY3RpdmVcIik7XG5cdH1cblx0dG9nZ2xlci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgb25Ub2dnbGVDbGljayk7XG5cblx0Ly8g0LXRgdC70Lgg0L7QutC90L4g0LLRjNGO0L/QvtGA0YLQsCDQsdC+0LvRjNGI0LUg0YLQsNCx0LvQtdGC0LAgLSDRg9Cx0LjRgNCw0LXQvCB0b2dnbGUg0LrQu9Cw0YHRgdGLINC80LXQvdGOOlxuXHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWluLXdpZHRoOiAxMDIwcHgpXCIpLm1hdGNoZXMpIHtcblx0XHR0b2dnbGVyLmNsYXNzTGlzdC5yZW1vdmUoXCJidXJnZXItYWN0aXZlXCIpO1xuXHR9XG59KVxufVxuXG4oZnVuY3Rpb24oKXtcblx0Ly8gZGVmaW5pbmcgdmFycyAmJiBzZWxlY3RpbmcgZWxlbWVudHM6XG5cdHZhciBidXJnZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKTtcblxuXHQvLyBpbnZva2luZyBtZW51LXRvZ2dsZXIgZnVuYzpcblx0aGFuZGxlTWVudShidXJnZXIpO1xuXG59KSgpO1xuXG4vLyBFT0YgYnVyZ2VyXG5cblxuLy8gZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuXG5cbihmdW5jdGlvbigpIHtcbiAgIC8vIHlvdXIgcGFnZSBpbml0aWFsaXphdGlvbiBjb2RlIGhlcmVcbiAgIC8vIHRoZSBET00gd2lsbCBiZSBhdmFpbGFibGUgaGVyZVxuXG4gICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBmdW5jdGlvbigpe1xuICAgXHRpZiAod2luZG93Lm1hdGNoTWVkaWEoXCIobWF4LXdpZHRoOiA3NjdweClcIikubWF0Y2hlcykge1xuICAgXHRcdHZhciBzdHJpbmcgPSAn0KLQtdGF0L/QvtC80L7RidGMJztcbiAgIFx0XHQkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIHN0cmluZyApO1xuICAgXHR9IGVsc2Uge1xuICAgICAgdmFyIG9yaWdpbiA9ICfQotC10YXQv9C+0LTQtNC10YDQttC60LAnO1xuICAgICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBvcmlnaW4gKTtcbiAgICB9XG4gICB9KTtcblxuXG59KSgpO1xuXG4vLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzIzMTIyMzM2L2phdmFzY3JpcHQtcmVzaXplLWV2ZW50LW5vdC13b3JraW5nP25vcmVkaXJlY3Q9MSZscT0xXG5cblxuaWYgKCAkKHdpbmRvdykud2lkdGgoKSA8IDc2OCkge1xuICAvL0FkZCB5b3VyIGphdmFzY3JpcHQgZm9yIGxhcmdlIHNjcmVlbnMgaGVyZVxuICAoZnVuY3Rpb24oKSB7XG4gICAgdmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgICQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gIH0pKCk7XG59XG4vLyBodHRwOi8vd3d3LmNvYWxtYXJjaC5jb20vYmxvZy9ob3ctdG8tZXhlY3V0ZS1qYXZhc2NyaXB0LWJhc2VkLW9uLXNjcmVlbi1zaXplLXVzaW5nLWpxdWVyeVxuXG4vLyBFT0YgZm9vdGVyLW5hdiB0ZXh0IGNoYW5nZVxuIl19
