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

  // main-nav-bar appearence:
  $(document).ready(function(){
  var open = false;
  jQuery('.burger-menu').on('click', function() {
      // jQuery(this).find(".burger-menu").toggleClass("main-nav-bar-active");
      if (open == false) {
          jQuery('.main-nav').fadeIn(300);
          open = true;
      } else {
          jQuery('.main-nav').fadeOut(300);
          open = false;
      }
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
