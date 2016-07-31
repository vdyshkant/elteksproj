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

// burger animation itself:
$("a.burger-menu").click(function(e){
  e.preventDefault();
  $('.burger-link').toggleClass("burger-active");
});

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9tZWRpYS92ZXJhY3J5cHQ3L3dvcmsvMDFfX2Rldi8wM19fZWx0ZXgtZGV2L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvbWVkaWEvdmVyYWNyeXB0Ny93b3JrLzAxX19kZXYvMDNfX2VsdGV4LWRldi9zcmMvanMvZmFrZV9jY2I1ZjFkMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIHRoZSBlbnRyeSBwb2ludCBmb3IgYnJvd3NlcmlmeVxuLy8gdmFyIGxvZ2dlciA9IHJlcXVpcmUoJy4vbG9nZ2VyJyk7XG4vL1xuLy8gbG9nZ2VyLmxvZygnSHVycmF5LCBpdCB3b3Bya3MhIEFtZCBpdCBjaGFuZ2VkIGFzIHdlbGwuIDopJyk7XG5cbi8vIHNlYXJjaCBmaWVsZFxuXG5hbmltYXRlSGVhZGVyU2VhcmNoKCk7XG5cbmZ1bmN0aW9uIGFuaW1hdGVIZWFkZXJTZWFyY2goKXtcbiAgaWYgKCQoXCIjaW5wdC1zZWFyY2hcIikubGVuZ3RoID4gMCkge1xuICAgICQoXCIjaW5wdC1zZWFyY2hcIikub24oXCJmb2N1c1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgJCh0aGlzKS5wYXJlbnQoJ2xhYmVsJykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pO1xuXG4gICAgJChcIiNpbnB0LXNlYXJjaFwiKS5vbignYmx1cicsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmKCQodGhpcykudmFsKCkubGVuZ3RoID09IDApXG4gICAgICAgICQodGhpcykucGFyZW50KCdsYWJlbCcpLnJlbW92ZUNsYXNzKCdhY3RpdmUnKTtcbiAgICB9KTtcbiAgfVxufVxuXG5cbi8vIGVvZiBzZWFyY2ggZmllbGRcblxuLy8gY291bnRlclxuXG4kKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICQoJyNzdGF0cycpLmVhY2goZnVuY3Rpb24oKXtcbiAgICAgIHZhciBpbWFnZVBvcyA9ICQodGhpcykub2Zmc2V0KCkudG9wO1xuICAgICAgdmFyIHRvcE9mV2luZG93ID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKGltYWdlUG9zIDwgdG9wT2ZXaW5kb3crNjUwKSB7XG4gICAgICAgIGFuaW1hdGVDb3VudGVyKCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0pO1xuXG5mdW5jdGlvbiBhbmltYXRlQ291bnRlcigpe1xuICBpZiAoJCgnI3N0YXRzJykubGVuZ3RoID4gMCkge1xuICAgIHZhciBudW1iZXJzID0gWzgsIDQ1MDAwMCwgMTAsIDI1XSxcbiAgICAgICAgZHVyYXRpb24gPSBbMS41LCA0LjUsIDMuNSwgM10sXG4gICAgICAgIG51bWJlcnAgPSAkKCcjc3RhdHMgLnN0YXQgaDInKSxcbiAgICAgICAgY29tbWFfc2VwYXJhdG9yX251bWJlcl9zdGVwID0gJC5hbmltYXRlTnVtYmVyLm51bWJlclN0ZXBGYWN0b3JpZXMuc2VwYXJhdG9yKCcgJyk7XG5cbiAgICBudW1iZXJwLmVhY2goZnVuY3Rpb24oaSkge1xuICAgICAgJCh0aGlzKS5hbmltYXRlTnVtYmVyKHtcbiAgICAgICAgbnVtYmVyOiBudW1iZXJzW2ldLFxuICAgICAgICBudW1iZXJTdGVwOiBjb21tYV9zZXBhcmF0b3JfbnVtYmVyX3N0ZXBcbiAgICAgIH0sIGR1cmF0aW9uW2ldICogMTAwMCk7XG4gICAgfSk7XG4gIH1cbn1cblxuLy8gZW9mIGNvdW50ZXJcblxuXG4vLyBwcm9kdWN0cyBob3ZlclxuXG5hbmltYXRlUHJvZHVjdEl0ZW0oKTtcblxuZnVuY3Rpb24gYW5pbWF0ZVByb2R1Y3RJdGVtKCl7XG4gICQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCl7XG5cbiAgICBpZiAoJCgnLml0ZW0gLm1ha2UzZCcpLmxlbmd0aCA+IDApIHtcbiAgICAgICQoJy5pdGVtIC5tYWtlM2QnKS5ob3ZlcihmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucGFyZW50KCkuY3NzKCd6LWluZGV4JywgXCIyMFwiKTtcbiAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlJyk7XG4gICAgICAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoJ2FuaW1hdGUnKTtcbiAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLmNzcygnei1pbmRleCcsIFwiMVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8vIGVvZiBwcm9kdWN0cyBob3ZlclxuXG5cblxuLy8gcGFnaW5hdGlvblxuXG5hbmltYXRlUGFnaW5hdGlvbigpO1xuZnVuY3Rpb24gYW5pbWF0ZVBhZ2luYXRpb24oKSB7XG4gIHZhciBwciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcucGFnaW5hdGUubGVmdCcgKTtcbiAgdmFyIHBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvciggJy5wYWdpbmF0ZS5yaWdodCcgKTtcblxuICBpZiAocHIgIT0gJ3VuZGVmaW5lZCcgJiYgcGwgIT0gJ3VuZGVmaW5lZCcgKSB7XG5cbiAgICBwci5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgLTEgKTtcbiAgICBwbC5vbmNsaWNrID0gc2xpZGUuYmluZCggdGhpcywgMSApO1xuXG4gICAgdmFyIGluZGV4ID0gMCwgdG90YWwgPSA1O1xuXG4gICAgZnVuY3Rpb24gc2xpZGUob2Zmc2V0KSB7XG4gICAgICBpbmRleCA9IE1hdGgubWluKCBNYXRoLm1heCggaW5kZXggKyBvZmZzZXQsIDAgKSwgdG90YWwgLSAxICk7XG5cbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICcuY250cicgKS5pbm5lckhUTUwgPSAoIGluZGV4ICsgMSApICsgJyAvICcgKyB0b3RhbDtcblxuICAgICAgcHIuc2V0QXR0cmlidXRlKCAnZGF0YS1zdGF0ZScsIGluZGV4ID09PSAwID8gJ2Rpc2FibGVkJyA6ICcnICk7XG4gICAgICBwbC5zZXRBdHRyaWJ1dGUoICdkYXRhLXN0YXRlJywgaW5kZXggPT09IHRvdGFsIC0gMSA/ICdkaXNhYmxlZCcgOiAnJyApO1xuICAgIH1cblxuICAgIHNsaWRlKDApO1xuICB9XG59XG4vLyBlb2YgcGFnaW5hdGlvblxuXG4vLyBieFNsaWRlclxuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpe1xuICBpZigkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmxlbmd0aCA+IDApIHtcbiAgICAkKCcuYnhzbGlkZXIuZG9jdW1lbnRhdGlvbicpLmJ4U2xpZGVyKHtcbiAgICAgIGF1dG86ZmFsc2UsXG4gICAgICBzcGVlZDogNTAwLFxuICAgICAgcGF1c2U6ODAwLFxuICAgICAgcGFnZXI6dHJ1ZSxcbiAgICAgIGluZmluaXRlTG9vcDogdHJ1ZSxcbiAgICAgIGNvbnRyb2xzOiB0cnVlLFxuICAgICAgcHJldlNlbGVjdG9yOignLnNsaWRlci1wcmV2JyksXG4gICAgICBuZXh0U2VsZWN0b3I6KCcuc2xpZGVyLW5leHQnKSxcbiAgICAgIHByZXZUZXh0OicnLFxuICAgICAgbmV4dFRleHQ6JycsXG4gICAgICBidWlsZFBhZ2VyOiBmdW5jdGlvbihzbGlkZUluZGV4KXtcbiAgICAgICAgc3dpdGNoKHNsaWRlSW5kZXgpe1xuICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0xLmpwZycpO1xuICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0yLmpwZycpO1xuICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgIHJldHVybiBzZXRJbWcoJ3NsaWRlci10aHVtYi0zLmpwZycpO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gcGFnZXJDdXN0b206JyNieC1wYWdlcjInXG4gICAgfSk7XG5cbiAgICAkKCcucGFnZS1kb2N1bWVudGF0aW9uIC5ieC13cmFwcGVyJykuYWRkQ2xhc3MoJ2J4LWRvY3VtZW50YXRpb24nKTtcbiAgfVxufSk7XG5cblxuZnVuY3Rpb24gc2V0SW1nKGlucHV0SW1nU3JjKSB7XG4gIHZhciBpbWdTcmMgPSAnPGltZyBzcmM9XCIuLi9pbWcvJyArIGlucHV0SW1nU3JjICsgJ1wiPic7XG4gIHJldHVybiBpbWdTcmM7XG59XG5cbi8vIGVvZiBieFNsaWRlclxuXG5cbi8vIGZhcSB0b2dnbGUgcGFnZVxuXG4vLyAkKCcubGlzdC1pdGVtIC50aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbi8vICAgJCh0aGlzKS5zaWJsaW5ncygnLmNvbnRlbnQnKS5zbGlkZVRvZ2dsZSgpO1xuLy8gfSlcblxuZHJvcERvd25Db250ZW50SXRlbSgpO1xuXG5mdW5jdGlvbiBkcm9wRG93bkNvbnRlbnRJdGVtKCl7XG4gIGlmICgkKCcuanNGYXFJdGVtJykubGVuZ3RoID4gMCkge1xuICAgICQoJy5mYXEtaXRlbS10aXRsZScpLm9uKCdjbGljaycsZnVuY3Rpb24oKXtcbiAgICAgICQodGhpcykuc2libGluZ3MoJy5mYXEtaXRlbS1jb250ZW50Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICQodGhpcykucGFyZW50KCcuanNGYXFJdGVtJykudG9nZ2xlQ2xhc3MoJ2FjdGl2ZScpO1xuICAgIH0pXG4gIH1cbn1cblxuXG5cbi8vIEVPRiBmYXEgdG9nZ2xlIHBhZ2VcblxuXG5cblxuLy8gaW5kZXggbW9kYWwgY29udGVudFxuXG5pZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQnKSkge1xuICBtb2RhbENvbnRlbnQoKTtcbn1cblxuZnVuY3Rpb24gbW9kYWxDb250ZW50KCkge1xuICB2YXIgbGluayA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXF1ZXN0LWNhbGxiYWNrJyk7XG4gIHZhciBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbC1jb250ZW50Jyk7XG4gIHZhciBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1vZGFsLW92ZXJsYXknKTtcbiAgdmFyIGNsb3NlID0gcG9wdXAucXVlcnlTZWxlY3RvcignLm1vZGFsLWNvbnRlbnQtY2xvc2UnKTtcbiAgdmFyIGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FsbGJhY2stZm9ybScpO1xuICB2YXIgbG9naW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1sb2dpbl0nKTtcbiAgdmFyIHBob25lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW25hbWU9cGhvbmVdJyk7XG4gIHZhciBzdG9yYWdlID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xvZ2luJyk7XG5cbiAgbGluay5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmFkZU91dChwb3B1cCk7XG4gICAgZmFkZU91dChvdmVybGF5KTtcbiAgICBwb3B1cC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICBvdmVybGF5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgIGlmIChzdG9yYWdlKSB7XG4gICAgICBsb2dpbi52YWx1ZSA9IHN0b3JhZ2U7XG4gICAgICBwaG9uZS5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICBsb2dpbi5mb2N1cygpO1xuICAgIH1cbiAgfSk7XG5cbiAgY2xvc2UuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGZhZGVJbihwb3B1cCk7XG4gICAgZmFkZUluKG92ZXJsYXkpO1xuICAgIHBvcHVwLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgLy8gcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnLm1vZGFsLWVycm9yJyk7XG4gIH0pO1xuXG4gIG92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbihlKXtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgZmFkZUluKHBvcHVwKTtcbiAgICBmYWRlSW4ob3ZlcmxheSk7XG4gICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgb3ZlcmxheS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgfSk7XG5cbiAgZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCFsb2dpbi52YWx1ZSB8fCAhcGhvbmUudmFsdWUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIC8vIHBvcHVwLmNsYXNzTGlzdC5hZGQoJ21vZGFsLWVycm9yJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdsb2dpbicsIGxvZ2luLnZhbHVlKTtcbiAgICB9XG4gIH0pXG5cbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBmdW5jdGlvbihlKSB7XG4gICAgaWYgKGUua2V5Q29kZSA9PT0gMjcpIHtcbiAgICAgIGlmKHBvcHVwLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykgfHwgb3ZlcmxheS5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIGZhZGVJbihwb3B1cCk7XG4gICAgICAgIGZhZGVJbihvdmVybGF5KTtcbiAgICAgICAgcG9wdXAuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIG92ZXJsYXkuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICBmdW5jdGlvbiBmYWRlSW4oZWxlbWVudCkge1xuICAgIHZhciBvcCA9IDE7IC8vIGluaXRpYWwgb3BhY2l0eTtcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAob3AgPD0gMC4xKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICBlbGVtZW50LnN0eWxlLm9wYWNpdHkgPSBvcDtcbiAgICAgIGVsZW1lbnQuc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9JyArIG9wICogMTAwICsgJyknO1xuICAgICAgb3AgLT0gb3AgKiAwLjE7XG4gICAgfSwgMTApXG4gIH07XG5cbiAgZnVuY3Rpb24gZmFkZU91dChlbGVtZW50KSB7XG4gICAgdmFyIG9wID0gMC4xOyAvLyBpbml0aWFsIG9wYWNpdHk7XG4gICAgZWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICB2YXIgdGltZXIgPSBzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcbiAgICAgIGlmIChvcCA+PSAxKSB7XG4gICAgICAgIGNsZWFySW50ZXJ2YWwodGltZXIpO1xuICAgICAgfVxuICAgICAgZWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gb3A7XG4gICAgICBlbGVtZW50LnN0eWxlLmZpbHRlciA9ICdhbHBoYShvcGFjaXR5PScgKyBvcCAqIDEwMCArICcpJztcbiAgICAgIG9wICs9IG9wICogMC4xO1xuICAgICAgLy8gYWxlcnQoJ2hlcmUnKTtcbiAgICB9LCAxMCk7XG4gIH07XG5cbn07XG5cblxuLy8gRU9GIGluZGV4IG1vZGFsIGNvbnRlbnRcblxuXG4vLyBkcm9wRG93biBtZW51XG5cblxuXG4vLyB2MlxuXG4vLyAkKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbi8vICAgICAkKCAnLmRyb3Bkb3duJyApLmhvdmVyKFxuLy8gICAgICAgICBmdW5jdGlvbigpe1xuLy8gICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVEb3duKDUwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4vLyAgICAgICAgIH0sXG4vLyAgICAgICAgIGZ1bmN0aW9uKCl7XG4vLyAgICAgICAgICAgICAkKHRoaXMpLmNoaWxkcmVuKCcuc3ViLW1lbnUnKS5zbGlkZVVwKDUwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4vLyAgICAgICAgIH1cbi8vICAgICApO1xuLy8gfSk7IC8vIGVuZCByZWFkeVxuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgJCggJy5kcm9wZG93bicgKS5tb3VzZWVudGVyKFxuICAgICAgICBmdW5jdGlvbigpe1xuICAgICAgICAgICAgJCh0aGlzKS5jaGlsZHJlbignLnN1Yi1tZW51Jykuc2xpZGVEb3duKDUwMCwgJ2Vhc2VJbk91dEN1YmljJyk7XG4gICAgICAgIH1cbiAgICApO1xuICAgICQoICcuZHJvcGRvd24nICkubW91c2VsZWF2ZShcbiAgICAgICAgZnVuY3Rpb24oKXtcbiAgICAgICAgICAgICQodGhpcykuY2hpbGRyZW4oJy5zdWItbWVudScpLnNsaWRlVXAoNTAwLCAnZWFzZUluT3V0Q3ViaWMnKTtcbiAgICAgICAgfVxuICAgICk7XG59KTsgLy8gZW5kIHJlYWR5XG5cbi8vIEVPRiBkcm9wRG93biBtZW51XG5cblxuLy8gYnVyZ2VyXG5cbi8vIGJ1cmdlciBhbmltYXRpb24gaXRzZWxmOlxuJChcImEuYnVyZ2VyLW1lbnVcIikuY2xpY2soZnVuY3Rpb24oZSl7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgJCgnLmJ1cmdlci1saW5rJykudG9nZ2xlQ2xhc3MoXCJidXJnZXItYWN0aXZlXCIpO1xufSk7XG5cbi8vIEVPRiBidXJnZXJcblxuXG4vLyBmb290ZXItbmF2IHRleHQgY2hhbmdlXG5cblxuKGZ1bmN0aW9uKCkge1xuICAgLy8geW91ciBwYWdlIGluaXRpYWxpemF0aW9uIGNvZGUgaGVyZVxuICAgLy8gdGhlIERPTSB3aWxsIGJlIGF2YWlsYWJsZSBoZXJlXG5cbiAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGZ1bmN0aW9uKCl7XG4gICBcdGlmICh3aW5kb3cubWF0Y2hNZWRpYShcIihtYXgtd2lkdGg6IDc2N3B4KVwiKS5tYXRjaGVzKSB7XG4gICBcdFx0dmFyIHN0cmluZyA9ICfQotC10YXQv9C+0LzQvtGJ0YwnO1xuICAgXHRcdCQoJy5mb290ZXItbmF2IHVsIGxpOm50aC1jaGlsZCgzKSBhJykudGV4dCggc3RyaW5nICk7XG4gICBcdH0gZWxzZSB7XG4gICAgICB2YXIgb3JpZ2luID0gJ9Ci0LXRhdC/0L7QtNC00LXRgNC20LrQsCc7XG4gICAgICAkKCcuZm9vdGVyLW5hdiB1bCBsaTpudGgtY2hpbGQoMykgYScpLnRleHQoIG9yaWdpbiApO1xuICAgIH1cbiAgIH0pO1xuXG5cbn0pKCk7XG5cbi8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMjMxMjIzMzYvamF2YXNjcmlwdC1yZXNpemUtZXZlbnQtbm90LXdvcmtpbmc/bm9yZWRpcmVjdD0xJmxxPTFcblxuXG5pZiAoICQod2luZG93KS53aWR0aCgpIDwgNzY4KSB7XG4gIC8vQWRkIHlvdXIgamF2YXNjcmlwdCBmb3IgbGFyZ2Ugc2NyZWVucyBoZXJlXG4gIChmdW5jdGlvbigpIHtcbiAgICB2YXIgc3RyaW5nID0gJ9Ci0LXRhdC/0L7QvNC+0YnRjCc7XG4gICAgJCgnLmZvb3Rlci1uYXYgdWwgbGk6bnRoLWNoaWxkKDMpIGEnKS50ZXh0KCBzdHJpbmcgKTtcbiAgfSkoKTtcbn1cbi8vIGh0dHA6Ly93d3cuY29hbG1hcmNoLmNvbS9ibG9nL2hvdy10by1leGVjdXRlLWphdmFzY3JpcHQtYmFzZWQtb24tc2NyZWVuLXNpemUtdXNpbmctanF1ZXJ5XG5cbi8vIEVPRiBmb290ZXItbmF2IHRleHQgY2hhbmdlXG4iXX0=
